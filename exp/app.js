import express from 'express'
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors';

const app=express();

app.use(express.json());

app.get('/file',(req,res) =>{
    fs.readFile('/file1.txt',(err,data) =>{
        if(err){
            res.Sendstatus(404);
        }
    });
});

//동기적 처리 => error 문구를 그대로 출력하게 됨
//😥
//app.get('/file1',(res,req) =>{
//    const data=fs.readFileSync('/file1.txt');
//    res.send(data);
//});

//app.use((error,req,res,next)=>{
//    console.error(error);
//    res.status(500).json({message: "something went wrong!"});
//});

//😊
app.get('/file1',(req,res) =>{
    try{
        const data=fs.readFileSync('/file1.txt');
        res.send(data);
    } catch(error){
        res.sendStatus(404);
    }
});

//비동기적 처리
app.get('/file2',(req,res) =>{
    fsAsync
    .readFile('/file2.txt')
    .then((data) => res.send(data))
    .catch(error => res.sendStatus(404));
});

//비동기적 특성을 유지하면서 동기성을 유지
app.get('/file3',async(req,res)=>{
    try{
        const data= await fsAsync.readFile('/file3.txt');
        res.send(data);
    } catch(error){
        res.sendStatus(404);
    }
});

app.use((error,req,res,next)=>{
    console.error(error);
    res.status(500).json({message: "something went wrong!"});
});


app.listen(8080);