const Food = require("../models/Food");

const createFood = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.user);

    const food = await Food.create({
      userId: req.user.id,

      foodName: req.body.foodName,
      quantity: req.body.quantity,
      category: req.body.category,
      isVeg: req.body.isVeg,
      city: req.body.city,
      address: req.body.address,
      expiryTime: req.body.expiryTime,
      description: req.body.description,
      phone: req.body.phone,


      status: "Submitted",

    });

    res.status(201).json({
      success: true,
      message: "Food donated successfully!",
      food,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getMyDonations = async (req, res) => {
  try {
    const donations = await Food.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAvailableFood = async (req, res) => {
  try {
    const { city, foodType } = req.query;

    let query = {};

    if (city) {
  query.city = {
    $regex: city,
    $options: "i",
  };
}

if (foodType) {
  query.isVeg = {
    $regex: foodType,
    $options: "i",
  };
}

    const foods = await Food.find(query).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      foods,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createFood,
  getMyDonations,
  getAvailableFood,
};