// Code your solution here
function findMatching(drivers,name){
  return drivers.filter(function (driversname)
  {return driversname.toLowerCase() === name.toLowerCase();
  })
}

<<<<<<< HEAD
function fuzzyMatch(drivers,firstLetter){
  return drivers.filter(function (fLetter){
    {return fLetter.charAt(length-1) === firstLetter.charAt(length-1)
    }}


 function  matchName(drivers,name){
     return drivers.filter(function (driver) {
       return driver.name.toLowerCase() === name.toLowerCase();
     });
 }
=======
function  fuzzyMatch(drivers,firstLetter){
  return drivers.filter(function (fLetter){
  {return firstLetter.charAt(length-1) === fLetter.charAt(length-1);
  }
}
>>>>>>> eb409f4eaf8da1ce371d2a0a6f68ab6ef47d8795
