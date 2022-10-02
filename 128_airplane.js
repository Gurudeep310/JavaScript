/*
Airplane
Given a constructor function in the prefilled code, airplaneName and inAir as inputs, write a JS program to alter the airplane state.Add the following methods to Airplane  using the prototype
takeOff
land
The methods should update the isFlying  state and log the output in the console as shown in the sample outputs. 

Input
Boeing Air Bus
true
Sample Output 
Boeing Air Bus is landing
Is Airplane flying? false
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

function Airplane(name, inAir) {
  this.name = name;
  this.isFlying = inAir;
}

Airplane.prototype.takeOff = function()
{
    if (this.isFlying){
        this.isFlying = false;
        return `${this.name} is landing`;
    }
    else{
        this.isFlying = true;
        return `${this.name} is taking off`;
    }
};
function main() {
  const airplaneName = readLine();
  const inAir = JSON.parse(readLine());
  
  const airplane = new Airplane(airplaneName, inAir);
  console.log(airplane.takeOff());
  console.log(`Is Airplane flying? ${airplane.isFlying}`);
}