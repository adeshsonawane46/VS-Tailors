// ===== Appointment Route (Login Not Required) =====

const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const nodemailer = require("nodemailer");

/*
  ===============================
  Email Transporter (Brevo SMTP)
  ===============================
*/
const transporter = nodemailer.createTransport({
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
      from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
      to: process.env.SENDER_EMAIL,
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
      from: `VS Tailors <${process.env.SENDER_EMAIL}>`,
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
