/*
! lodash npm dependency or module, to me works like JavaScript built in array flat method
? If we have a nested array you can call flat method and,
? depending how deep nested the array is you can pass depth parameter.
* Let see both examples of lodash dependency and JS flat array method.
? Both Examples below elastrates the use of lodash to flatten the deep nested array,
? and using the JS flat method with depth argument of 3.
*/

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItem = _.flattenDeep(items);
console.log(newItem);

const newItems = items.flat(3);
console.log(newItems);
