const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  // Home page
  if (pathname === '/' || pathname === '/home') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('Welcome to Home page');

    // About page
  } else if (pathname === '/about') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    // BLOCKING CODE => as long as this blocking code is done running it will block other users!
    // for (let i = 0; i < 1000; i += 1) {
    //   for (let j = 0; j < 1000; j += 1) {
    //     console.log(`${i} ${j}`);
    //   }
    // }
    res.end('Welcome to About page');

    // Page not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('Page not found');
  }
});

server.listen('8080', 'localhost', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Server listening to port: 8080...');
  }
});
