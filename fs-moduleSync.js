const { readFileSync, writeFileSync } = require("fs");

/*
! To append the file you need to pass the third argument which is an object i.e. {flag: 'a'}
*/
const text = readFileSync("./content/subfolder/test.txt", "utf8");
const textIn = "Writing text to the server Synchronously.";

writeFileSync("./content/subfolder/test2.txt", `${textIn}`);
console.log(text);

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result of: ${first}\n${second}\nand ${text}\n`,
  { flag: "a" }
);

console.log(first);
console.log(second);
