//다른 emitter 에서 발생하는 event를 다른 emitter가 들을 수 없다!
const EventEmitter=require('events');

//EventEmitter 을 상속 받은 Logger 라는 클래스 생성
//그 안에 log라는 함수를 생성
class Logger extends EventEmitter{
    log(callback){
        this.emit('log','started...');
        callback();
        this.emit('log','ended!');
    }
}


module.exports.Logger=Logger;