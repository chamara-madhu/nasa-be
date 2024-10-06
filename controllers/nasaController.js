const { getApodPhotos } = require("../api/nasa/nasa.service");
const { getMarsRoverPhotos } = require("../services/nasaService");
const { apodValidator } = require("../validators/apodValidator");
const { marRoverValidator } = require("../validators/marRoverValidator");

exports.getApodPhotos = async (req, res) => {
  try {
    const { error, isValid } = apodValidator(req.query);

    // Validate data and return error if invalid
    if (!isValid) {
      return res.status(400).json({ message: error });
    }

    // Extract query parameters from the request
    const { date, start_date, end_date, count } = req.query;

    console.log({ date, start_date, end_date, count });

    // Call the service to get Mars Rover photos
    const data = await getApodPhotos(date, start_date, end_date, count);

    // Send back the data as JSON
    return res.status(200).json(data);
  } catch (err) {
    // Log the error and send a generic error response
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Failed to fetch Mars Rover photos" });
  }
};

exports.getMarsRoverPhotos = async (req, res) => {
  try {
    const { error, isValid } = marRoverValidator(req.query);

    // Validate data and return error if invalid
    if (!isValid) {
      return res.status(400).json({ message: error });
    }

    // Extract query parameters from the request
    const { sol, camera, earth_date, page } = req.query;

    console.log({ sol, camera, earth_date, page });

    // Call the service to get Mars Rover photos
    const data = await getMarsRoverPhotos(sol, camera, earth_date, page);

    // Send back the data as JSON
    return res.status(200).json(data);
  } catch (err) {
    // Log the error and send a generic error response
    console.error(err.message);
    return res
      .status(500)
      .json({ message: "Failed to fetch Mars Rover photos" });
  }
};
