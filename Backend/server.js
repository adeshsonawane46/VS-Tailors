require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

// ================= Routes =================

// Auth routes (using routes/auth.js + controllers)
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Appointment routes
const appointmentRoutes = require("./routes/appointment");
app.use("/api/appointments", appointmentRoutes);

// ================= Health Check (optional but useful) =================
app.get("/", (req, res) => {
  res.send("VS Tailors Backend is running 🚀");
});

// ================= Start Server =================
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
