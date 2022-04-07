// Only change code below this line
var str = "Paragon!";

function myReverse(str) {
  var result = "";

  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(myReverse(str));

// Only change code above this line
module.exports = myReverse;
