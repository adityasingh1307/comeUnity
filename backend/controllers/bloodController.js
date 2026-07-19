const BloodDonor = require("../models/BloodDonor");
const BloodContribution = require(
  "../models/BloodContribution"
);

exports.registerDonor = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    // Save donor in donor network
    const donor = await BloodDonor.create(
      req.body
    );

    // Save contribution history
    await BloodContribution.create({
      userId: req.body.userId,
      hospital:
        req.body.hospital ||
        "Community Blood Drive",
      bloodGroup: req.body.bloodGroup,
      points: 100,
      status: "Completed",
    });

    console.log("SUCCESS:", donor);

    res.status(201).json({
      success: true,
      message:
        "Donor registered successfully.",
      donor,
    });
  } catch (err) {
    console.log("ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.searchDonors = async (req, res) => {
  try {
    const { bloodGroup, city } =
      req.query;

    let query = {
      available: true,
    };

    if (bloodGroup) {
      query.bloodGroup = bloodGroup;
    }

    if (city) {
      query.city = {
        $regex: city,
        $options: "i",
      };
    }

    const donors =
      await BloodDonor.find(query);

    res.json({
      success: true,
      donors,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};