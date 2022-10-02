function Person(firstName,lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}

console.log(Person.prototype);

// Adding Property to prototype
Person.prototype.displayFullName = function(){
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Virat","Kohli");
let person2 = new Person("Sachin","Tendulkar");

console.log(Object.getOwnPropertyNames(person1));