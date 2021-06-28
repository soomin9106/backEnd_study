const http = require('http');
const fs=require('fs');
//const http2 = require('http2'); //https : 배포할 때 변경

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server=http.createServer((req,res) => {
    console.log('incoming....');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url=req.url;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        const read=fs.createReadStream('./html/index.html');
        read.pipe(res);
    } else if(url === '/courses'){
        res.setHeader('Content-Type','text/html');
        const read=fs.createReadStream('./html/courses.html');
        read.pipe(res);
    } else{
        res.setHeader('Content-Type','text/html');
        const read=fs.createReadStream('./html/notfound.html');
        read.pipe(res);
    }
    res.end(); //end
});

server.listen(8080); // listening port