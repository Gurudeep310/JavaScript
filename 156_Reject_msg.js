/*
Reject with a Message
Given a string errorMessage as an input, create a JS promise, reject with the given errorMessage, consume the promise using  syntax and log the response.
Sample Input 
Request Rejected
Sample Output 
Request Rejected
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
  const errorMessage = readLine();
  const myPromise = ()=>{
      return new Promise((resolve,reject)=>{
          reject(errorMessage);
      });
  };
  myPromise().catch((fromReject)=>{
      console.log(fromReject);
  });
}