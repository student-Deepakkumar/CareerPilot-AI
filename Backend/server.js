import { askGemini } from "./services/geminiService.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobMatchRoutes from "./routes/jobMatchRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

dotenv.config(); // Load .env first
//connectDB(); // Then connect to MongoDB

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api", resumeRoutes);
app.use("/api", jobMatchRoutes);
app.use("/api", interviewRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    status: "Backend Running 🚀",
  });
});

// Test Gemini
app.get("/api/test", async (req, res) => {
  try {
    const response = await askGemini(
      "Introduce yourself as CareerPilot AI in 3 short lines.",
    );

    res.json({
      success: true,
      response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Chat Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await askGemini(message);

    res.json({
      success: true,
      reply,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server Started on http://localhost:5000");
});
