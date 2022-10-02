/*
Add a Value to the Beginning of an Array
Given an array (myArray) and the value (val).
Write a JS program to add the given value (val) at the beginning of the array (myArray) using the array method "unshift".
Input
The first line of input will contain an array (myArray).
The second line of input will contain any value.
Output
The output should be a single line containing the updated array.
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

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  myArray.unshift(val);
  console.log(myArray);
}