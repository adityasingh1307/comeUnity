const User = require("../models/User");
const Food = require("../models/Food");
const BloodDonor = require("../models/BloodDonor");
const bcrypt = require("bcryptjs");

// GET PROFILE

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.id
    ).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({
          message: "User not found",
        });
    }

    const foodCount =
      await Food.countDocuments({
        userId: req.user.id,
      });

    const bloodData =
      await BloodDonor.findOne({
        userId: req.user.id,
      });

    const bloodCount =
      bloodData?.totalDonations || 0;

    const livesSaved =
      bloodCount * 3;

    const achievements = [];

    if (
      foodCount > 0 ||
      bloodCount > 0
    ) {
      achievements.push(
        "🥇 First Donation"
      );
    }

    if (bloodCount > 0) {
      achievements.push(
        `❤️ Saved ${livesSaved} Lives`
      );
    }

    if (bloodCount >= 5) {
      achievements.push(
        "🩸 Blood Champion"
      );
    }

    if (foodCount >= 5) {
      achievements.push(
        "🍲 Food Hero"
      );
    }

    if (
      foodCount + bloodCount >= 10
    ) {
      achievements.push(
        "⭐ Gold Member"
      );
    }

    res.status(200).json({
      ...user._doc,

      foodDonations:
        foodCount,

      bloodDonations:
        bloodCount,

      livesSaved,

      achievements,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch profile",
    });
  }
};

// UPDATE PROFILE

exports.updateProfile = async (
  req,
  res
) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      bloodGroup,
    } = req.body;

    const user =
      await User.findById(
        req.user.id
      );

    user.firstName =
      firstName ||
      user.firstName;

    user.lastName =
      lastName ||
      user.lastName;

    user.email =
      email ||
      user.email;

    user.phone =
      phone ||
      user.phone;

    user.address =
      address ||
      user.address;

    user.bloodGroup =
      bloodGroup ||
      user.bloodGroup;

    await user.save();

    res.json({
      message:
        "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to update profile",
    });
  }
};

// CHANGE PASSWORD

exports.changePassword = async (
  req,
  res
) => {
  try {
    const {
      oldPassword,
      newPassword,
    } = req.body;

    const user =
      await User.findById(
        req.user.id
      );

    const match =
      await bcrypt.compare(
        oldPassword,
        user.password
      );

    if (!match) {
      return res.status(400).json({
        message:
          "Incorrect password",
      });
    }

    user.password =
      await bcrypt.hash(
        newPassword,
        10
      );

    await user.save();

    res.json({
      message:
        "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Unable to change password",
    });
  }
};