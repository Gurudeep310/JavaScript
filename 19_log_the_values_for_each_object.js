/*
Log the values from each Object
Given an array of objects (arrayOfInventions) in the prefilled code.
Write a JS program to log the value of the given key (objectKey) from each object.
Input

The first line of input will contain a string (objectKey).
Output

The value of the given key (objectKey) from each object should be in a new line.
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
  let objectKey = readLine().replace(/'/g, '"');
  // arrayOfInventions
  let arrayOfInventions = [
    {
      name: "Printing Press",
      "invented by": "Johannes Gutenberg",
      year: 1440
    },
    {
      name: "Light Bulb",
      "invented by": "Thomas Edison",
      year: 1879
    },
    {
      name: "Telephone",
      "invented by": "Alexander Graham Bell",
      year: 1876
    },
    {
      name: "Aeroplane",
      "invented by": "Orville and Wilbur Wright",
      year: 1903
    },
    {
      name: "Computer",
      "invented by": "Charles Babbage",
      year: 1822
    }
  ];
  for (let element of arrayOfInventions){
      console.log(element[objectKey])
  }
}
