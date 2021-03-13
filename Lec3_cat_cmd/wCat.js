let content = process.argv.slice(2);
//slice() provides the data on index 2 and after
// console.log(process);

let fs = require("fs");

let flags = [];
let files = [];

for(let i=0; i<content.length; i++){
  //"-s"
  if(content[i].startsWith("-")){
    flags.push(content[i]);

    //to push command in flags array similarly for pop
  }
  else{
    files.push(content[i]);
  }

}
//console.lof(flags);
//console.log(files);
//flag X

let fileData = "";
let str = "";
// "" helps to convert buffer data of file system to string

for(let i=0;i<files.length;i++){
  fileData += fs.readFileSync(files[i]);
  // console.log(files[i]);
  fileData += " ";
}

// console.log(fileData);



//By default the data of fs is read in Binary or Buffer data // non readable
//to convert it to string just add "";
