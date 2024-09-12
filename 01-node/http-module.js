const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Welcome to home page</h1>');
  } else if (pathname === '/about') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Welcome to the about page!</h1>');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end(`
      <h1>Oops!</h1>
      <p>Page not found</p>
      <a href='./home'>Back to home page</a>
      `);
  }
});

server.listen('8080', 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Listening to port http://localhost:8080');
  }
});
