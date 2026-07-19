import express from "express";
import multer from "multer";
import { jobMatch } from "../controllers/jobMatchController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/job-match", upload.single("resume"), jobMatch);

export default router;
