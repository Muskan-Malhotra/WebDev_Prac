const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

//name:"",
//wickets:"",
//economy: ""

//creating objects of highest wicket tacker
let highestWicketTaker = {};

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-rajasthan-royals-54th-match-1216530/full-scorecard", cb);

function cb(error, response, data){
  parseData(data);
}


function parseData(html){
  //this is variable and updates the value every time
  let highestWicketSoFar = 0;
  let nameOfHighestWicketTacker;
  let economy;

  let ch = cheerio.load(html);
  let bothBowlingTables = ch('.Collapsible .table.bowler');
  // fs.writeFileSync("./Bowlers.html", bothBowlingTables+"");

  for(let i=0;i<bothBowlingTables.length;i++){
    let bowlingTable[`${i}`];
    let allTrs = ch(bowlingTable).find("tbody tr");

    

  }

}


