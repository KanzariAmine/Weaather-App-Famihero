const fetch = require("node-fetch");
const pool = require("../utils/db_connection");
require("dotenv").config();
const getCityWeather = async (req, res, next) => {
  try {
    //Get the city name from the frontEnd
    const { city1 } = req.body;

    //Call the weather api with the city
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${process.env.WEATHER_API_KEY}`
    );
    const data = await response.json();
    //Get what you need from the API response
    const temperature = data.main.temp;
    const city = data.name;
    const country = data.sys.country;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    //Insert the data in postgreSQL DB
    const newCityWeather = await pool.query(
      "INSERT INTO city ( city, country, description, temperature, humidity) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [city, country, description, temperature, humidity]
    );
    res.status(200).json(newCityWeather.rows[0]);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getCityWeather };
