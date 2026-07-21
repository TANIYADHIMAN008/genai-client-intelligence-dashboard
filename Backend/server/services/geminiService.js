require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function analyzeConversation(conversation) {
  try {
    const completion = await client.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324",

      messages: [
        {
          role: "system",
          content: `
You are an AI healthcare conversation analyzer.

Your task is to analyze a conversation between a coach and a client.

Return ONLY a valid JSON object.

DO NOT:
- Write explanations.
- Write "Here's the analysis".
- Write Markdown.
- Wrap the JSON inside \`\`\`json.
- Add any text before or after the JSON.

Return this exact JSON structure:

{
  "weeklySummary": "",
  "nutritionAdherence": "",
  "exerciseSteps": "",
  "sleep": "",
  "waterIntake": "",
  "symptomsStress": "",
  "engagementLevel": "",
  "keyBarriers": [],
  "pendingActions": [],
  "riskFlags": [],
  "coachRecommendation": "",
  "supportingEvidence": [],
  "confirmedFacts": [],
  "clientReported": [],
  "aiInference": [],
  "missingInformation": []
}
`,
        },
        {
          role: "user",
          content: conversation,
        },
      ],

      temperature: 0.2,
      max_tokens: 1500,
    });

    let text = completion.choices[0].message.content;

    console.log("\n================ AI RESPONSE ================\n");
    console.log(text);
    console.log("\n=============================================\n");

    // Remove markdown if present
    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON if model adds extra text
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("No JSON object found in AI response.");
    }

    const jsonText = text.substring(start, end + 1);

    return JSON.parse(jsonText);
  } catch (error) {
    console.error("\n=========== OPENROUTER ERROR ===========");
    console.error(error.response?.data || error.message);
    console.error("========================================\n");

    throw error;
  }
}

module.exports = {
  analyzeConversation,
};