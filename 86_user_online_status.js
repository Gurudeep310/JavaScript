/*
User Online Status
Given a name (username) and online status (isOnline) of two users on a social media application, write a JS constructor function to return the user object. Use the keys as mentioned in the sample outputs.
Input
The first line of input contains a string (firstUserName).
The second line of input contains a boolean (firstUserOnlineStatus).
The third line of input contains a string (secondUserName).
The fourth line of input contains a boolean (secondUserOnlineStatus).
Output
The first line of output should be an object of the first user.
The second line of output should be an object of the second user.
Sample Input 
Raghav
true
Vikas
true
Sample Output 
User { username: 'Raghav', isOnline: true }
User { username: 'Vikas', isOnline: true }
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

function User(username, isOnline) {
    this.username = username;
    this.isOnline = isOnline;
}

/* Please do not modify anything below this line */

function main() {
  let firstUserName = readLine();
  let firstUserOnlineStatus = JSON.parse(readLine());
  let secondUserName = readLine();
  let secondUserOnlineStatus = JSON.parse(readLine());

/* Please do not modify anything above this line */ 
  console.log(new User(firstUserName,firstUserOnlineStatus));
  console.log(new User(secondUserName,secondUserOnlineStatus));
}
