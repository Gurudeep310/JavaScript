function Car(color,brand)
{
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
};

let car1 = new Car("Blue","Audi");   // instance
console.log(car1.constructor);
