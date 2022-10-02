/*
Area and Perimeter of Rectangle
Given a length  l  and breadth b of a rectangle, write a JS constructor function with the methods  to calculate the area and perimeter of the rectangle respectively.
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
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function Rectangle(length, breadth) {
 
 this.length = length;
 this.breadth = breadth;
 
 this.getArea = function()
 {
     return `${this.length * this.breadth}`;
 };
 
 this.getPerimeter = function()
 {
     return `${2 * (this.length + this.breadth)}`;
 };

}