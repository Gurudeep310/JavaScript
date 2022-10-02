/*
Find the Index of the Last Occurrence of Value
Given an array (myArray) and the value (val), write a JS program to find the index of the last occurrence of value in the given array using "lastIndexOf()" method.
Note: If the value is not present in the array, lastIndexOf() returns "-1".
Input
The first line of input will contain an array (myArray).
The second line of input will contain any value (val).
Output
The output should be a single line containing the index or -1.
Constraints
Strings should be given in quotes.
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


function findLastOccurrenceOfVal(myArray, val) {
    let result = myArray.lastIndexOf(val);
    return result;
}



function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  
  let lastOccurrenceOfVal = findLastOccurrenceOfVal(myArray, val);
  
  console.log(lastOccurrenceOfVal);
}
