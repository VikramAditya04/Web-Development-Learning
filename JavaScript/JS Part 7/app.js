//Qs1 . Write an arrow function named arrayAverage that accepts an array of numbers 
//and returns the average of those numbers.
/*
const arrayAvg = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total / arr.length;

};

let arr = [10,20,30,40,50];
console.log(arrayAvg(arr));

*/

// Qs2. Write an arrow function named isEven() that takes a single number 
// as argument and returns if it is even or not.

// let num = parseInt(prompt("Enter a number:-"));

// const isEven = (num) => num % 2 == 0;

// console.log(isEven(num));

// Q.2 What is the output of this code :-

// const object = {
//     message: 'Hello, world!',

//     logMessage (){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);

// Output :- After 1 sec "undefined" 

// Q.4 What is output of this code :-

let length = 4;
function callback(){
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback){
        callback();
    },
};

object.method(callback,5,4);