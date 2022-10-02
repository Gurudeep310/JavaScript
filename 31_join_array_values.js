/*
Joining Array Values
Given an array (myArray) and the string (separator), write a JS program to join the array values using the separator and "join()" method.
Input
The first line of input will contain an array (myArray).
The second line of input will contain a string (separator).
Output
The output should be a single line string of combined array values.
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

function joinArrayValues(myArray, separator) {
    let result = myArray.join(separator);
    return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let separator =  readLine();
  
  let newString = joinArrayValues(myArray, separator);
  
  console.log(newString);
}
