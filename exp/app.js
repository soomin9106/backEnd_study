import express from 'express'
const app=express();

app.all('/api',(req,res,next) => {
    console.log('all');
    next();
});
app.use('/sky',(res,req,next) => {
    console.log('use');
    next();
});
app.get('/',
    (req,res,next) =>{
    console.log('first');
    next();
    },
    (req,res,next) =>{
    console.log('first-1');
    next();
    }
);

app.get('/',(req,res,next) =>{
    console.log('second');
    res.send('The End!');
});

app.use((req,res,next) => {
    res.status(404).send('Not found!');
})
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('sorry');
})
app.listen(8080);