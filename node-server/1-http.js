const http = require('http');
const fs=require('fs');
//const http2 = require('http2'); //https : 배포할 때 변경

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server=http.createServer((req,res) => {
    console.log('incoming....');
    const url=req.url;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
        fs.createReadStream('./html/index.html').pipe(res);
    } else if(url === '/courses'){
        fs.createReadStream('./html/courses.html').pipe(res);
    } else{
        fs.createReadStream('./html/notfound.html').pipe(res);
    }
});

server.listen(8080); // listening port