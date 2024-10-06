const express = require("express");
const {
  getMarsRoverPhotos,
  getApodPhotos,
} = require("../../controllers/nasaController");

const router = express.Router();

// route to get Mars Rover Photos
router.get("/apod-photos", getApodPhotos);

// route to get Mars Rover Photos
router.get("/mars-rover-photos", getMarsRoverPhotos);

module.exports = router;
