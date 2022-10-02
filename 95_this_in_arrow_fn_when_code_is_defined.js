let car = {
    color:"blue",
    brand:"Audi",
    start: function(){
        setTimeout(function(){
            console.log("Timeout");
        },1000);
    }
};

car.start()
