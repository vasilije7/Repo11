var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

// Only change code below this line
function myArrayFunction() {
  var averageDayTemp = [];
  for (var i = 0; i < temps.length; i++) {
    var sum = 0;
    var count = 0;
    for (var j = 0; j < temps[i].length; j++) {
      sum = sum + temps[i][j];
      count = count + 1;
    }
    averageDayTemp.push(sum / count);
  }
  return averageDayTemp;
}
// Only change code above this function
console.log(myArrayFunction());
module.exports = myArrayFunction;
