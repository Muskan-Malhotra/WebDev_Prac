//multiple files
//promised function
//read files searially

const fs = require("fs");

let f1Promise = fs.promises.readFile("./f1.txt");

f1Promise.then(function(data){
  console.log(data + "");
  let f2Promise = fs.promises.readFile("./f2.txt");
  f2Promise.then()
})