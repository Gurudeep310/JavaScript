let person = {name:"Rahul",age:27};
let address = {city:"Hyderabad",pincode:500001};
let personDetails = {...person,...address};   
console.log(personDetails);