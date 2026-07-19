import fs from "fs";
import { extractText } from "../services/pdfService.js";
import { askGemini } from "../services/geminiService.js";

export const jobMatch = async (req, res) => {
  try {
    console.log("===== JOB MATCH STARTED =====");

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required.",
      });
    }

    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job Description is required.",
      });
    }

    // Read Resume
    const buffer = fs.readFileSync(req.file.path);

    // Extract PDF Text
    const resumeText = await extractText(new Uint8Array(buffer));

    const prompt = `
You are an expert ATS Job Match AI.

Compare the resume and the job description.

Return ONLY valid JSON.

{
  "matchScore": 88,
  "matchingSkills":[
    "React",
    "JavaScript"
  ],
  "missingSkills":[
    "Docker",
    "AWS"
  ],
  "suggestions":[
    "Add Docker project",
    "Mention REST APIs",
    "Quantify achievements"
  ]
}

Resume:

${resumeText}

Job Description:

${jobDescription}
`;

    const result = await askGemini(prompt, true);

    fs.unlinkSync(req.file.path);

    // Gemini may wrap JSON in ```json ... ```
    const cleaned = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleaned);

    res.json({
      success: true,
      ...json,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
