const axios = require("axios");
const { NASA_API_KEY } = require("../../config/nasa");

class NasaService {
  constructor() {
    this.apiBaseUrl = "https://api.nasa.gov";
    this.apiKey = NASA_API_KEY;

    // Bind 'this' to the method in the constructor
    this.getMarsRoverPhotos = this.getMarsRoverPhotos.bind(this);
    this.getApodPhotos = this.getApodPhotos.bind(this);
  }

  async getApodPhotos(date, start_date, end_date, count) {
    const params = {
      date,
      start_date,
      end_date,
      count,
      api_key: this.apiKey,
    };

    console.log({ params });

    try {
      const response = await axios.get(`${this.apiBaseUrl}/planetary/apod`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data from NASA API: ", error);
      throw new Error("Failed to fetch data from NASA API");
    }
  }

  async getMarsRoverPhotos(sol, camera, earth_date, page) {
    const params = {
      sol,
      camera,
      earth_date,
      page,
      api_key: this.apiKey,
    };

    console.log({ params });

    try {
      const response = await axios.get(
        `${this.apiBaseUrl}/mars-photos/api/v1/rovers/curiosity/photos`,
        { params }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data from NASA API: ", error);
      throw new Error("Failed to fetch data from NASA API");
    }
  }
}

module.exports = new NasaService();
