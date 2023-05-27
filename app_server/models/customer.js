var mongoose = require('mongoose');
var customerSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,

  },
  CNIC: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model('customer', customerSchema);



