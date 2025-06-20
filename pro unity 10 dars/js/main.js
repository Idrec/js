'use strict'

/// 1misol
// let str = 'i am in the easycode';
// let result = '';

// for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === ' ') {
//         result += str[i].toUpperCase();
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);

/// 2misol
// let str = 'tseb eht ma i'
// let index = str.length;


// while (index >= 0){
//     console.log(str[index])
//     index--
// }

/// 3 misol

// let num = 1;

// for(let i = 1; i <= 10;i++){
//     num *= i
// }
// console.log(num)

/// 4 misol

// let str = 'JavaScript is a pretty good language';
// let result = '';

// for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === ' ') {
//         result += str[i].toUpperCase();
//     } else if (str[i] !== ' ') {
//         result += str[i];
//     }
// }

// console.log(result);


/// 5 misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         console.log(arr[i]); 
//     }
// }



/// FOR MAVZUSI
/**
 * for (итератор яратилишиж;шарт;)
 */

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for( let i = 10; i > 0; i--){
//     console.log(i)
// }

// let str = 'hello worlf i am web developer',
//     arr = ['hello', 'world', 'i', 'am', 'frontend', ];


// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// res = '';

// for(let i = 0;i < str.length; i++){
//     if (str[i] === ' '){
//         res += '_'
//     }else{
//         res += str[i];
//     }
// }

// for(let i = str.length - 1; i > 0; i--){
//     res += str[i];
// }

// for(let i = str.length - 1; i >= 0; i--){
//     if(str[i] === ' '){
//         res += '_'
//     }else{
//         res += str[i]
//     }
// }

// for(let i = str.length - 1; i >= 0; i--){
//     if(str[i] === ' '){
//         res += '_';
//     }else{
//         res += str[i];
//     }
// }


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let i arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// numbers = [13, 7, 20, 15, 6];

//  res = 0;

//  for(let i = 0; i < numbers.length; i++){
//     res += numbers[i];
//  }

/* for of*/
//     arr = ['hello', 'world', 'i', 'am', 'frontend', ];
// numbers = [13, 7, 20, 15, 6];


// for(let value of arr){
//     console.log(value)
// }

// for(let value of numbers){
//     console.log(value)
// }


res = 0;
for (let numbers of numbers){
    res += numbers;
}
console.log(res)

/*for in*/

for(let key in arr){
    console.log(key) // indekslari
    console.log(arr[key])  // indeksdagi qiymatlari 
}

console.log(arr);

let user = {
    firstname: 'Harry',
    lastname: 'Potter',
    age: 32,
};

for (let key in user){
    // console.log(key) ///kalitlari = indekslari
    console.log(user[key]) // qiymatlar
}