var myStr = "Paragon is the best!";
function useMethods(str) {
  var myReverse;
  var countCharacters;

  // Split string into words

  var rijeci = str.split(" "); // (" ") sa razmakom dijeli na rijeci. Bez razmaka na slova.

  // Reverse order of words
  rijeci = rijeci.reverse();

  // Count each word number of characters

  countCharacters = rijeci.map((s) => s.length);

  // Reverse letters of each word

  rijeci = rijeci.map((r) => r.split("").reverse().join("")); //Prolazi kroz svaki element niza i izvrsava funkciju nad njima

  // Join words back to one string
  myReverse = rijeci.join(" ");

  return { myReverse, countCharacters };
}
console.log(useMethods(myStr));
module.exports = useMethods;
