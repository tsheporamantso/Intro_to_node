/*
! Event loop is what allows Node.js to perform non-blocking input/output operations,
! Despite the fact that JS is single threaded.
! Performs of such non-blocking operations by offloading time consuming operations to system karnel
! THINK ABOUTE ASYNCHRONOUS CALLBACK FUNCTIONS.
* setTimeout and setInterval functions they are asynchronous (They get offloaded!)
*/

console.log('first task');
setTimeout(() => {
  console.log('second task');
}, 0);
console.log('next task');

// console.log('first task');
// setInterval(() => {
//   console.log('second task');
// }, 2000);
// console.log('next task');
