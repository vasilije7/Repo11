// Only change code below this line
function mySplice(arr1, arr2, n) {
  for (var i = 0; i < arr1.length; i++) {
    newArr = arr2.splice(n, 0, arr1[i]);
  }
  return arr2;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

// Only change code above this line
module.exports = mySplice;
