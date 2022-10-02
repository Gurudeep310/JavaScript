/*
Resolve with Pin
Given a number pin  as an input, create a JS promise, resolve with the given , consume the promise using then() syntax and log the response.
Sample Input 
200
Sample Output 
200
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

function main() {
  const pin = parseInt(readLine());
 const myPromise = () => {
     return new Promise((resolve,reject)=>{
         resolve(pin);
     });
 };
 myPromise().then((fromResolve)=>{
     console.log(fromResolve);
 })
}
