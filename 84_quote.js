/*
Quote
Write a JS arrow function to log the given quote,
"Make it work, make it right, make it fast.".
The output should be a single line containing the quote.
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
  /* Please do not modify anything above this line */
  let msg = () => "Make it work, make it right, make it fast.";
  console.log(msg());
}