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
console.log(person1);
console.log(person2);
console.log(person1.displayFullName());
console.log(person2.displayFullName());
console.log(Person.prototype);

console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));