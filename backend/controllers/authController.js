const User = require('../models/userSchema');


module.exports.getAllUser = async (req, res) => {
  try {
    console.log("its working")

    const user = await User.find({});
    if (user) {
      res.status(200).send(user);
    }

    else {
      res.status(404).send("User not found")
    }
  }
  catch (err) {
    res.status(400).send(err);
  }
}



module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password })
    console.log("user created", user)
  }

  catch (err) {
    console.log(err)
  }
}