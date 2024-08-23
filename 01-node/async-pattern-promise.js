/* eslint-disable implicit-arrow-linebreak */
/*
! One of alternative to sort out callback hell, would be to set up new Promise.
* You will do so by declaring a function that take path as argument and
* it returns a new Promise, that takes a callback function with two parameters,
* i.e. (resolve and reject)
* Inside the Promise you can readFile asynchronously, if err reject(err), else resolve(data)
* When you invoke the function, you'll be returning the Promise thus you can chain
* .then that take a callback function that takes result as parameter and log the result,
* also chain .catch which is also a callback function that take error as parameter,
* log the error
*/
const { readFile } = require('fs');

const getText = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
