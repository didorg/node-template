const carService = require('./car.service');

/**
 * Better Comments extension
 ** Important information is highlighted
 * ! Deprecated method, do not use
 * ? Should this method be exposed in the public API?
 * TODO: refactor this method so that it conforms to the API
 * @param myParam The parameter for this method
 */

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
