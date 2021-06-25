const fs= require('fs');
console.log('logging....');

//log level
console.log('log'); //개발
console.info('info'); //정보
console.warn('warn'); //경보
console.error('error'); //치명, 사용자 에러, 시스템 에러

//assert
//Assertion failed: not same!
//when you want printing conditionally.
console.assert(2===3,'not same!');
console.assert(2===2,'same!');

//print object
const student={name:'sumin',age:23,school:{name:'SKKU'} };
console.log(student);
console.table(student);
console.dir(student,{showHidden:true,colors:false,depth:0});

//measuring time
//measure time by time label
console.time('for loop');
for(let i=0;i<10;i++){
    i++;
}
console.timeEnd('for loop');

//counting 
function a(){
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();

//trace
//recording of function call
function f1(){
    f2();
}

function f2(){
    f3();
}

function f3(){
    console.log('f3');
    console.trace(); //make easy debugging!
}
f1();