let a = 5;
let b = 5;
let operation = "add";

switch(operation)
{
    case "add":
        console.log(`a + b = ${a+b}`);
        break;
    case "subtract":
        console.log(`a - b = ${a-b}`);
        break;
    default:
        console.log("Invalid Operation");
        break;
}