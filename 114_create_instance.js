let Car = new Function("color,brand",`this.color = color; this.brand = brand; this.start = function(){console.log("Started")}`);
let car1 = new Car("Blue","Audi");
console.log(car1);