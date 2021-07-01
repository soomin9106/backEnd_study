import express from 'express';

const router = express.Router();

//router 에서는 상위 루트 생략 가능
router.get('/',(req,res) =>{
    res.status(201).send('GET : /users');
});

export default router;