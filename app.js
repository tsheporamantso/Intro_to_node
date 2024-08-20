const { readFile, writeFile } = require('fs');

readFile(`${__dirname}/content/first.txt`, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    const first = data;
    readFile(`${__dirname}/content/second.txt`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      } else {
        const second = data;
        writeFile(
          `${__dirname}/content/result-async.txt`,
          `${first}\n${second}`,
          (err) => {
            if (err) {
              throw err;
            }
          },
        );
      }
    });
  }
});
