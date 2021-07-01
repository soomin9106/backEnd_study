import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser'; // cookie 확인
import morgan from 'morgan'; //어떤 요청이 얼마나 걸렸는지 
import helmet from 'helmet';

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

app.use(
    cors({
        origin: ['http://127.0.0.1:5500'],
        optionsSuccessStatus:200,
        credentials: true,
    })
);
app.use(helmet()); //보안에 관련된 header 추가

app.get('/',(req,res) => {
    console.log(req.body);
    console.log(req.cookies);
    res.send("Welcome!");
});

app.listen(8080);