const express = require('express');
const app = express();
const port = 5001
const authRoutes = require('./routes/authRoute')
const dotenv = require("dotenv").config();
const connectDb = require('./config/db')
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


connectDb();

app.get('/', (req, res) => {
  res.send("hello")
})


app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})