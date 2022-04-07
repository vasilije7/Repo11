// Only change code below this line
function myMutation(arr) {
  var word1 = arr[0].toLowerCase().split("");
  var word2 = arr[1].toLowerCase().split("");

  for (var i = 0; i < word2.length; i++) {
    if (!word1.includes(word2[i])) {
      return false;
    }
  }

  return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
// Only change code above this line
module.exports = myMutation;
