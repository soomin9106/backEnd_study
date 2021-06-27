const EventEmitter=require('events');
const emitter=new EventEmitter();

//data approach
const callback1=(args)=>{
    console.log('first callback -',args);
};
emitter.on('soomin',callback1);

emitter.on('soomin',(args)=>{
    console.log('second callback -',args);
});

//event occurence
emitter.emit('soomin',{message:1});
emitter.emit('soomin',{message:2});
emitter.removeListener('soomin',callback1);
emitter.emit('soomin',{message:3});

//result
//first callback - { message: 1 }
//second callback - { message: 1 }
//first callback - { message: 2 }
//second callback - { message: 2 }
//second callback - { message: 3 }


