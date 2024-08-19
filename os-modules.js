const os = require("os");

// Method returns user info
const user = os.userInfo();
console.log(user);

// Method returns system uptim in seconds
const runtime = os.uptime();

console.log(`The sytems uptime ${runtime} in seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
