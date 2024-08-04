// Ques. 1
// let num = prompt("Enter a number :- ")

// if(num % 10 == 0){
//     console.log("Good!")
// }else{
//     console.log("Bad")
// }

// Ques. 2

// let name = prompt("Enter user's name");
// let age  = prompt("Enter user's age");

// alert(`${name} is ${age} years old.`);

// Ques. 3

// let quarter = parseInt(prompt("Enter a quarter as number (1,2,3,4)"));

// switch(quarter){
//     case 1:
//         console.log("January, february, march");
//         break;
//     case 2:
//         console.log("April, may, june");
//         break;
//     case 3:
//         console.log("july, august, september");
//         break;
//     case 4:
//         console.log("october, novermber, december");
//         break;
//     default:
//         console.log("Wrong enterd!")            
// }

//Ques. 4

// let str = prompt("Enter a String :- ")

// if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)){
//     console.log("String is Golden String");
// }else{
//     console.log("String is not Golden String");
// }

// Ques. 5

// let a = 110;
// let b = 15;
// let c = 228;

// if(a > b && a > c){
//     console.log("a is largest");
// }
// else if (b > a && b > c) {
//     console.log("b is largest");
// } else {
//     console.log("c is largest");
// }

// Ques. 6

let num1 = 33;
let num2 = 1852;

if(num1 % 10 == num2 % 10){
    console.log("Both numbers have the same last digit");
}
else{
    console.log("Both number have not same last digit");
}
