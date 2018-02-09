const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
  name: {
    type: String
  },
  aacCabins: {
    type: Array,
    default: []
  },
  facCabins: {
    type: String,
    default: []
  },
  fac_ssaCabins: {
    type: String,
    default: []
  },
  noneAccessAreas: {
    type: String,
    default: []
  },
});

const Ship = mongoose.model('Ship', shipSchema);
module.exports = Ship;
