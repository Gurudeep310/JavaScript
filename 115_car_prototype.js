function Car(color,brand)
{
    this.color = color;
    this.brand = brand;
    this.start = function(){console.log("Started");}
}

let car1 = new Car("Blue","Audi");
console.log(car1);
console.log(Car.prototype);
console.log(Object.getPrototypeOf(car1));