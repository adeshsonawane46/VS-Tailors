// ===== Appointment Route (Login Not Required) =====

const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

/*
  ===============================
  Email Transporter (Render-safe)
  ===============================
*/
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // MUST be false for 587
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD, // Gmail App Password (16-digit)
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

/*
  ===============================
  Appointment Route
  ===============================
*/
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

    // Save appointment
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
      text: `New appointment from ${name}
Email: ${email}
Contact: ${contact}
Service: ${service}
Custom Service: ${customService || "N/A"}
Quantity: ${quantity}
Notes: ${notes || "None"}`,
    });

    // Confirmation Email to User
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Appointment Confirmation - VS Tailors",
      text: `Dear ${name},

Thank you for booking an appointment with VS Tailors.
Our team will contact you shortly.

- VS Tailors Team`,
    });

    res.status(200).json({
      success: true,
      message: "Appointment booked successfully!",
    });
  } catch (err) {
    console.error("Email / Appointment Error:", err);
    res.status(500).json({
      success: false,
      error: "Failed to book appointment",
    });
  }
});

module.exports = router;
