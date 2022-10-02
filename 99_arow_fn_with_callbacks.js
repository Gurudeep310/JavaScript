let cars = ["audi","tata","bmw"];

let car = {
    color: "Blue",
    brand: "audi",
    start: function(){
        let audiIndex = cars.findIndex((car) => {
            console.log(this);
        })
    }
}

car.start();