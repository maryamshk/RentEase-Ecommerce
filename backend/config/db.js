const mongoose = require("mongoose");

const connectDb = async () => {
  const URI = 'mongodb+srv://maryamjavedshk:Brooklyn99@cluster0.0yga0wa.mongodb.net/RentEase?retryWrites=true&w=majority&appName=Cluster0'
  try {
    const connect = await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(
      "database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
