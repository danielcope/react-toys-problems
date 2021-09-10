require("dotenv").config();
const { WEATHER_KEY } = process.env;

module.exports = {
  fetchKey: (req, res) => {
    res.status(200).send(WEATHER_KEY);
  },
};
