// Only change code below this line
var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
  var myNewPets = myPets;
  myNewPets.push(...["Bird", "Fish"]);
  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");
  return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
// Only change code below this line

module.exports = myArrayFunction;
