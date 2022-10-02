/*
Replacing the Array Values
Given an array (myArray), start index (startIndex), delete count (deleteCount), and two values (firstVal and secondVal).
Write a JS program to replace the array's existing values from the start index, with the new values using the "splice()" method.
Input
The first line of input will contain an array (myArray).
The second and third lines of input will contain the whole numbers (startIndex and deleteCount respectively).
The fourth and fifth lines of input will contain any values (firstVal and secondVal respectively).
Output
The output should be a single line containing the updated array.
Constraints
Strings should be given in quotes.
0 <= startIndex < myArray.length
0 <= deleteCount <= myArray.length - startIndex
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
  let startIndex = parseInt(readLine());
  let deleteCount = parseInt(readLine());
  let firstVal = JSON.parse(readLine().replace(/'/g, '"'));
  let secondVal = JSON.parse(readLine().replace(/'/g, '"'));
  myArray.splice(startIndex,deleteCount,firstVal,secondVal);
  console.log(myArray);
}
