var currentlyEnteredNumber = "";
var one = "";
var two = "";
var three = "";
var four = "";
var five = "";
var six = "";
var seven = "";
var eight = "";
var nine = "";
var zero = "";
var operator = "";
var answer = "";
var num1 = "";
var num2 = "";
function onePressed() {
  one = 1;
  join();
  // console.log(currentlyEnteredNumber);
}
function twoPressed() {
  two = 2;
  join();
  // console.log(currentlyEnteredNumber);
}
function threePressed() {
  three = 3;
  join();
  //console.log(currentlyEnteredNumber);
}
function fourPressed() {
  four = 4;
  join();
  //console.log(currentlyEnteredNumber);
}
function fivePressed() {
  five = 5;
  join();
  //console.log(currentlyEnteredNumber);
}
function sixPressed() {
  six = 6;
  join();
  //console.log(currentlyEnteredNumber);
}
function sevenPressed() {
  seven = 7;
  join();
  //console.log(currentlyEnteredNumber);
}
function eightPressed() {
  eight = 8;
  join();
  // console.log(currentlyEnteredNumber);
}
function ninePressed() {
  nine = 9;
  join();
  //console.log(currentlyEnteredNumber);
}
function zeroPressed() {
  zero = 0;
  join();
  //console.log(currentlyEnteredNumber);
}
function join() {
  if (one === 1) {
    currentlyEnteredNumber = currentlyEnteredNumber + "1";
    one = "";
  }
  if (two === 2) {
    currentlyEnteredNumber = currentlyEnteredNumber + "2";
    two = "";
  }
  if (three === 3) {
    currentlyEnteredNumber = currentlyEnteredNumber + "3";
    three = "";
  }
  if (four === 4) {
    currentlyEnteredNumber = currentlyEnteredNumber + "4";
    four = "";
  }
  if (five === 5) {
    currentlyEnteredNumber = currentlyEnteredNumber + "5";
    five = "";
  }
  if (six === 6) {
    currentlyEnteredNumber = currentlyEnteredNumber + "6";
    six = "";
  }
  if (seven === 7) {
    currentlyEnteredNumber = currentlyEnteredNumber + "7";
    seven = "";
  }
  if (eight === 8) {
    currentlyEnteredNumber = currentlyEnteredNumber + "8";
    eight = "";
  }
  if (nine === 9) {
    currentlyEnteredNumber = currentlyEnteredNumber + "9";
    nine = "";
  }
  if (zero === 0) {
    currentlyEnteredNumber = currentlyEnteredNumber + "0";
    zero = "";
  }
}
function divide() {
  oparator = "divide";
  num1 = currentlyEnteredNumber;
  currentlyEnteredNumber = "";
}
function times() {
  oparator = "times";
  num1 = currentlyEnteredNumber;
  currentlyEnteredNumber = "";
}
function minus() {
  oparator = "minus";
  num1 = currentlyEnteredNumber;
  currentlyEnteredNumber = "";
}
function add() {
  oparator = "add";
  num1 = currentlyEnteredNumber;
  currentlyEnteredNumber = "";
}
function equals() {
  num1 = num1 * 1;
  num2 = currentlyEnteredNumber * 1;
  currentlyEnteredNumber = "";
  if (oparator === "add") {
    answer = num1 + num2;
  }
  if (oparator === "minus") {
    answer = num1 - num2;
  }
  if (oparator === "divide") {
    answer = num1 / num2;
  }
  if (oparator === "times") {
    answer = num1 * num2;
  }
  displayAnswer();
}
function clear() {
  var num1 = "";
  var num2 = "";
  var answer = "";
  var currentlyEnteredNumber = "";
  var oparator = "";
  document.getElementById("answer").innerHTML = "";
}
function displayAnswer() {
  document.getElementById("answer").innerHTML = answer;
}
function displayCurrentNumber() {
  if (answer === "")
    document.getElementById("answer").innerHTML = currentlyEnteredNumber;
}