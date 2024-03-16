const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userScehma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxlength: [30, 'Name cannot exceed 30 characters'],
  },

  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },

  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Minimum password length is 6 characters'],
  },
});


const User = mongoose.model('user', userScehma);
module.exports = User;