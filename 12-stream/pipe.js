const fs=require('fs');
const zlib=require('zlib'); //압축 모듈

const readStream=fs.createReadStream('./file.txt');
const zlibStream=zlib.createGzip();
const writeStream=fs.createWriteStream('./file4.zip');

const piping= readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', ()=>{
    console.log('done!');
});


//server 열기
//fs.readFile('file.txt',(err,data) => {
//    res.end(data);
//});
const http=require('http');
const server=http.createServer((req,res) => {
    //stream 자체를 response 에 pipe 해서 넘겨줌
    const stream=fs.createReadStream('./file.txt');
    stream.pipe(res);
});
server.listen(3000);