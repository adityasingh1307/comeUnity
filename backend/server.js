require("dotenv").config();

console.log(
  "GROQ:",
  process.env.GROQ_API_KEY
);

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const authRoutes = require(
  "./routes/authRoutes"
);

const foodRoutes = require(
  "./routes/foodRoutes"
);

const ngoRoutes = require(
  "./routes/ngoRoutes"
);

const bloodRoutes = require(
  "./routes/bloodRoutes"
);

const aiRoutes = require(
  "./routes/aiRoutes"
);

const userRoutes = require(
  "./routes/userRoutes"
);

const bloodContributionRoutes =
  require(
    "./routes/bloodContributionRoutes"
  );

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/food",
  foodRoutes
);

app.use(
  "/api/ngos",
  ngoRoutes
);

app.use(
  "/api/blood",
  bloodRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/blood-contributions",
  bloodContributionRoutes
);

// Home Route

app.get("/", (req, res) => {
  res.send(
    "ComeUnity API Running"
  );
});

// Start Server

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});