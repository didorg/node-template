'use strict';
const cars = require('../data/cars.json');

/**
 * Better Comments extension
 ** Important information is highlighted
 * ! Deprecated method, do not use
 * ? Should this method be exposed in the public API?
 * TODO: refactor this method so that it conforms to the API
 * @param myParam The parameter for this method
 */

const dealerCars = () => cars;

const getCars = dealerCars();

const getPriceyCars = getCars.map((item) => {
  return {
    ...item,
    price: item.price * 1.2,
  };
});

module.exports = {
  getCars,
  getPriceyCars,
};
