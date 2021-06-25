const fs=require('fs');
console.log(global);

//define function on global 
global.hello=()=>{
    console.log('hello!');
};
//call hello()
hello();
