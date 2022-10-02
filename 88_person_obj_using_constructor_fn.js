/*
Person Object using Constructor Function
Given the first name (firstName) and last name (lastName) of a person, write a JS constructor function to return the person object with a method, which takes two parameters (firstName and lastName) and returns the full name separated by a space.
Input
The first line of input contains a string (firstName).
The second line of input contains a string (lastName).
The output should be a single line containing the full name of the person.
Sample Input 
Kylie
Grant
Sample Output 
Kylie Grant
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
    this.namify = function(){
      return `${firstName} ${lastName}`;   
    };
}

/* Please do not modify anything below this line */

function main() {
  let firstName = readLine();
  let lastName = readLine();
/* Please do not modify anything above this line */ 
 let p = new Person(firstName,lastName);
 console.log(p.namify());
}