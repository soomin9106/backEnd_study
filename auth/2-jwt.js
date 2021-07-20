const jwt = require('jsonwebtoken');
const secret = 'fhiea;hhf;ohfieafhuefkdhfa';

const token = jwt.sign({
    id : 'userId',
    isAdmin:true,
}, secret,
{expiresIn: 2}
);

setTimeout(() => {
    jwt.verify(token,secret,(error,decoded) => {
        console.log(error,decoded);
    });
},3000);
