/*
Indian Car Brand Names
Given an array of objects (arrayOfCarBrands) with the properties 'name' and 'country'.
Write a JS Program to log an array of the Indian car brand names.
The Indian car brands have the country-'India' as a key-value pair.
Input

The first line of input will contain an array of objects (arrayOfCarBrands).
Output

The output should be a single line containing the array of Indian car brand names.
Constraints

The keys of the object should be in quotes.
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
  // arrayOfCarBrands
  let arrayOfCarBrands = JSON.parse(readLine().replace(/'/g, '"'));
  let arrayOfCarBrandsIndia = []
  for (let element of arrayOfCarBrands){
      if(element['country'] == 'India')
      {
          arrayOfCarBrandsIndia.push(element['name'])
      }
  }
  console.log(arrayOfCarBrandsIndia)
}
