const express = require("express");
const router = express.Router();

const {
  registerDonor,

  searchDonors,

} = require("../controllers/bloodController");

router.post("/register", registerDonor);


router.get("/search", searchDonors);


module.exports = router;