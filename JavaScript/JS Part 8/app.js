// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr = [10,20,30,40,50];

// const square = arr.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / arr.length;
// console.log(avg);/

// Qs2. Create a new array using the map function whose each element is equal to the
//  original element plus 5.

// let num = [2,4,6,8,-2,-4];

// let ans = num.map((num) => num + 5);

// console.log(ans);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];

// // Example usage:
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // Output: [1, 2, 3, 8, 8]
// console.log(doubleAndReturnArgs([2], 10, 4));      // Output: [2, 20, 8]

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// console.log(mergeObjects({a:1,b:2}, {c:3,d:4}));

