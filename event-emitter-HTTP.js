const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(8080, 'localhost', () => {
  console.log('Server listening to post: 8080...');
});
