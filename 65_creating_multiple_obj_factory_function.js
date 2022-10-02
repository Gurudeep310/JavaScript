function createCar(color,brand)
{
    // Returning an object
    return{
        color: color,
        brand: brand,
        start: function(){
            console.log("Started");
        }
    };
}

let car1 = createCar("Blue","Audi");
let car2 = createCar("Red","Tata");
let car3 = createCar("Green","BMW");
console.log(car1);
console.log(car2);
console.log(car3);

// Short Hand Notations
function createCar1(color,brand)
{
    // Returning an object
    return{
        color,
        brand,
        start(){
            console.log("Started");
        }
    };
}

let car4 = createCar1("Blue","Audi");
let car5 = createCar1("Red","Tata");
let car6 = createCar1("Green","BMW");
console.log(car4);
console.log(car5);
console.log(car6);