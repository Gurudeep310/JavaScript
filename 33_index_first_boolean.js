/*
Find the Index of First Boolean Value
Given an array (myArray), write a JS program to find the index of the first boolean value in myArray using "findIndex()" method.
Note: If the value is not present in the array, findIndex() returns "-1".
Input
The first line of input will contain an array (myArray).
Output
The output should be a single line containing the index or -1.
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

function findFirstBooleanOccurrence(myArray) {
    let result = myArray.findIndex(function(eachVal){
    if(typeof(eachVal) === "boolean"){
        return true;
    }
    else{
        return false;
    }
    });
    return result;
}