// controllers/bloodContributionController.js

const BloodContribution = require(
  "../models/BloodContribution"
);

exports.getContributions = async (req, res) => {
  try {
    const contributions =
      await BloodContribution.find({
        userId: req.params.userId,
      });

    const total = contributions.length;

    const points = contributions.reduce(
      (sum, item) => sum + item.points,
      0
    );

    res.json({
      donations: total,
      livesSaved: total * 3,
      points,
      bloodGroup:
        contributions[0]?.bloodGroup || "N/A",
      donationsList: contributions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};