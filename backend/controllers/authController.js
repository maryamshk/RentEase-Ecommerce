const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')

module.exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

// creating token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const token = createToken(User._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    const user = await User.create({ name, email, password: encryptedPassword });
    console.log('user created', user);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.json('Email and password is required');
    }

    if (!email) {
      res.json('Email is required');
    }

    if (!password) {
      res.json('Password is required');
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(200).send(user);
      res.json({ success: true })
    } else {
      res.status(404).json('No user found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
    res.json({ success: false });

  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200);
      res.cookie('jwt', '', { maxAge: 1 });
      res.send('User logged out.');
    } else {
      res.status(400).send('No user found');
    }
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
