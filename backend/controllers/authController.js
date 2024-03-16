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