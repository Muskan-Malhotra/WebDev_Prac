const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html");
// htmlKaData => html treat to

let ch = cheerio.load(htmlKaData);

// console.log(ch);

let pTags = ch("p");
// let pTags = ch("p").text(); //this prints the para
console.log(pTags);
