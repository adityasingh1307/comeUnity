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

    const msg = message.toLowerCase();

    // -------------------------
    // COMEUNITY RESPONSES
    // -------------------------

    if (msg.includes("blood")) {
      return res.json({
        reply:
          "You can use our Blood Network module to register as a donor, request blood, or find nearby hospitals. Visit Blood Network to get started.",
      });
    }

    if (
      msg.includes("donate food") ||
      msg.includes("food")
    ) {
      return res.json({
        reply:
          "Our Food Donation module allows you to donate food, browse requests, and help people in need.",
      });
    }

    if (
      msg.includes("request blood")
    ) {
      return res.json({
        reply:
          "You can request blood through the Request Blood page by providing your blood group and city.",
      });
    }

    if (
      msg.includes("donate blood")
    ) {
      return res.json({
        reply:
          "Visit the Donate Blood page to register yourself as a donor and help save lives.",
      });
    }

    if (
      msg.includes("hospital")
    ) {
      return res.json({
        reply:
          "You can find nearby medical facilities using our Nearby Hospitals page.",
      });
    }

    if (
      msg.includes("ngo") ||
      msg.includes("ngos")
    ) {
      return res.json({
        reply:
          "Use the Nearby NGOs page to discover NGOs near your location and support community initiatives.",
      });
    }

    if (
      msg.includes("volunteer")
    ) {
      return res.json({
        reply:
          "Our Volunteer Hub helps you join food drives, blood donation camps, and other community activities.",
      });
    }

    if (
      msg.includes("profile")
    ) {
      return res.json({
        reply:
          "Visit your Profile page to manage your account information and preferences.",
      });
    }

    if (
      msg.includes("contribution")
    ) {
      return res.json({
        reply:
          "The My Contributions page displays your blood donation history, achievements, and impact statistics.",
      });
    }

    if (
      msg.includes("my donation") ||
      msg.includes("donation history")
    ) {
      return res.json({
        reply:
          "You can track all your food donations from the My Donations page.",
      });
    }

    if (
      msg.includes("dashboard")
    ) {
      return res.json({
        reply:
          "The Dashboard provides quick access to all ComeUnity modules and your community impact.",
      });
    }

    // -------------------------
    // GROQ FALLBACK
    // -------------------------

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
You are the official ComeUnity Assistant.

ComeUnity contains:
- Dashboard
- Food Donation
- Donate Food
- Food Requests
- My Donations
- Nearby NGOs
- Blood Network
- Donate Blood
- Request Blood
- Nearby Hospitals
- My Contributions
- Volunteer Hub
- AI Assistant
- Profile

Rules:
1. Prioritize ComeUnity features whenever relevant.
2. Keep responses under 60 words.
3. Be friendly and concise.
4. Never mention that you are an AI model.
5. If the user asks a general question, answer normally.
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
    console.error(error);

    res.status(500).json({
      reply:
        "Sorry, Community AI is currently unavailable.",
    });
  }
});

module.exports = router;