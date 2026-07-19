import { askGemini } from "../services/geminiService.js";

export const interviewCoach = async (req, res) => {
  try {
    const { company, role, difficulty, question, answer } = req.body;

    const prompt = `
You are a Senior Technical Interviewer.

Company:
${company}

Role:
${role}

Difficulty:
${difficulty}

Interview Question:
${question}

Candidate Answer:
${answer}

Return ONLY valid JSON.

{
 "overallScore":8,
 "communication":9,
 "technical":8,
 "confidence":8,
 "feedback":[
   "...",
   "...",
   "..."
 ],
 "nextQuestion":"..."
}
`;

    const response = await askGemini(prompt, true);

    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleaned);

    res.json(json);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
