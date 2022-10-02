/*
Concatenate Arrays with Spread Operator
Given an array (numbersArray) in the prefilled code, write a JS program to merge the myArray at index 1 of the numbersArray using the spread operator.
The input will be a single line containing an array (myArray).
The output should be a single line containing the merged array.
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
  let numbersArray = [1, 5];
/* Please do not modify anything above this line */
  numbersArray = [numbersArray[0],...myArray,numbersArray[1]];
/* Please do not modify anything below this line */  
  console.log(numbersArray);
}
