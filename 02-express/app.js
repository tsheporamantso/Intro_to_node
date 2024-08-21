/*
! Methods I'll use often in express are :
? the first 4 methods are http verbs!
* app.get => Read Data[ This take 2 arguments, first the path and second CallBack]
* app.post => Insert Data
* app.put => Update Data
* app.delete => Delete Data
* app.all => Works with all of them, this might be responce when resorce is not found
* app.use => This is responsible for middleware / static
* app.listen => listerning to port
! keep in mind when you sendFile, it requires an absolute path.
*/

const express = require('express');

const app = express();

app.use(express.static('./public'));

/*
? HTML is also a static file..
*/
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/navbar-app/index.html`);
// });

app.all('*', (req, res) => {
  res
    .status(404, {
      'content-type': 'text/html',
    })
    .send('<h2>Page not found! 😢</h1>');
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening on port 8000....');
  }
});
