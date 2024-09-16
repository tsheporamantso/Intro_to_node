/*
! Methods I'll use often in express are :
? the first 4 methods are http verbs!
* app.get => Read Data[ This take 2 arguments, first the path and second CallBack]
* app.post => Insert Data
* app.put / patch => Update Data
* app.delete => Delete Data
* app.all => Works with all of them, this might be responce when resorce is not found
* app.use => This is responsible for middleware[getting static files]
* app.listen => listerning to port
*/

const express = require('express');
const { StatusCodes } = require('http-status-codes');

const app = express();

app.get('/', (req, res) => {
  res
    .status(StatusCodes.OK, {
      'content-type': 'text/html',
    })
    .send('<h1>Welcome to Home Page</h1>');
});

app.get('/about', (req, res) => {
  res
    .status(StatusCodes.OK, {
      'content-type': 'text/html',
    })
    .send('<h1>Welcome to About Page</h1>');
});

app.all('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send('<h1>Page not found</h1>');
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening to port 8000 ...');
  }
});
