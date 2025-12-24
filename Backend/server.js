require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

// ================= Middleware =================
app.use(cors());
app.use(express.json());

// ================= MongoDB Connection =================
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI missing in .env");
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Atlas connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// ================= Schemas =================
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    service: { type: String, required: true },
    customService: { type: String },
    quantity: { type: Number, default: 1 },
    notes: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);


// ================= Nodemailer Transporter (BREVO – FIXED) =================
let transporter = null;

if (
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS
) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  console.log("✅ Email transporter created (Brevo SMTP)");
  } else {
  console.warn("⚠️ Email disabled (SMTP credentials missing)");
  }

// ================= Auth Routes =================
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ name, email, password: hashedPassword }).save();

    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ success: true, message: "Login successful", token });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ================= Appointment Route (HTML SAME) =================
app.post("/api/appointments", async (req, res) => {
  const { name, email, contact, service, customService, quantity, notes } =
    req.body;

  try {
    const appointment = new Appointment({
      name,
      email,
      contact,
      service,
      customService,
      quantity,
      notes,
    });

    await appointment.save();

    // Client ko turant response do
    res.json({
    success: true,
    message: "Appointment booked successfully!",
    });

    // Email ko background mein bhejo (non-blocking)
    if (transporter) {
    transporter
    .sendMail({
      from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "🎉 Appointment Confirmed - VS Tailors",
      html: `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://raw.githubusercontent.com/adeshsonawane46/VS-Tailors/main/frontend/Images/VS%20Brand%20logo%20new.png" alt="VS Tailors" width="150" style="display:block; margin:auto;">
  </div>
  <h2 style="color: #d35400;">Hello ${name},</h2>
  <p>Thank you for booking an appointment with <strong>VS Tailors</strong>!</p>
  <p>Here are your appointment details:</p>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Service</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${service}${
            customService ? ` - ${customService}` : ""
          }</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Quantity</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${quantity}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Contact</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${contact}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Notes</td>
      <td style="border: 1px solid #ddd; padding: 8px;">${
            notes || "None"
          }</td>
    </tr>
  </table>
  <p style="margin-top: 20px;">Our team will contact you shortly to confirm the details.</p>
  <p>Visit our shop or contact us anytime:
    <a href="mailto:vsuniformmanufacturer@gmail.com">vsuniformmanufacturer@gmail.com</a>
  </p>
  <p style="margin-top: 20px;">Thank you for choosing <strong>VS Tailors</strong>!<br>
    <span style="color: #d35400;">Perfect Fit for Every Occasion!</span>
  </p>
  <hr>
  <p style="font-size: 0.9rem; color: #888;">
    VS Tailors | Nashik, Maharashtra, India | +91 9822771573
  </p>
</div>
        `,
      })
      .catch((err) => {
        console.error("❌ Email send failed:", err.message);
      });
    }
  } catch (err) {
    console.error("❌ Appointment save failed:", err);
    res.status(500).json({
      success: false,
      message: "Failed to book appointment",
    });
  }
});

// ================= Start Server =================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
