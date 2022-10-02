/*
Sum of the values of an Array
Given an array (myArray).
Write a JS program to log the sum of the values of an array.
Input

The first line of input will contain an array of numbers.
Output

The output should be a single line containing the sum of the values of an array.
Constraints

The values of an array should be the numbers.
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
  // myArray
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let sum = 0;
  for (let element of myArray){
      sum = parseInt(element) + sum; 
  }
  console.log(sum);
}
