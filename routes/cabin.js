const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cabin = require('../models/cabin-model');

//Create a new Cabin//////////////////////////////////////////////////////////////
router.post('/create', (req, res, next) =>{
  const newCabin = new Cabin({
    name: req.body.name,
    noAccessAreas: req.body.naa,
  });

  newCabin.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'A new cabin has created',
      id: newCabin._id
    });
  });
});



//Find all cabins////////////////////////////////////////////////////////////////
router.get('/findAll', (req, res, next) => {
  Cabin.find((err, cabinList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(cabinList);
  });
});

//Find a cabin by ID/////////////////////////////////////////////////////////////
router.get('/find/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
  res.status(400).json({ message: 'Specified id is not valid' });
  return;
}

  Cabin.findById(req.params.id, (err, theCabin) => {
    if (err){
      res.json(err);
      return;
    }
    res.json(theCabin);
  });
});

//Edit a Cabin///////////////////////////////////////////////////////////////////
router.put('/update/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'specifed id is not valid'});
    return;
  }

  const updates = {
    name: req.body.name
  };

  Cabin.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err){
      res.json(err);
      return;
    }
    res.json({
      message: "Your cabin has been updated",
      updates
    });
  });

});
//Delete a cabin/////////////////////////////////////////////////////////////////
router.delete('/delete/:id', (req, res, next) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Cabin.remove({ _id: req.params.id}, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    return res.json({
      message: 'The cabin was succesfully deleted'
    });
  });
});




module.exports = router;
