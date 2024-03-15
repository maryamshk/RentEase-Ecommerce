const express = require('express');
const app = express();
const port = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send("hello")
})


app.listen(port, () => {
  console.log(`listening to port ${port}`)
})