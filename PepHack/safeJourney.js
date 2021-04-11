
const puppeteer = require("puppeteer");
const fs = require("fs");



const src = "Vikaspuri New Delhi";
const des = "Subhash Nagar New Delhi";

(async function(){
  let browser = await puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
  }); //10 sec

  let allPages = await browser.pages();
  let tab = allPages[0];
  await tab.goto("https://www.google.com/maps/@28.6390741,77.0710731,14z");

  await tab.waitForSelector(".searchbox-directions-container .searchbox-directions");
  await tab.click(".searchbox-directions-container .searchbox-directions");

  await tab.waitForSelector(".gstl_51.sbib_a .sbib_b .tactile-searchbox-input");
  await tab.type(".gstl_51.sbib_a .sbib_b .tactile-searchbox-input", src);
  await tab.type(".gstl_52.sbib_a .sbib_b .tactile-searchbox-input",des);
  await tab.click("#directions-searchbox-1  .searchbox-searchbutton");
  await tab.waitForSelector('#directions-searchbox-1  .searchbox-searchbutton');
  await tab.waitForTimeout(3000);





const links = await tab.evaluate(() => {
  let obj = {};
  let names = document.querySelectorAll(
    ".section-layout .section-directions-trip.clearfix"
  );
  let arr = Array.prototype.slice.call(names);
  let text_arr = [];
  for (let i = 0; i < arr.length; i += 1) {
      text_arr.push(arr[i].innerText.split('\n'));
  }
  // for(let key in obj){
  //   obj = {
  //     name : text_arr[j][0],
  //     class: text_arr[j][1],
  //     section: text_arr[j][2],
  // }
  // }
  //first use innerHTML
  return text_arr;
});

// console.log(links);

// let obj = {};

//   obj = {
//     name : links[i][0],
//     class: links[i][1],
//     section: links[i][2],
// }


fs.writeFile("data.json", JSON.stringify(links),(err) => {
  if (err) {
  console.error(err);
  return;
  };
  console.log("Great Success");
  });

 

 

})();


  
  












