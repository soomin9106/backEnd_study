// Fixed-size chuck of memory
//array of integers, byte of data
const fs=require('fs');

const buf=Buffer.from('Hi');
console.log(buf); //unicode 형태로 출력됨
console.log(buf.length);
console.log(buf[0]); //ascii code 형태로 출력됨
console.log(buf[1]);

console.log(buf.toString());

//create
const buf2=Buffer.alloc(2);
const buf3=Buffer.allocUnsafe(2); // not initialize
buf2[0]=72;
buf2[1]=105;
buf2.copy(buf3); //copy buf2 to buf3
console.log(buf2.toString());
console.log(buf3); //내 컴퓨터에서는 초기화 안되어서 나옴

//concat 
const newBuf=Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());



