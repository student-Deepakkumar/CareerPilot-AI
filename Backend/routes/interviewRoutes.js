import express from "express";
import { interviewCoach } from "../controllers/interviewController.js";

const router = express.Router();

router.post("/interview", interviewCoach);

export default router;
