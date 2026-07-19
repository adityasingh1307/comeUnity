const express = require("express");
const {
  getNGOsByCity,
} = require("../controllers/ngoController");

const router = express.Router();

router.get("/:city", getNGOsByCity);

module.exports = router;