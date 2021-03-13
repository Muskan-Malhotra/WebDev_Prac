let fs = require("fs");

let f1Data = fs.readFileSync("./f1.txt");

f1Data = f1Data+"";

//-s => removes  extra spaces
let data = f1Data.split("\r\n");
// console.log(data);
let removeSpaces = [];
let emptyPushed = false;

function removeLargeSpaces(data){
  for(let i=0; i<data.length;i++){
    if(data[i] == '' && !emptyPushed){
      removeSpaces.push(data[i]);
      emptyPushed = true;
    }
    else if(data[i]!= ''){
      removeSpaces.push(data[i]);
    }
  }
}


removeLargeSpaces(data);
let joinedString = removeSpaces.join("\n");
console.log(joinedString);




//-b => add line number
let count = 1;
function addLnNoToEmptyLn(data){
  for(let i=0;i<data.length;i++){
    if(data[i] != ''){
      data[i] = `${count}. ${data[i]}`;
      count++;
    }
  }

  let addLineNoToEmptyLn = data.join('\n'
  );

  console.log(addLineNoToEmptyLn);
}

addLnNoToEmptyLn(data);



//n => add count to all lines
function addLnNoToAll(data){
  for(let i=0;i<data.length;i++){
    data[i]=`${i+1}.${data[i]}`;
  }
  let addLinenNoToAll = data.join("\n");
  console.log(addLinenNoToAll);
}

addLnNoToAll(data);
