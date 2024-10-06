const validator = require("validator");

exports.apodValidator = (data) => {
  const { date, start_date, end_date, count, thumbs } = data;

  // Check conflicting parameters with 'date', 'start_date', and 'end_date'
  if (
    (date && (start_date || end_date)) ||
    (count !== undefined && (date || start_date || end_date))
  ) {
    return {
      error:
        "Invalid combination: 'date' cannot be used with 'start_date' or 'end_date'. 'count' cannot be used with 'date', 'start_date', or 'end_date'.",
      isValid: false,
    };
  }

  // Validate 'date', 'start_date', and 'end_date' (optional, must be in YYYY-MM-DD format)
  const dateFields = { date, start_date, end_date };
  for (const [field, value] of Object.entries(dateFields)) {
    if (
      value &&
      !validator.isDate(value, { format: "YYYY-MM-DD", strictMode: true })
    ) {
      return {
        error: `Invalid ${field} format, expected YYYY-MM-DD.`,
        isValid: false,
      };
    }
  }

  // Ensure 'start_date' is not after 'end_date'
  if (start_date && end_date && new Date(start_date) > new Date(end_date)) {
    return {
      error: "'start_date' cannot be later than 'end_date'.",
      isValid: false,
    };
  }

  // Validate 'count' (optional, must be a positive integer)
  if (count !== undefined && !validator.isInt(count.toString(), { min: 1 })) {
    return {
      error: "'count' must be a positive integer.",
      isValid: false,
    };
  }

  // If no errors, return isValid true
  return {
    isValid: true,
  };
};
