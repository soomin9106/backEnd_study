//쓸 때도 스트림을 만들어서 쓸 수 있음
const fs= require('fs');

const writeStream=fs.createWriteStream('./file3.txt');
writeStream.on('finish',() => {
    console.log('finished');
});

//write : 쓰기
writeStream.write('hello!');
writeStream.write('world');
writeStream.end();
