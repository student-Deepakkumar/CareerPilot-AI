import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function askGemini(prompt, jsonMode = false) {
  const models = [
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
  ];

  let lastError;

  for (const model of models) {
    try {
      console.log(`Trying model: ${model}`);

      const result = await ai.models.generateContent({
        model,
        contents: `
You are CareerPilot AI.

You are an expert Career Coach.

Your job is to help students with:
- Google Internship
- Microsoft Internship
- Amazon Internship
- DSA
- Resume
- AI
- Web Development
- Interview Preparation
- Career Roadmap

${
  jsonMode
    ? `
IMPORTANT:
Return ONLY valid JSON.
Do NOT write greetings.
Do NOT write markdown.
Do NOT use \`\`\`.
Do NOT explain anything.
Do NOT add text before or after the JSON.
`
    : `
Always:
1. Give personalized answers.
2. Use headings.
3. Use bullet points.
4. Give actionable steps.
5. Encourage the student.
`
}

User Request:

${prompt}
`,
      });

      return result.text;
    } catch (err) {
      console.log(`${model} failed`);
      console.log(err.message);

      lastError = err;
    }
  }

  throw lastError;
}
