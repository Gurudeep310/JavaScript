/*
Concatenate Objects with Spread Operator
Given three objects model, engine, and carDetails.
Write a JS program to merge the model, and engine objects into the carDetails object using the spread operator.
The first line of input contains an object.
The second line of input contains an object.
The output should be a single line containing the given console statement.
Constraints
Given objects should contain the same keys as in sample inputs.
Keys of the objects should be given in quotes.
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
  let model = JSON.parse(readLine().replace(/'/g, '"'));
  let engine = JSON.parse(readLine().replace(/'/g, '"'));
  let carDetails = {};
/* Please do not modify anything above this line */
  carDetails = {...model,...engine};
/* Please do not modify anything below this line */  
  console.log(`${carDetails.model} is powered with ${carDetails.engineCapacity}cc engine.`);
}
