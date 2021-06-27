const os=require('os');

//end of the line
console.log(os.EOL === '\r\n');

//some printing
//notify user information
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());