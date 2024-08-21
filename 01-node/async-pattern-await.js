/*
! Setting up async await function you'll want to have the try catch block.
! require util module to get rid of wrapper function that returns a Promise.
? Use promisify method that inside utils module.
*/
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile(`${__dirname}/content/first.txt`, 'utf8');
    const second = await readFile(`${__dirname}/content/second.txt`, 'utf8');
    await writeFile(
      `${__dirname}/content/result-mind-grenade.txt`,
      `\nTHIS IS MIND BLOWING: \n${first}\n${second}`,
      { flag: 'a' },
    );
    // console.log(`${first}\n${second}`);
  } catch (error) {
    // console.log(error);
  }
};
start();
