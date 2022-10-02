const x = 10;
console.log(x);

const car={
    color:"blue",
    brand:"audi",
};

car.color = "red";
console.log(car);  // no error as we are changing property

//car = {}; Error   as we are reassigning the object