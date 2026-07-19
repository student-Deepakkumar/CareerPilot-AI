import fs from "fs";
import { extractText } from "../services/pdfService.js";
import { askGemini } from "../services/geminiService.js";

export const analyzeResume = async (req, res) => {
  try {
    console.log("1. Request received");

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required.",
      });
    }

    console.log("2. File uploaded:", req.file.originalname);

    const buffer = fs.readFileSync(req.file.path);
    console.log("3. File read successfully");

    const resumeText = await extractText(buffer);
    console.log("4. PDF text extracted");
    console.log(resumeText.substring(0, 300));

    const prompt = `
You are an ATS Resume Analyzer API.

You MUST respond with ONLY valid JSON.

Rules:
- No greetings
- No explanations
- No markdown
- No code fences
- No extra text

Return exactly:

{
  "score": 85,
  "strengths": [
    "..."
  ],
  "improvements": [
    "..."
  ]
}

Resume:

${resumeText}
`;

    console.log("5. Sending to Gemini...");

    const response = await askGemini(prompt, true);

    // Remove markdown code fences
    let cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Find the first JSON object
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("Gemini did not return valid JSON.");
    }

    cleaned = cleaned.substring(start, end + 1);

    console.log("========== CLEANED JSON ==========");
    console.log(cleaned);

    const parsed = JSON.parse(cleaned);

    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      score: parsed.score,
      strengths: parsed.strengths,
      improvements: parsed.improvements,
    });
  } catch (error) {
    console.error("========== ERROR ==========");
    console.error(error);
    console.error(error.stack);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
