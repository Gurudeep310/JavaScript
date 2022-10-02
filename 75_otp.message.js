/*
OTP Message
Write a JS function to return an OTP message for the given name (customerName) and OTP (otp) using, template strings.
Note: The OTP message template is given in the sample output.
The first line of input contains a string (customerName).
The second line of input contains a number (otp).
The output should be the OTP message with the given name and OTP in a single line.
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

function getOtpMessage(name, otp) {
    let msg = `Hi! ${name}, ${otp} is your OTP.`;
    return msg;
}

/* Please do not modify anything below this line */

function main() {
  let customerName = readLine();
  let otp = JSON.parse(readLine());

  let otpMessage = getOtpMessage(customerName, otp);

  console.log(otpMessage);
}
