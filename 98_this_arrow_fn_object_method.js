let car = {
    color: "blue",
    brand:"Audi",
    start: () => {
        console.log(this);
    }
};

car.start()
