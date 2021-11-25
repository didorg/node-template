const carService = require('./car.service');

const getCars = (req, res) => {
  try {
    res.send(carService.cars);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getCars,
};
