const mongoose = require("mongoose");
const URI = 'mongodb+srv://maryamjavedshk:Brooklyn99@cluster0.0yga0wa.mongodb.net/RentEase?retryWrites=true&w=majority&appName=Cluster0'

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(URI, { useNewUrlParser: true })
    console.log(
      "database connected"
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
