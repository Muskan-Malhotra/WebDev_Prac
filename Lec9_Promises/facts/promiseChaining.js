//interview imp
//chaining


const fs = require("fs");

let f1Promise = fs.promises.readFile("./f1.txt");
f1Promise.then(function(data){
  console.log(data + "");
  let f2Promise = fs.promises.readFile("./f2.txt");
  return f2Promise;
})
.then(function(data){    //then function takes the promise function of f2promises and not f1promises...if no return statement then takes the f1promise.
  console.log(data + "");
  let f3Promise = fs.promises.readFile("./f3.txt");
  return f3Promise;
})
.then(function(data){
  console.log(data + "");
  
})