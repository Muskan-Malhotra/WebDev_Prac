const fs = require("fs");

console.log("start");

//async function => accepts callback

//this will be printed at last
fs.readFile("./f1.txt", function cb(error,data){
  console.log(data + "");
});



console.log("end");