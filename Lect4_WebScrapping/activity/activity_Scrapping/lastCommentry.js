const request = require("request")
const cheerio = require("cheerio")

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

request(url, cb);
//request url and work with the help of callback function

function cb(error, response, body){
  parseBody(body);
}

function parseBody(html){
  //getting the html pf cricinfo ipl home page
  let ch = cheerio.load(html);
  let allcommentry = ch('div[itemprop="articleBody"] p');

  // console.log(commentry);
  //first key ke bases pe nikal diya
  let comm = ch(allcommentry['0']).text();
  console.log(comm);
}




