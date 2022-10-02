/*
Final Value with Simple Interest
Given a principal amount (p) as an input and time (t), interest rate (r) as optional inputs, write a JS function to return the final value (a) with an interest rate (r) after the time (t) using simple interest. The default values for time and interest rate are 1 and 10 respectively.
Note: The formula for the final value with simple interest is,
a = p * (1 + t * r / 100)
The first line of input contains a number (p).
The second line (optional) of input contains a number (t).
The third line (optional) of input contains a number (r).
The output should be a single line containing the final value.
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
  let input = inputString[currentLine++]; 
  return input === undefined ? undefined : JSON.parse(input);
}

/* Please do not modify anything above this line */
 function calculateTotalAmountWithInterest(amount,time = 1,interest_rate = 10)
 {
     return (amount*(1+((time*interest_rate)/100)));
 }
/* Please do not modify anything below this line */

function main() {
  let p = readLine();
  let t = readLine();
  let r = readLine();

  let finalValue = calculateTotalAmountWithInterest(p, t, r);

  console.log(finalValue);
}

