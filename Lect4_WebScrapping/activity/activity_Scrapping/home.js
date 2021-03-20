const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url, cb);

function cb(error, response, body){
  parseBody(body);
}

function parseBody(html){
  //will get html here of cricinfo

  let ch = cheerio.load(html);
  let aTag = ch('a[data-hover="View All Results"]').text();
  console.log(aTag);
}