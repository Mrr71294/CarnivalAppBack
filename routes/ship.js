const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


//Get
router.get('/findAll', (req, res, next) => {
  Ship.find((err, shipList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(shipList);
  });
});

module.exports = router;
