const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

let transporter = null;

// Create transporter only if SMTP exists
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
  });
}

if (transporter) {
  transporter.verify((error, success) => {
    if (error) {
      console.error("❌ SMTP VERIFY FAILED:", error.message);
    } else {
      console.log("✅ SMTP SERVER READY TO SEND EMAILS");
    }
  });
}


router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      contact,
      service,
      customService,
      quantity,
      notes,
    } = req.body;

    // 1️⃣ Save appointment
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

    // 2️⃣ Respond immediately
    res.status(200).json({
      success: true,
      message: "Appointment booked successfully!",
    });

    // 3️⃣ Send emails in background (NON-BLOCKING)
    if (transporter) {
      // ✅ ADMIN EMAIL
      transporter
        .sendMail({
          from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
          to: process.env.SENDER_EMAIL,
          subject: "📩 New Appointment Booked",
          html: `
            <h3>New Appointment Details</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Contact:</b> ${contact}</p>
            <p><b>Service:</b> ${service}</p>
            <p><b>Quantity:</b> ${quantity}</p>
            <p><b>Notes:</b> ${notes || "None"}</p>
          `,
        })
        .catch(err =>
          console.error("❌ Admin email failed:", err.message)
        );

      // ✅ USER EMAIL
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
        .catch(err =>
          console.error("❌ User email failed:", err.message)
        );
    }
  } catch (err) {
  console.error("❌ Appointment error:", err);
  res.status(500).json({
    success: false,
    message: "Server error while booking appointment",
  });
}
});

module.exports = router;
