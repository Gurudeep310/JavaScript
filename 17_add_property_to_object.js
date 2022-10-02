/*
Add a property to an object
Given an object (meals) in the prefilled code.
Add a new property to the object with the given key (objectKey) and value (val) and log the updated object.
Input

The first line of input will contain a string (objectKey).
The second line of input will contain a value (val). The value might be a string, array or an object.
Output

The input should be a single line containing the updated object.
Constraints

The 'objectKey' should be wrapped with the quotes.
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
  // objectKey
  let objectKey = readLine();
  // val
  let val = JSON.parse(readLine().replace(/'/g, '"'));
  // meals
  let meals = {
    breakfast: "Oatmeal",
    lunch: "Burrito",
    dinner: "Chapathi"
  };
  meals[objectKey] = val;
  console.log(meals);
}
