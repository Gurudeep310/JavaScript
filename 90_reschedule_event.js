/*
Reschedule Event
There is an international conference to be held on the given date (scheduledDate) in the prefilled code, is rescheduled due to various reasons.
Given the rescheduled date, month and year as inputs, write a JS program to update the event date.
Input
The first line of input contains a number (rescheduledDate).
The second line of input contains a number (rescheduledMonth).
The third line of input contains a four-digit number (rescheduledYear).
Output
The output should be a single line containing the rescheduled date.
Sample Input 
12
2
2022
Sample Output 
12-3-2022  
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
  let scheduledDate = new Date("2020-2-15");
  let rescheduledDate = JSON.parse(readLine());
  let rescheduledMonth = JSON.parse(readLine());
  let rescheduledYear = JSON.parse(readLine());
/* Please do not modify anything above this line */
  scheduledDate.setDate(rescheduledDate);
  scheduledDate.setMonth(rescheduledMonth);
  scheduledDate.setYear(rescheduledYear);
  
/* Please do not modify anything below this line */  
  console.log(`${scheduledDate.getDate()}-${scheduledDate.getMonth() + 1}-${scheduledDate.getFullYear()}`);
}
