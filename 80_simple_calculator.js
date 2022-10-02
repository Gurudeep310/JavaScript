/*
Simple Calculator
Given an arithmetic operator (operator) and two numbers (number1 and number2), write a JS program to make a simple calculator using the switch statement.
Log "Invalid operator" in the console, if the user enters other than the arithmetic operators.
Input
The first line of input contains an operator (+, -, *, /).
The second line of input contains a number (number1).
The third line of input contains a number (number2).
Output
The output should be a single line containing the appropriate result or "Invalid operator".
Sample Input 
+
2
3
Sample Output 
5
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
  let operator = readLine();
  let number1 = JSON.parse(readLine());
  let number2 = JSON.parse(readLine());

  /* Please do not modify anything above this line */
  switch(operator){
      case "+":
          console.log(`${number1 + number2}`);
          break;
      case "-":
          console.log(`${number1 - number2}`);
          break;
      case "*":
          console.log(`${number1 * number2}`);
          break;
      case "/":
          console.log(`${number1 / number2}`);
          break;
      default:
            console.log("Invalid operator");
            break;
  }
}