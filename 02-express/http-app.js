const http = require('http');
const url = require('url');
const { readFileSync } = require('fs');

/*
! SIDE NOTE TO SELF = MIME TYPES!
*/

// Get all files here.
const homePage = readFileSync('./navbar-app/index.html', 'utf8');
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8');
const homeImage = readFileSync('./navbar-app/logo.svg', 'utf8');
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf8');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  // Root and Home Page
  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write(homePage);
    res.end();

    // About Page
  } else if (pathname === '/about') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.write('<h1>Welcome to About Page</h1>');
    res.end();

    // Styles
  } else if (pathname === '/styles.css') {
    res.writeHead(200, {
      'content-type': 'text/css',
    });
    res.write(homeStyles);
    res.end();

    // Image
  } else if (pathname === '/logo.svg') {
    res.writeHead(200, {
      'content-type': 'image/svg+xml',
    });
    res.write(homeImage);
    res.end();

    // JS Logic
  } else if (pathname === '/browser-app.js') {
    res.writeHead(200, {
      'content-type': 'text/javascript',
    });
    res.write(homeLogic);
    res.end();

    // 404
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.write(`
      <h1>Oops!</h1>
      <p>Page could not be found</p>
      <a href='/home'>Back to home page</a>
      `);
    res.end();
  }
});

server.listen(8000, 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server is listening to port: 8000 ...');
  }
});
