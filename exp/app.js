import express from 'express'
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors';

const app=express();

app.get('/',(req,res) => {
    res.send("Welcome!");
});

app.listen(8080);