/*
Find the Index of First Occurrence of Value
Given an array (myArray) and the value (val).
Write a JS program to find the index of first occurrence of a value (val) in the given array (myArray) using the array method "indexOf".
Note: If the value is not present in the array, indexOf returns "-1".
Input
The first line of input will contain an array (myArray).
The second line of input will contain any value.
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

/* Please do not modify anything above this line */

function findFirstIndexOfValue(myArray, val) {
    let result = myArray.indexOf(val); 
    return result; 
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  
  let firstIndexOfVal = findFirstIndexOfValue(myArray, val);
  
  console.log(firstIndexOfVal);
}
