// Qs1. Write a JavaScript function that returns array elements larger than a number. 

let arr = [8,9,10,1,2,3,4,5,6,7];
let num = 5;

//elements larger than a number num

// function getElement(arr, num){
//     for (let i=0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// getElement(arr, num);

// Qs2. Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let str = "abcdabcdefgggh"; 
//function to get String with all unique elements 

// function getUnique(str) {
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         let tempChar = str[i];
//         if(ans.indexOf(tempChar) == -1){
//             ans += tempChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));

/*
    Qs3. Write a JavaScript function that accepts a list of country names as input and 
    returns the longest country name as output. 
    Example : country = ["Australia", "Germany", "United States of America"] output : 
    "United States of America"
*/

/*
let  country = ["Australia", "Germany", "United States of America"];

// function whic return longest country name

function longestName(country){
    let ans = country[0];
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > ans.length) {
            ans = country[i];
        }
    }
    return ans;
}

console.log(longestName(country));

*/

// Qs4. Write a JavaScript function to count the number of vowels in a String 
// argument. 

// let str = "Vikram Aditya";

// function countVowels(str){
//     let count = 0;
//     const vowels = "aeiouAEIOU";

//     for(let i=0; i<str.length; i++){
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 count++;
//                 break;
//             }
//         }
//     }
//     console.log(`There are ${count} vowel in this string (${str})`);
// }

// countVowels(str);

// Qs5. Write a JavaScript function to generate a random number within a range 
// (start, end).

let start = 100; 
let end = 200; 
 
function generateRandom(start, end) { 
let diff = end - start; 
return Math.floor(Math.random() * diff) + start; 
}

console.log(`Generated random no. B/W ${start} - ${200} is:- ${generateRandom(start,end)}`);