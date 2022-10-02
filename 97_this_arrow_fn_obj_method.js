let car = {
    color:"blue",
    brand:"Audi",
    start: function(){
        setTimeout(()=>{
            console.log(this);
        },1000);
    }
};

car.start()