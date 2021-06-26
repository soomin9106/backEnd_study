const logger=require('./logger.js');
//동일한 eventEmitter 객체를 사용해야함.
//logger.js 에서 클래스로 Logger 을 생성
const emitter=new logger.Logger();

emitter.on('log',(event)=>{
    console.log(event);
});

emitter.log(()=>{
    console.log('doing something........');
});