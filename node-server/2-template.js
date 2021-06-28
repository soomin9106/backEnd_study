const http = require('http');
const fs=require('fs');
const ejs=require('ejs');
//const http2 = require('http2'); //https : 배포할 때 변경

console.log(http.STATUS_CODES);
console.log(http.METHODS);

const name='Soomin';
const courses=[{name: 'HTML'},  {name: 'CSS'}, {name: 'JS'}];
const server=http.createServer((req,res) => {
    console.log('incoming....');
    const url=req.url;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
       ejs.renderFile('./template/index.ejs',{name}).then(data =>{res.end(data)});
    } else if(url === '/courses'){
        ejs.renderFile('./template/courses.ejs',{courses}).then(data =>{res.end(data)});
    } else{
        ejs.renderFile('./template/notfound.ejs',{name}).then(data =>{res.end(data)});
    }
});

server.listen(8080); // listening port