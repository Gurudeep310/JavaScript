/*
Calculate the Area of a Square
Given a number (side of a square), write a JS arrow function to calculate the area of the square.
Input
The first line of input contains a number (side).
Output
The output should be a single line containing the area of the square.
Sample Input 
4
Sample Output 
16
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
  let side = JSON.parse(readLine());
  let square = side => side*side;
  console.log(square(side));
}