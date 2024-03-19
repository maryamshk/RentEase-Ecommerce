const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    // const encryptedPassword = await bcrypt.hash(salt, password);
    const token = createToken(User._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    const user = await User.create({ name, email, password: password });
    console.log('user created', user);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.send('Email is required');
    }

    if (!password) {
      res.send('Password is required');
    }

    if (!email && !password) {
      res.send('Email and password is required');
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send('user not found');
    }
  } catch (err) {
    console.log(err);
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
      res.status(400).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
