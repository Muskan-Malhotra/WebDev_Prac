const fs = require("fs");

//B gets a pending promise    // A -> initially return a pending promise

let pendingPromise = fs.promises.readFile("./f1.txt");  //if 100gb then 10 min lagenge

console.log(pendingPromise);
//pendingPromise => Promise object whose state is pending <!DOCTYPE html>
//success call => scb attached to pending promise
pendingPromise.then(function(data){
  console.log("Inside then callback i.e sb");
  console.log(data+"");
  console.log(pendingPromise);
});


//failure callback =>fcb attached to pending promise
pendingPromise.catch(function(error){
  console.log("Inside the body of the catch callback i.e fcb");
  console.log(error);
  console.log(pendingPromise);
});