const mongoose = require('mongoose');

const cabinSchema = new mongoose.Schema({
  cabinNumber: {
    type: String
  },
  capacity: {
    type: Number
  },
  category: {
    type: String
  },
  //Type of bedding//
  bedding: {
    type: String
  },
  entryWidth: {
    type: Number
  },
  //Bathroom Entry Width//
  bathroomWidth: {
    type: Number
  },
  balconyWidth: {
    type: Number
  },
  autoDoor: {
    type: Boolean
  },
  //Cabin Turn Around Space//
  cabinTAS: {
    type: Boolean
  },
  //Bathroom Turn Around Space//
  bathroomTAS: {
    type: Boolean
  },
  bathroomLip: {
    type: String
  },
  balconyLip: {
    type: String
  },
  showerLip: {
    type: String
  },
  showerSeat: {
    type: Boolean
  },
  smallCabin: {
    type: Boolean
  }
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Cabin = mongoose.model('Cabin', cabinSchema );
module.exports = Cabin;
