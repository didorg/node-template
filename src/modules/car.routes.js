const express = require('express');
const carController = require('./car.controller');

const router = express.Router();

router.get('/', carController.getCars);
router.get('/pricey', carController.getPricey);
// router.get('/quote/:id', carController.getByID);
// router.post('/', carController.addCar);
// router.delete('/:id', carController.deleteByID);

module.exports = router;
