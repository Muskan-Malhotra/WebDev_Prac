const fs = require("fs");
const path = require("path");

let extensions = require("./util");
let folderPath = "./Downloads";

let extFolderPath;

function checkFolder(extension){
  //check if extension is matching with any foldername 
  //.jpg
  //"./Downloads"
  for(let key in extensions){
    //"Images"  \\ "Audio" .....
    if(extensions[key].includes(extension)){
      // string interpolation
      //[add sting without using the + sign // other method]
      extFolderPath = `${folderPath}/${key}`;
      break;
    }
  }
  //"./Downloads/Images"

  return fs.existsSync(extFolderPath);
}

function moveFile(fileName){
  //copy file
  let sourceFilePath = `${folderPath}/${fileName}`;  //"./Downloads/abc.txt0"
  let destinationFilePath = `${extFolderPath}/${fileName}`;
  // "./Downloads/Documents/abc.txt"
  fs.copyFileSync(sourceFilePath, destinationFilePath);
  //without copyFileSyn it requires the callback function

  //delete file
  fs.unlinkSync(sourceFilePath);
}


function createFolder(){
  fs.mkdirSync(extFolderPath);
}

function sortFolder(folderPath){
  //get content of folderPath
  let content = fs.readdirSync(folderPath);
  for(let i=0;i<content.length;i++){
    //get extension of each file
    let extensionName = path.extname(content[i]);
    let folderExist = checkFolder(extensionName);
    if(folderExist){
      moveFile(content[i]);
      //to move file conents into respective folders
    }
    else{
      createFolder();
      moveFile(content[i]);
    }
    // console.log(extensionName);
    // creates the extension file
  }
}

sortFolder(folderPath);