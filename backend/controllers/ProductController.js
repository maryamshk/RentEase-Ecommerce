const { json } = require('body-parser');
const Product = require('../models/productSchema');

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send('product not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};



