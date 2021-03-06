// HIGH ORDER FUNCTION => FUNCTIONS WHICH ACCEPT FUNCTION AS AN ARGUMENT

//CallBack Functions => Function which are paced into function as an argument

function getFirstName(fullName){
  //fullName = "TONY STARK".split(" ") =>["TONY", "STARK"];
  fullName = fullName.split(" ");
  return fullName[0];


}

function getLastName(fullName){
  fullName = fullName.split(" ");
  return fullName[1];
}

function sayHi(fullName,fun){
  let name = fun(fullName);
  console.log(name);
}

//jo baad mein likha hai wahi man jaygea

sayHi("TONY STARK", getFirstName);
sayHi("Steve JOBS", getLastName);
