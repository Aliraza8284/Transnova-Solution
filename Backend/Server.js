import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// DATABASE
// ==========================================

connectDB();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ==========================================
// ROUTES
// ==========================================

app.use("/api/contact", contactRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/newsletter", newsletterRoutes);

// ==========================================
// TEST
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TransNova Backend API is running",
  });
});

// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});