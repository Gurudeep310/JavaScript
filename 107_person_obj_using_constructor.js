/*
Given the first name and last name  of a person, write a JS constructor function with a method, which returns the full name separated by a space.
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

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = function(){
        return `${this.firstName} ${this.lastName}`;
    };
}

function main() {
  const firstName = readLine();
  const lastName = readLine();

    console.log(new Person(firstName,lastName).name());
}
