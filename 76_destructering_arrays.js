/*
Destructuring Arrays
Given an array (numbersArray), write a JS program to calculate the sum of array values except for the first two values.
The input will be a single line containing an array of numbers (numbersArray).
The output should be a single line containing the sum of given array values except for the first two values.
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
  let numbersArray = JSON.parse(readLine());

/* Please do not modify anything above this line */
  let [a,b,...rest] = numbersArray;
  let sum = 0;
  for(let number of rest)
  {
      sum = sum + number;
  }
  console.log(sum);
}
