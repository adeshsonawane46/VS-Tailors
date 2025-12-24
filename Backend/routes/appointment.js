// ===== Appointment Route (Login Not Required) =====

const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

router.post("/", async (req, res) => {
  try {
    const { name, email, contact, service, customService, quantity, notes } = req.body;

    // Agar login ho, tab userId assign karo

    const newAppointment = new Appointment({
      name,
      email,
      contact,
      service,
      customService,
      quantity,
      notes,
    });

    await newAppointment.save();

    // Email to Admin
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Appointment Booked",
      text: `New appointment from ${name}, Email: ${email}, Contact: ${contact}, Service: ${service}, Custom Service: ${customService || 'N/A'}, Quantity: ${quantity}, Additional Notes: ${notes || 'None'}`,
    });

    // Confirmation Email to User
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Appointment Confirmation",
      text: `Dear ${name},\n\nThank you for booking an appointment with VS Tailors. We will contact you shortly.\n\n- VS Tailors Team`,
    });

    res.status(200).json({ success: true, message: "Appointment booked successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to book appointment" });
  }
});
