let Car = new Function("color,brand",`this.color = color; this.brand = brand; this.start = function(){console.log("Started")}`);
console.log(Function.prototype);
console.log(Object.getPrototypeOf(Car));
