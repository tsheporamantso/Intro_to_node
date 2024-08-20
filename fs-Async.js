const { readFile, writeFile } = require('fs');

/*
! Below example of event loop in asynchronous read and write files!
*/

// console.log('first task');
readFile(`${__dirname}/content/first.txt`, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    const first = data;
    // console.log(first);
    readFile(`${__dirname}/content/second.txt`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      } else {
        const second = data;
        // console.log(second);
        writeFile(
          `${__dirname}/content/result-async.txt`,
          `${first}\n${second}`,
          (err) => {
            if (err) {
              throw err;
            } else {
              // console.log('next task');
            }
          },
        );
      }
    });
  }
});
// console.log('second task');
