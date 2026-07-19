// routes/bloodContributionRoutes.js

const express = require("express");

const router = express.Router();

const {
  getContributions,
} = require(
  "../controllers/bloodContributionController"
);

router.get(
  "/:userId",
  getContributions
);

module.exports = router;