/*
Rest Parameter
Given an array of a family (familyArray), the first two values of the array consist of father and mother followed by their children.
Write a JS function to log father and mother in the first line separated by one space and children separated by a comma using the array method join() in the second line.
Input
The input will be a single line containing an array (familyArray).
Output
The first line of output should be the father and mother names respectively.
The second line of output should be a string of children separated by a comma.
Sample Input 
[ 'John', 'Martha', 'Nikky', 'Boby' ]
Sample Output 
John Martha
Nikky,Boby
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

function logFamily(father,mother,...children)
{
    let formatedChildren = children.join();
    console.log(`${father} ${mother}`);
    console.log(formatedChildren);
}

/* Please do not modify anything below this line */

function main() {
  let familyArray = JSON.parse(readLine().replace(/'/g, '"'));

  logFamily(...familyArray);
}
