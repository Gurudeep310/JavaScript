/*
Given the brand name in the prefilled code, and the proposed brand name as input, write a method in the given JS constructor function to update the brand name.
The input contains a string 
The output should be a single line containing the proposed brand name.
Sample Input 
Royal Blue
Sample Output 
Royal Blue
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

function Company(brandName) {
  this.brandName = brandName;
  this.updateBrandName = function(proposedBrandName){
      this.brandName = proposedBrandName;
  };
}

/* Please do not modify anything below this line */

function main() {
  const proposedBrandName  = readLine();

  const company1 = new Company("Blue Royal");
  company1.updateBrandName(proposedBrandName);
  
  console.log(company1.brandName);   
}