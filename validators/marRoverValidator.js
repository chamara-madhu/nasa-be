const validator = require("validator");
const { cameraOptions } = require("../config/constant");

// Create an array of valid camera values for easy checking
const validCameraValues = cameraOptions.map((option) => option.value);

exports.marRoverValidator = (data) => {
  // Check if both fields are provided
  if (data.sol && data.earth_date) {
    return {
      error: "You can only provide either 'sol' or 'earth date', not both.",
      isValid: false,
    };
  }

  // Check if neither field is provided
  if (!data.sol && !data.earth_date) {
    return {
      error: "Either 'sol' or 'earth date' is required.",
      isValid: false,
    };
  }

  // Validate sol if provided
  if (data.sol && !validator.isInt(data.sol, { min: 0 })) {
    return {
      error: "Sol must be a non-negative integer.",
      isValid: false,
    };
  }

  // Validate earth_date if provided
  if (data.earth_date && !validator.isISO8601(data.earth_date)) {
    return {
      error: "Earth date must be a valid date in ISO 8601 format (YYYY-MM-DD).",
      isValid: false,
    };
  }

  // Validate camera if provided
  if (data.camera && !validCameraValues.includes(data.camera)) {
    return {
      error: `Camera must be one of the following: ${validCameraValues.join(
        ", "
      )}`,
      isValid: false,
    };
  }

  // If no errors, return isValid true
  return {
    isValid: true,
  };
};
