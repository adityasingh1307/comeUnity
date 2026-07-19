const express = require("express");

const {
  createFood,
  getMyDonations,
  getAvailableFood,
} = require("../controllers/foodController");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const router = express.Router();

// Donate Food
router.post(
  "/create",
  authMiddleware,
  createFood
);

// My Donations
router.get(
  "/my-donations",
  authMiddleware,
  getMyDonations
);

// Available Food
router.get(
  "/available",
  getAvailableFood
);

module.exports = router;