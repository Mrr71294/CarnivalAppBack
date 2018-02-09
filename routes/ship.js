const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Ship = require('../models/ship-model');

//Create a new Ship//////////////////////////////////////////////////////////////
router.post('/create', (req, res, next) =>{
  const newShip = new Ship({
    name: req.body.name,
    noAccessAreas: req.body.naa,
  });

  newShip.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'A new ship has created',
      id: newShip._id
    });
  });
});



//Find all ships////////////////////////////////////////////////////////////////
router.get('/findAll', (req, res, next) => {
  Ship.find((err, shipList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(shipList);
  });
});

//Find a ship by ID/////////////////////////////////////////////////////////////
router.get('/find/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
  res.status(400).json({ message: 'Specified id is not valid' });
  return;
}

  Ship.findById(req.params.id, (err, theShip) => {
    if (err){
      res.json(err);
      return;
    }
    res.json(theShip);
  });
});

//Edit a Ship///////////////////////////////////////////////////////////////////
router.put('/update/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'specifed id is not valid'});
    return;
  }

  const updates = {
    name: req.body.name
  };

  Ship.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err){
      res.json(err);
      return;
    }
    res.json({
      message: "Your ship has been updated",
      updates
    });
  });

});
//Delete a ship/////////////////////////////////////////////////////////////////
router.delete('/delete/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Ship.remove({ _id: req.params.id}, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    return res.json({
      message: 'The ship was succesfully deleted'
    });
  });
});



module.exports = router;
