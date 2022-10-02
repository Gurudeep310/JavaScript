/*
Predict the Winner
Given the average speeds of two bike racers in a race, write a JS program to predict the winner of the race using a ternary operator.
Input
The first line of input contains a number (averageSpeedOfRacer1).
The second line of input contains a number (averageSpeedOfRacer2).
Output
The output should be a single line containing the winner, "Racer 1" or "Racer 2".
Constraints
averageSpeedOfRacer1 is not equal to averageSpeedOfRacer2.
Sample Input 
98.80
92.39
Sample Output 
Racer 1
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

function getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2) {
    return (averageSpeedOfRacer1 > averageSpeedOfRacer2 ? "Racer 1" : "Racer 2");
}

/* Please do not modify anything below this line */

function main() {
  let averageSpeedOfRacer1 = JSON.parse(readLine());
  let averageSpeedOfRacer2 = JSON.parse(readLine());

  let winner = getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2);
  
  console.log(winner);
}
