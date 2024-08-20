/*
! STREAM
? 4 types of stream
* 1) Writeable - Used to write data sequentially
* 2) Readable - Used to Read data sequentially
* 3) Duplex - Used to read and write data sequantially
* 4) Transform - Data can be modified when reading or writting.
! Stream is essentially reading data in chunks, and this module is fs {createReadStream}
! When creating the instance of the class createReadStream, the argument you pass will be the path.
* ON THE EXAMPLE BELOW, THE COMPLETE SIZE OF THE FILE 159KB, THUS
* DATA WAS READ IN CHUNKS OF 64+64+31=159KB!
! We also have the error handling.
*/

const { createReadStream } = require('fs');

const streams = createReadStream('./content/bigfile.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

streams.on('data', (result) => {
  console.log(result);
});

streams.on('error', (err) => console.log(err));
