const { Router } = require("express");
const router = Router();
const { getCityWeather } = require("../controller/city.controller");

/**
 * @route       POST /city
 * @description This route for get city weather
 * @access      Public
 */
router.route("/city").post(getCityWeather);

module.exports = router;
