/*
Find the First Occurrence of String
Given an array (myArray).
Write a JS program to find the first string in the given array (myArray) using the array method "find".
Note: If the value is not present in the array, find returns "undefined".
Input
The first line of input will contain an array (myArray).
Output
The output should be a single line containing the value or undefined.
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

function findFirstStringOccurrence(myArray) {
    let result = myArray.find(function(eachVal)
    {
        if(typeof(eachVal) === 'string')
        {
            return true;
        }
        else{
            return false;
        }
    });
    return result;
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  
  let firstStringVal = findFirstStringOccurrence(myArray);
  console.log(firstStringVal);
}
