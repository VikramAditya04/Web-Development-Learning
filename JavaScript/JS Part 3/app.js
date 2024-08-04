// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [7, 9, 0]

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [9, 0,-2]

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

// Qs3. Write a JavaScript program to check whether a string is blank or not.

// let str = prompt("Enter a String");

// if(str.length == 0){
//     console.log("String is Blank")
// }
// else{
//     console.log("String is Not blank")
// }

// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

// let str = prompt("Enter a String");
// let idx = prompt("Enter the index of String");


// if(str[idx] == str[idx].toLowerCase){
//     console.log("Character is lowercase")
// }
// else{
//    console.log('character is in uppercase')
// }

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = prompt("Enter a string");

// console.log(`original string = ${str}`);

// console.log(`String without spaces = ${str.trim()}`);

//  Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = prompt("Enter an item to check:- ");
let item = 64;

if(arr.indexOf(item) != -1){
    console.log("Elements exists in array");
}
else{
    console.log("Elements doesn't exists in array");
}