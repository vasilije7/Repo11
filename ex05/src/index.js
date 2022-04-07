monitorsListArray = ["Apple", "Peach", "Berry"];

// Only change code below this line
function myMonitorsFunction() {
  var monitorsList = [];

  for (var i = 0; i < monitorsListArray.length; i++) {
    var tempArr = [];
    tempArr.push(monitorsListArray[i]);
    tempArr.push(i + 1);
    monitorsList.push(tempArr);
  }
  return monitorsList;
}

console.log(myMonitorsFunction());
// Only change code above this line
module.exports = myMonitorsFunction;
