/* eslint-disable no-console */
const greet = require('./modules/greet');
const { tshepo, dumi } = require('./modules/names'); // I prefer to destructor names as opposed to calling the property when invoking the function. e.g names.tshepo
const alternativeFlavor = require('./modules/alternative-flavor');

greet('Lebo');
greet(tshepo);
greet(dumi);

console.log(alternativeFlavor.items);
console.log(alternativeFlavor.singlePerson);
