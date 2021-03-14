const fs = require("fs")
let array = [];
let obj={
  name:"abcd",
  data:{
    name:"hi",
    no:2
  }
};

array.push(obj);
// fs.writeFileSync("./test.json",obj+"")
fs.writeFileSync("./test.json",JSON.stringify(array))

