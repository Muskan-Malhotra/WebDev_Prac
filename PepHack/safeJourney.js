
const puppeteer = require("puppeteer");
const fs = require("fs");



var src = "Vikaspuri New Delhi";
const des = "Mumbai Maharashtra";

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
  
  for(let key in text_arr){
    
      obj[key] = {
      ViaSource: text_arr[key][2],
      TotalTime : text_arr[key][0],
      SafeTimeToDepart: text_arr[key][1],
      SafestRoute: text_arr[key][3],
      
  }

  }
}

  return obj;
});

console.log(links);


await tab.waitForTimeout(6000);

await tab.waitForSelector(".section-directions-trip-details-link.noprint.mapsConsumerUiCommonButton__blue-button-text");

//details of safest route

await tab.click(".section-directions-trip-details-link.noprint.mapsConsumerUiCommonButton__blue-button-text");

await tab.waitForTimeout(6000);

await tab.waitForSelector(".directions-mode-nontransit-groups #group_0_0 .directions-group-disclose");

await tab.click(".directions-mode-nontransit-groups #group_0_0 .directions-group-disclose");

const path = await tab.evaluate(() => {
  
  // let destination = des;
  let obj = {};
  let route = document.querySelectorAll(
    ".hideable.expand-print.padded-hideable"
  );
  let arr = Array.prototype.slice.call(route);
  let route_arr = [];
  for (let i = 0; i < arr.length; i += 1) {
      route_arr.push(arr[i].innerText.split('\n'));
  
  for(let key in route_arr){
    
      obj[key] = {
      
        Directions : route_arr[key],
      // TotalTime : route_arr[key][0],
      // SafeTimeToDepart: route_arr[key][1],
      // ViaSource: route_arr[key][2],
      // SafestRoute: route_arr[key],
      
  }

  }
}
return obj;
});

fs.writeFile("data.json", JSON.stringify(links),(err) => {
  if (err) {
  console.error(err);
  return;
  };
  console.log("Great Success");
  });

  fs.writeFile("Route.json", JSON.stringify(path),(err) => {
    if (err) {
    console.error(err);
    return;
    };
    console.log("Successful");
    });

 

 

})();


  
  












