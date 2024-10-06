const { getMarsRoverPhotos } = require("../api/nasa/nasa.service");

exports.getApodPhotos = async (date, start_date, end_date, count) => {
  return await getApodPhotos(date, start_date, end_date, count);
};

exports.getMarsRoverPhotos = async (sol, camera, earth_date, page) => {
  return await getMarsRoverPhotos(sol, camera, earth_date, page);
};
