const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/bigfile.txt', 'utf8');
  // res.end(text);
  const fileStream = fs.createReadStream('./content/bigfile.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    console.log(err);
  });
});

server.listen(8080);
