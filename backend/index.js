const express = require('express');
const app = express();
const port = 5001
const authRoutes = require('./routes/authRoute')
const dotenv = require("dotenv").config();
const connectDb = require('./config/db')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


connectDb();

app.get('/', (req, res) => {
  res.send("hello")
})


app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})