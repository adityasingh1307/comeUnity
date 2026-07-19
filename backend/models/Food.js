const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    foodName: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    isVeg: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    expiryTime: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    phone: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Submitted",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Food",
  foodSchema
);