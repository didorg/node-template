const carService = require('./car.service');

const getCars = (req, res) => {
  try {
    res.send(carService.getCars);
  } catch (err) {
    console.error(err.message);
  }
};

const getPricey = (req, res) => {
  try {
    res.send(carService.getPriceyCars);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getCars,
  getPricey,
};
