function Car(color,brand)
{
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
};

console.log(Car.name);
console.log(Car.length);
console.log(typeof(Car));
let car1 = new Car("Blue","Audi");   // instance
let car2 = new Car("Red","Tata");
let car3 = new Car("Green","BMW");
console.log(car1);
console.log(car2);
console.log(car3);