/*
Given the first name and last name of a person, write a JS factory function to return the person object with a method, which returns the full name separated by a space.
Input
The first line of input contains a string firstName
The second line of input contains a string  lastName
Output
The output should be a single line containing the full name of the person.
Sample Input 
Imran
Ali
Sample Output 
Imran Ali
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

function createPerson(firstName, lastName) {
    return{
        firstName: firstName,
        lastName: lastName,
        name: function(){
            console.log(`${firstName} ${lastName}`);
        }
    };
}

function main() {
  const firstName = readLine();
  const lastName = readLine();

  createPerson(firstName,lastName).name();
}

