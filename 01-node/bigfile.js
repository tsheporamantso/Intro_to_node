const { writeFileSync } = require('fs');

for (let i = 0; i < 10000; i += 1) {
  writeFileSync('./content/bigfile.txt', `Hello Dumi${i}\n`, { flag: 'a' });
}
