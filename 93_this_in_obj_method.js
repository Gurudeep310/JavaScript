let car = {
    color: "blue",
    brand:"Audi",
    start: function(){
        console.log(this);
    }
};

car.start()

// As this is present inside the "object method" this refers to the "object"