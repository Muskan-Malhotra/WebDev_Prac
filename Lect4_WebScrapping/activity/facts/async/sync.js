const fs = require('fs');

console.log("start"); //imp

let filedata = fs.readFileSync("./f1.txt"); 
console.log(filedata+"");

//it is not dependant on filedata
console.log("end");
