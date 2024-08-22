/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
const express = require('express');
const { products } = require('./data');

const app = express();
/*
! Root route
*/
app.get('/', (req, res) => {
  res.status(200, {
    'content-type': 'text/html',
  }).send(`
    <h1>Welcome to Home Page 🏠</h1>
    <a href='/api/products'>Link to Products</a>
    `);
});
/*
! All products
*/
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
/*
! Single product
! Route Parameters i.e [req.params]
! placeholder on the route /:productID, it will always come back as string,
! therefore convert into Number
*/
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id === +productID);
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404, {
      'content-type': 'text/html',
    }).send(`
      <h1>Oops!</h1>
      <p>Product Does Not Exist ⛔</p>
      `);
  }
});

/*
! Query String Paramenters AKA url params [req.query]
* This is a way to send snmall amount of information to the server using url.
? These query string params are key value pairs after the ? on the url
? e.g. 'localhost:8000/api/products/?query=foo&chocolate=milkshake'
*/

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search),
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No product matched your search');
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});
/*
! 404
*/
app.all('*', (req, res) => {
  res.status(404, {
    'content-type': 'text/html',
  }).send(`
    <h1>Oops!</h1>
    <p>Resource could not be found</p>
    `);
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening on port: 8000...');
  }
});
