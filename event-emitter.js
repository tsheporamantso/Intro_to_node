/*
? There are many methods inside the new EventEmitter object, however the ones I am learning now is:
? on - Which listen to events,
? emit - which emit the event.
* When setting up the emitter, you will call the on method,
* first argument will the name of the event, it's a string
* and second parameter will be the callback
! When looking or setting up this, think about eventlister on vanilla JS!!
! THE ORDER MATTERS, WE FIRST LISTEN FOR EVENT AND THAN WE EMIT.
? You can pass arguments on callback function when listening to event,
? and than give argument values when you emit or invoke the event.
*/

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`Data received from user ${name} with id number ${id}`);
});
customEmitter.on('response', () => {
  console.log('SOME OTHER LOGIC WOULD GO HERE');
});

customEmitter.emit('response', 'Tshepo', 2157);
