const fs=require('fs').promises;

//read a file
fs.readFile('./text.txt' , 'utf8')
.then(data => console.log(data)) //buffer 형태로 읽어옴
.catch(console.error);

//writing a file
fs.writeFile('./text.txt','Hello I am sumin')
.catch(console.error);

fs.appendFile('./text.txt','Yo~~~~')
.then(() =>{
    fs.copyFile('./text.txt','./copyingText.txt')
    .catch(console.error);
})
.catch(console.error);

//copy
//비동기 처리 때문에 텍스트 파일에 데이터를 쓰기도 전에 복사했을 가능성이 있음
//데이터가 추가된 후 원하는 copy 를 하기 위해 위와 같은 코드를 써야 한다.

// folder
fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);


//api 를 이용할 때 인자와 리턴 값을 확인하자!!