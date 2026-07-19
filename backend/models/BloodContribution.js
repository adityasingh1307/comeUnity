// models/BloodContribution.js

const mongoose = require("mongoose");

const bloodContributionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    hospital: String,

    bloodGroup: String,

    points: {
      type: Number,
      default: 100,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      default: "Completed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "BloodContribution",
  bloodContributionSchema
);