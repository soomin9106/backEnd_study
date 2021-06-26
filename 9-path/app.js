//file system 접근
//os 별로 경로가 달라지므로 일반화되게 사용
const path= require('path');

//현재 수행되는 디렉토리, 파일 이름
console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
//파일 정보만 읽어옴
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed=path.parse(__filename);
console.log(parsed);

const str=path.format(parsed);
console.log(str);

//isAbsolute
//true, false. 
console.log('isAbsolute?',path.isAbsolute(__dirname));
console.log('isAbsolute?',path.isAbsolute('../'));

//normalize
console.log(path.normalize('./folder///////////sub'));

//join
console.log(__dirname+path.sep+'image');
console.log(path.join(__dirname,path.sep));





