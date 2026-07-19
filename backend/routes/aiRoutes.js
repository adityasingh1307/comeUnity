const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
            You are CommunityOS AI.

            Help users with:
            - Food Donation
            - Blood Donation
            - NGOs
            - Volunteering
            - Government Schemes
            - Emergency Assistance

            Keep answers short and friendly.
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    res.json({
      reply:
        completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "Something went wrong.",
    });
  }
});

module.exports = router;