/*
Array Slicing
Given an array (myArray) and the two integers (startIndex and endIndex), write a JS program to slice the myArray from the start index to end index using "slice()" method.
Input
The first line of input will contain an array (myArray).
The second and third lines of input will contain whole numbers (startIndex and endIndex respectively).
Output
The output should be a single line containing the sliced array.
Constraints
0 <= startIndex, endIndex < myArray.length
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

function getSliceFromArray(myArray, startIndex, endIndex) {
    let result = myArray.slice(startIndex,endIndex);
    return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let startIndex =  JSON.parse(readLine());
  let endIndex =  JSON.parse(readLine());
  
  let slicedArray = getSliceFromArray(myArray, startIndex, endIndex);
  
  console.log(slicedArray);
}
