const fs = require("fs");
const cheerio = require("cheerio");


requestAnimationFrame("https://github.com/topics",cb)

function cb(error,reponse,data){
  parseBody(data);
}

function parseBody(html){
  let ch = cheerio.load("https://github.com/topics");
}