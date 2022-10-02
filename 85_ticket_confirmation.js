/*
Passenger Ticket Confirmation Status
Given name (name) and ticket confirmation status (isTicketConfirmed) of two passengers, write a JS factory function to return the passenger object. Use the keys as mentioned in the sample outputs.
Input
The first line of input contains a string (firstPassengerName).
The second line of input contains a boolean (firstPassengerTicketStatus).
The third line of input contains a string (secondPassengerName).
The fourth line of input contains a boolean (secondPassengerTicketStatus).
Output
The first line of output should be an object of the first passenger.
The second line of output should be an object of the second passenger.
Sample Input 
Madhav
true
Amith
false
Sample Output 
{ name: 'Madhav', isTicketConfirmed: true }
{ name: 'Amith', isTicketConfirmed: false }
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

function createPassengerTicket(name, isTicketConfirmed) {
    return {
        name: name,
        isTicketConfirmed: isTicketConfirmed
    };
}

/* Please do not modify anything below this line */

function main() {
  let firstPassengerName = readLine();
  let firstPassengerTicketStatus = JSON.parse(readLine());
  let secondPassengerName = readLine();
  let secondPassengerTicketStatus = JSON.parse(readLine());

/* Please do not modify anything above this line */ 
  console.log(createPassengerTicket(firstPassengerName,firstPassengerTicketStatus));
  console.log(createPassengerTicket(secondPassengerName,secondPassengerTicketStatus));
}