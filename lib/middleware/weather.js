var weatherApi = require("../../config/weatherAPI.json");
const axios = require("axios");

const getWeatherData = async () => {
  try {
    let urlYa = `${weatherApi.url}lat=55.75396&lon=37.620393`;
    const response = await axios.get(urlYa, {
      headers: {
        "X-Yandex-API-Key": weatherApi.key,
      },
    });
    return [response.data];
  } catch (error) {
    console.error(error);
  }
};

const weatherMiddleware = async (req, res, next) => {
  if (!res.locals.partials) res.locals.partials = {};
  res.locals.partials.weatherContext = await getWeatherData();
  console.log(res.locals.partials.weatherContext);
  next();
};

module.exports = weatherMiddleware;
