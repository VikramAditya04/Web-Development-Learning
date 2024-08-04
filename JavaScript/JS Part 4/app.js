/*  Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
 Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
 Resultshouldbearr=[1,3,4,5,6,3]
 */

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

/* Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
 Example: ifnumber=287152,count=6
*/

// let num = 287152;
// let count = 0;

// let copynum = Math.abs(num);

// while(copynum >  0){
//     count++;
//     copynum = Math.floor(copynum / 10);
// }

// console.log(count);

//  Qs3.WriteaJSprogramtofindthesumofdigitsinanumber.
// Example: ifnumber=287152,sum=25

// let num = 287152;
// let sum = 0;

// let copynum = num;

// while(copynum >  0){
//     let digit = copynum % 10;
//     sum += digit;
//     copynum = Math.floor(copynum / 10);
// }

// console.log(sum);

/*
    Qs4.Printthefactorialofanumbern.
    [Factorialofanumbernistheproductofallpositiveintegerslessthanorequal toa
    givenpositiveintegeranddenotedbythat integer.]
    Example:
    7!(factorialof7)=1x2x3x4x5x6x7=5040
    5!(factorialof5)=1x2x3x4x5=120
    3!(factorialof3)=1x2x3=6
    0!Isalways1
*/

// let n = parseInt(prompt("Enter a no. :- "));

// let fact = 1;

// for(let i=1; i<=n; i++){
//     fact *= i;
// }

// console.log(`Factorial of ${n} is ${fact}`);

//  Qs5.Findthelargestnumberinanarraywithonlypositivenumbers.

let arr = [45,50,72,13,2,5,67,70];
let max = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Largest no. in this array is :- ${max }`);