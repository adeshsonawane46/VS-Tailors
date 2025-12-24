const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  service: { type: String, required: true },
  customService: { type: String },
  quantity: { type: Number, required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
