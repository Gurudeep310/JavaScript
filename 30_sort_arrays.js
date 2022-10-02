/*
Sorting Array Values
Given an array (myArray), write a JS program to sort the array values in the ascending order using "sort()" method.
Input
The first line of input will contain an array (myArray).
Output
The output should be a single line containing the sorted array.
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

function sortArray(myArray) {
    let result = myArray.sort();
    return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  
  let sortedArray = sortArray(myArray);
  
  console.log(sortedArray);
}
