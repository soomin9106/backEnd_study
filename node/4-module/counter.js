
//not exported to outside
let count=0;

function increase(){
    count++;
}

function getCount(){
    return count;
}

//exports
module.exports.getCount=getCount;
module.exports.increase=increase;

console.log(module);
