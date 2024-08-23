const express = require('express');
// const logger = require('./logger');
// const authorized = require('./authorize');
const morgan = require('morgan'); // third party middleware

const app = express();

// app.use([logger, authorized]); // You can add first argument as base
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>Home🏡</h1>');
});

app.get('/about', (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>About📖</h1>');
});

app.get('/api/products', (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>Products🗳️</h1>');
});

app.get('/api/items', (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>Items🥫</h1>');
});

app.all('*', (req, res) => {
  res
    .status(404, {
      'content-type': 'text/html',
    })
    .send('<h1>Resource Could Not Be Found ⛔</h1>');
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server listening on port: 8000....');
  }
});
