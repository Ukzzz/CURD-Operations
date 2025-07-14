const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
   age: {
    type: Number,
    required: true,
    min: 18
  },
   cnic: {
    type: Number,
    required: true,
    min: 1000000000000,
    max: 9999999999999
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('USER', userSchema);