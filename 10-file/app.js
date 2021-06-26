const fs=require('fs');

//3 ways
//rename(...., callback(error,data))
//try {renameSync(....)} catch(e){}
//promises.rename.then().catch(0)

//Not recommended
try{
    fs.renameSync('./text.txt','./text_new.txt');
} catch(error){
    console.error('error');
}

//export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;
fs.rename('./text_new.txt','./text.txt',(error) =>{
    console.log('error!');
});
console.log('hello!');

fs.promises
    .rename('./text2.txt','./text2_new.txt')
    .then(() => console.log('Done!'))
    .catch((console.error));