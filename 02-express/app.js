const express = require('express');

const people = require('./routes/people');
const auth = require('./routes/auth');

const app = express();

// Static assets
app.use(express.static('./methods-public'));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse json
app.use(express.json());

app.use('/api/people', people);

app.use('/login', auth);

app.all('*', (req, res) => {
  res.status(404).send('<h2>Oops!</h2> <p>Page could not be found!♻️</p>');
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening on port 8000...');
  }
});
