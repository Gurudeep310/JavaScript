/*
Expiry Date
Given a manufacturing date (manufacturingDate) and number of months to expiry (monthsToExpiry) for a product, write a JS program to find the expiry date.
Input
The first line of input contains a date string (manufacturingDate).
The second line of input contains a number (monthsToExpiry).
Output
The output should be a single line containing the expiry date of the product.
Sample Input 
2020-01-21
8
Sample Output 
21-9-2020
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
  let manufacturingDate = new Date(readLine());
  let monthsToExpiry = parseInt(readLine());
/* Please do not modify anything above this line */
 
  let expiryDate = new Date(manufacturingDate.getFullYear(),manufacturingDate.getMonth() + monthsToExpiry, manufacturingDate.getDate());
  
/* Please do not modify anything below this line */  
  console.log(`${expiryDate.getDate()}-${expiryDate.getMonth() + 1}-${expiryDate.getFullYear()}`);
}