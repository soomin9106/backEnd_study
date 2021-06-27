console.log('code1');

//0초가 보장되는 것은 아님!
console.time('timeout 0');
setTimeout(() => {
    console.log('setTimeout 0');
    console.timeEnd('timeout 0');
},0);

console.log('code2');
setImmediate(() => {
    console.log('set Immediate');
});

console.log('code 3');
process.nextTick(() => {
    console.log('process.nextTick');
});

//result: code1, code2, code3, process.nextTick, setTimeout0, set Immediate
//setTimeout0, set Immediate : 거의 동일하게 동작!