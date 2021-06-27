//모든 데이터를 읽고 나서 쓰는 것은 비효율적임
//stream 을 이용하면 이를 나눠 처리할 수 있음

const fs=require('fs');
const data=[];
//event based
const readStream=fs.createReadStream('./file.txt',{
    //highWaterMark: 8,
    //encoding: 'utf-8'
}).on('data', chunk => {
    //console.log(chunk);
    data.push(chunk);
    //console.count('data');
}).on('end',() => {
    console.log(data.join(''));
}).on('error', error =>{
    console.log(error);
});

//once : 처음에 받아온 데이터만 처리됨