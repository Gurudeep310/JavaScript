/*
Creating a Copy of an Array
Create a copy of the given array (myArray) using the spread operator.
The input will be a single line containing an array (myArray).
The output should be a single line containing an array with the values of myArray.
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
/* Please do not modify anything above this line */
  let newArray = [...myArray]
  
/* Please do not modify anything below this line */  
  console.log(newArray);
}
