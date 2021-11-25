const express = require('express');
const carController = require('./car.controller');

const router = express.Router();

// ** Car Service
router.get('/', carController.getCars);
// router.get('/quote/:id', carController.getByID);
// router.post('/', carController.addCar);
// router.delete('/:id', carController.deleteByID);

module.exports = router;
