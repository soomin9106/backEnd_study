const http = require('http');
//const http2 = require('http2'); //https : 배포할 때 변경

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const server=http.createServer((req,res) => {
    console.log('incoming....');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('welcome'); //data writing 
    res.end(); //end
});

server.listen(8080); // listening port