/*
Remove First Value
Given an array (myArray), write a JS program to remove value at the first index of the array using "shift()" method. Log the extracted value and updated array in the console.
Input
The first line of input will contain an array (myArray).
Output
The first line of output should contain the value extracted from the array.
The second line of output should contain the updated array.
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
  let removeval = myArray.shift();
  console.log(removeval);
  console.log(myArray);
}
