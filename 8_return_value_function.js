/*
Return a value in the function
Given a function (getSumOfTwoIntegers) in the prefilled code.
 Return the sum of two integers passed as arguments to the function.
Input

The first line of input will contain an integer (firstInteger).
The second line of input will contain an integer (secondInteger).
Output

The output should be a single line containing the returned value of the function (sum of two integers).
*/
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // firstInteger
  let firstInteger = parseInt(readLine());
  // secondInteger
  let secondInteger = parseInt(readLine());

  // function getSumOfTwoIntegers
  function getSumOfTwoIntegers(integer1, integer2) {
      let firstNumber = integer1;
      let secondNumber = integer2;
      let sum = firstNumber + secondNumber;
      return sum 
  }


  let sumOfTwoIntegers = getSumOfTwoIntegers(firstInteger, secondInteger);
  console.log(sumOfTwoIntegers);
}
