//Node process info
const process = require('process');

//practice
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid); //parent id of process id.
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

//여기 있는 코드가 다 실행이 되고 나서야 setTimeout 에 있는 콜백 함수가 실행 됨.
setTimeout(()=>{
    console.log('setTimeout');
},0);

//지금은 아니지만 수행된 코드가 완료된 후에 등록한 콜백함수를 큐에 넣어달라는 api
//setTimeout 보다 먼저 실행됨.
process.nextTick(()=>{
    console.log('nextTick');
});

for (let i=0;i<50;i++){
    console.log('for loop');
}