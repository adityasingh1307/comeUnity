const mongoose = require("mongoose");

const bloodDonorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

   dob: {
    type: Date,
    required: true
},

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

  

    available: {
      type: Boolean,
      default: true,
    },

    location: {
      type: {
        type: String,
        default: "Point",
      },

      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },

    totalDonations: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

bloodDonorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model(
  "BloodDonor",
  bloodDonorSchema
);