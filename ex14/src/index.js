// Only change code below this line
var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr) {
  do {
    var swapped = false;
    var temp;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        temp = [arr[i], arr[i - 1]];
        arr.splice(i - 1, 2, ...temp);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort(myArr));

// Only change code above this line
module.exports = bubbleSort;
