let num=1;

// 시간 단위로 특정 콜백 함수가 수행됨.
const interval=setInterval(()=>{
    console.log(num++);
},1000);

// interval 을 멈추는 조건이 있어야 함.
//setTimeout 이용
setTimeout(() => {
    console.log('Time out');
    clearInterval(interval);
},6000);