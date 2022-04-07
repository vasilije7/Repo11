// Only change code below this line
myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr) {
  myNestedArray.push(arr);
  return myNestedArray;
}
// Only change code above this line
console.log(myNestedFunction(["Milka", 3]));
module.exports = myNestedFunction;
