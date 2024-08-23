const express = require('express');

const app = express();

/*
! MIDDLEWARE IS A FUNCTION THAT TAKES 3 PARAMETERS I.E REQ, RES, NEXT
? Middleware is the function that sits between route and callback e.g
! req => middleware => res
? WHEN YOU WORKING WITH MIDDLEWARE YOU MUST PASS IT TO NEXT MIDDLEWARE. INVOKE NEXT(),
? UNLESS YOU TERMINATING THE ENTIRE LOGIC.
*/

const logger = (req, res, next) => {
  const { method } = req;
  const { url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get('/', logger, (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>Home 🏡</h1>');
});

app.get('/about', logger, (req, res) => {
  res
    .status(200, {
      'content-type': 'text/html',
    })
    .send('<h1>About 📖</h1>');
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening on port: 8000....');
  }
});
