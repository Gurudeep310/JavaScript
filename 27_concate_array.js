/*
Concatenate Arrays
Given two arrays (i.e. firstArray and secondArray).
Write a JS program to concatenate two arrays using the array method "concat".
Input
The first line of input will contain an array (firstArray).
The second line of input will contain an array (secondArray).
Output
The output should be a single line containing the concatenated array (i.e. Items from the firstArray and secondArray respectively).
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

/* Please do not modify anything above this line */

function concatenateTwoArrays(firstArray, secondArray) {
    let result = firstArray.concat(secondArray);
    return result;
}

/* Please do not modify anything below this line */

function main() {
  let firstArray = JSON.parse(readLine().replace(/'/g, '"'));
  let secondArray = JSON.parse(readLine().replace(/'/g, '"'));
  
  let combinedArray = concatenateTwoArrays(firstArray, secondArray);
  
  console.log(combinedArray);
}
