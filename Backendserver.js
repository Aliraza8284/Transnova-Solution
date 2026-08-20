// Backendserver.js

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// ==========================================
// ENV CONFIGURATION
// ==========================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});

// ==========================================
// EXPRESS APP
// ==========================================

const app = express();

app.use(cors());
app.use(express.json());

// ==========================================
// DEBUG / SERVER INFO
// ==========================================

console.log("=================================");
console.log("🚀 TransNova Backend Started");
console.log("=================================");

console.log(
  "📧 BREVO_EMAIL:",
  process.env.BREVO_EMAIL || "❌ Not Set"
);

console.log(
  "🔑 BREVO_SMTP_KEY:",
  process.env.BREVO_SMTP_KEY ? "✅ Set" : "❌ Not Set"
);

console.log(
  "📦 MONGO_URI:",
  process.env.MONGO_URI ? "✅ Set" : "❌ Not Set"
);

// ==========================================
// MONGODB CONNECTION
// ==========================================

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env");
} else {
  mongoose
    .connect(process.env.MONGO_URI, {
      tls: true,
      serverSelectionTimeoutMS: 10000,
    })
    .then(() => {
      console.log("✅ MongoDB Connected");
    })
    .catch((err) => {
      console.error("❌ MongoDB Error:", err.message);
      console.log("⚠️ Server will continue without MongoDB");
    });
}

// ==========================================
// BREVO SMTP
// ==========================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp-relay.brevo.com",

  port: Number(process.env.SMTP_PORT) || 587,

  secure: false,

  auth: {
    user: process.env.BREVO_EMAIL,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

// ==========================================
// VERIFY SMTP
// ==========================================

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Error:", error.message);
    console.log("⚠️ Please check Brevo SMTP credentials");
  } else {
    console.log("✅ SMTP Connected Successfully");
  }
});

// ==========================================
// OTP STORE
// ==========================================

const otpStore = {};

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "TransNova Backend is running",
  });
});

// ==========================================
// API 1: SEND OTP
// ==========================================

app.post("/api/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Save OTP for 5 minutes
    otpStore[email] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    };

    console.log(`🔑 OTP generated for: ${email}`);

    // Send email
    await transporter.sendMail({
      from: `"TransNova" <${process.env.BREVO_EMAIL}>`,

      to: email,

      subject: "Your TransNova OTP Code",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 500px;
          margin: 0 auto;
          background: #f8f9fa;
          border-radius: 10px;
          overflow: hidden;
        ">

          <div style="
            text-align: center;
            padding: 25px;
            background: #FF6B35;
          ">
            <h1 style="
              color: white;
              margin: 0;
            ">
              TransNova
            </h1>
          </div>

          <div style="
            background: white;
            padding: 30px;
          ">

            <h2>Your OTP Code</h2>

            <p>
              Use the following OTP to verify your email address:
            </p>

            <div style="
              background: #f0f0f0;
              padding: 20px;
              text-align: center;
              border-radius: 8px;
              margin: 20px 0;
            ">

              <span style="
                font-size: 32px;
                font-weight: bold;
                color: #FF6B35;
                letter-spacing: 8px;
              ">
                ${otp}
              </span>

            </div>

            <p style="color: #666;">
              This OTP is valid for 5 minutes.
            </p>

            <p style="color: #666;">
              If you did not request this OTP, please ignore this email.
            </p>

          </div>

        </div>
      `,

      text: `
Your TransNova OTP is: ${otp}

This OTP is valid for 5 minutes.
      `,
    });

    console.log(`✅ OTP email sent to ${email}`);

    res.json({
      success: true,
      message: "OTP sent to your email!",
      emailSent: true,
    });

  } catch (error) {
    console.error("❌ Email Send Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to send OTP email",
      error: error.message,
    });
  }
});

// ==========================================
// API 2: VERIFY OTP
// ==========================================

app.post("/api/verify-otp", (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const record = otpStore[email];

    if (!record) {
      return res.status(400).json({
        success: false,
        message: "No OTP found",
      });
    }

    // Check expiration
    if (Date.now() > record.expiresAt) {
      delete otpStore[email];

      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    // Check OTP
    if (record.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // OTP verified
    delete otpStore[email];

    res.json({
      success: true,
      message: "Email verified!",
    });

  } catch (error) {
    console.error("❌ OTP Verification Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================================
// APPLICATION SCHEMA
// ==========================================

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,

  experience: String,
  language: String,
  level: String,

  salary: Number,
  currency: String,

  start_date: String,

  selectedJob: String,

  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent model overwrite
const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);

// ==========================================
// API 3: SAVE APPLICATION
// ==========================================

app.post("/api/save-application", async (req, res) => {
  try {
    const application = new Application(req.body);

    await application.save();

    console.log("✅ Application saved");

    res.json({
      success: true,
      message: "Application saved!",
    });

  } catch (error) {
    console.error(
      "❌ Save Application Error:",
      error.message
    );
                         
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================================
// START SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Backend running on port " + PORT);
  console.log(
    "🌐 Test: http://localhost:" + PORT
  );
  console.log("=================================");
});