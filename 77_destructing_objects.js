/*
Destructuring Objects
Given an object (userDetails), write a JS program to log the username from the userDetails in the console.
The input will be a single line containing an object (userDetails).
The output should be a single line containing the username.
{'username': 'marktommy', 'email':'marktommy@rediff.com'}
marktommy
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
  let userDetails = JSON.parse(readLine().replace(/'/g, '"'));
/* Please do not modify anything above this line */
 let username = userDetails['username'];
/* Please do not modify anything below this line */
  console.log(username);
}