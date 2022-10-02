/*
Discounted Fare
A Cab service is providing discounts to its passengers on various basis.
Given fare (fare) and discount percentage (discountPercentage) as inputs, write a JS arrow function to return the discounted fare.
Note: The formula to calculate the discounted fare is,
fare - (fare * discountPercentage) / 100
Input
The first line of input contains a number (fare).
The second line of input contains a number (discountPercentage).
Output
The output should be a single line containing the discounted fare.
Sample Input 
200
10
Sample Output 
180
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
  let fare = JSON.parse(readLine());
  let discountPercentage = JSON.parse(readLine());

  /* Please do not modify anything above this line */
  let final_fare = (fare,discountPercentage) => fare-((fare*discountPercentage)/100);
  console.log(final_fare(fare,discountPercentage));
}