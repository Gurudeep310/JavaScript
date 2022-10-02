/*
Employee Details
Given two values (name and role) of an employee, write a JS arrow function to return an employee object. Use the keys as mentioned in the sample outputs.
Input
The first line of input contains a string (name).
The second line of input contains a string (role).
Output
The output should be a single line containing the employee object.
Sample Input 
John
Project Manager
Sample Output 
{ name: 'John', role: 'Project Manager' }
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
  let name = readLine();
  let role = readLine();

  /* Please do not modify anything above this line */
  let employee_obj = (name,role) => ({name:name, role:role});
  console.log(employee_obj(name,role));
  
}