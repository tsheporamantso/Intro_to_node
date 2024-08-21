const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200, {
      'content-type': 'application/json',
    })
    .json(products);
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening on port: 8000...');
  }
});
