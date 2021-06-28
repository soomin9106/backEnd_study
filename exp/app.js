import express from 'express'
const app=express();

//Port
app.get('/sky/:id',(req,res,next) => {
    //console.log(req.path);
    //console.log(req.headers);
    console.log(req.params.id); //localhost:8080/sky/soomin => soomin
    console.log(req.query.keyword); //http://localhost:8080/sky/soomin/?keyword=study
    //res.json({name: 'soomin'});
    res.setHeader('key','value');
    res.status(201).send('created!');
});
app.listen(8080);