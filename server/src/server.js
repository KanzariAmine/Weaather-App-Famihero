const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const createError = require("http-errors");
const CityWeather = require("./router/city.route");
require("dotenv").config();

//Create express app
const app = express();

//Logger middleware for node js
app.use(morgan("dev"));
app.use(cors());

//parse application/json
app.use(express.json());

//Routers//

//Test server
app.get("/", (req, res) => {
  res.send("Hello from node server");
});

//API Routers
app.use("/api/v1", CityWeather);

//Handel Error
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = process.env.PORT || 1919;
const startServer = async () => {
  try {
    app.listen(port, console.log(`🚀 Server start on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};
module.exports = startServer;
