// Qs1. Create a program that generates a random number representing a dice roll.
//  [The number should be between 1 and 6].

// let num = Math.floor(Math.random() * 6 +1);

// console.log(`your dice no. is: ${num}`);

/*
     Qs2. Create an object representing a car that stores the following properties for the
    car: name, model, color.
    Print the car’s name.
*/

// const  car_store = {
//     name: "Maruti Suzuki",
//     model: "Maruti Suzuki Dzire",
//     color: "White"
// };

// console.log(`Car's name is: ${car_store.name}`);

/*
    Qs3. Create an object Person with their name, age and city.
    Edit their city’s original value to change it to “New York”.
    Add a new property country and set it to the United States.
*/

const person = {
    name: "Donald trump",
    age: 72,
    city: "Calofornia"
};
console.log("Original Value :- ")
console.log(person);

person.city = "New York";
person.country = "United States";

console.log("After Update Person's value:-");
console.log(person);