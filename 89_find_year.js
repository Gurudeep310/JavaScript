/*
Find Year
Write a JS program to find the year in the given date string (dateString).
Input
The input will be a single line containing a date string (dateString).
Output
The output should be a single line containing only the year.
Sample Input 
July 26 2021
Sample Output 
2021
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
  let dateString = readLine();
  let date = new Date(dateString);
  console.log(date.getFullYear());
}
