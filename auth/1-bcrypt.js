const brcypt = require('bcrypt');

const password = 'abcd1234';
const hashed = brcypt.hashSync(password,10); //salt length : 10 
console.log(`password : ${password} , hashed : ${hashed}`);

const result = brcypt.compareSync('abcd123',hashed);
console.log(result);