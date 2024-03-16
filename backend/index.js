const express = require('express');
const app = express();
const port = process.env.PORT || 5001
const authRoutes = require('./routes/authRoute')
const dotenv = require("dotenv").config();



app.get('/', (req, res) => {
  res.send("hello")
})


app.use('/auth', authRoutes);


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})