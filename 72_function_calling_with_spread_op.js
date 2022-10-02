/*
Function Calling with Spread Operator
Given a function (getProductOfTheIntegers) in the prefilled code to return the product of the given numbers, write a JS program to get the product of the given numbers in an array using the spread operator.
The input will be a single line containing an array of numbers (integersArray).
The output should be a single line containing the product of the given numbers in the array.
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

function getProductOfTheIntegers(...args) {
  let productOfAllValues = 1;
  for (let value of args) {
    productOfAllValues = productOfAllValues * value;
  }
  
  return productOfAllValues;
}

function main() {
  let integersArray = JSON.parse(readLine().replace(/'/g, '"'));
/* Please do not modify anything above this line */
  console.log(getProductOfTheIntegers(...integersArray));
}

