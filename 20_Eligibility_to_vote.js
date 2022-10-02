/*
Eligibility to Vote
Given an array of objects (arrayOfPersons) with the properties 'name' and 'age'.
Write a JS Program to log the names of the persons who are eligible to vote (age >= 18).
Input

The first line of input will contain an array of objects (arrayOfPersons).
Output

Each person's name should be in a new line.
Constraints

The keys of the object should be in quotes.
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
  // arrayOfPersons
  let arrayOfPersons = JSON.parse(readLine().replace(/'/g, '"'));
  for (let element of arrayOfPersons){
      if(element['age'] >= 18)
      {
          console.log(element['name'])
      }
  }
}
