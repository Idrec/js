'use strict'

// SIKL OPERATORLARI

/**
 * while
 * do while
 * for
 * for of
 * for in
 */

let index = 0;

// while (index < 5) {
//     console.log('hello')
//     index++
// }


// while (index < 5) {
//     console.log(index)
//     index++
// }

// index = 5;
// while (index > 0){
//     console.log(index)
//     index--
// }

let str = 'hello worlf i am web developer',
    arr = ['hello', 'world', 'i', 'am', 'frontend', 'developer'];

index = 0;
// while ( index < str.length){
//     console.log(str[index])
//     index++
// }

// while(index < arr.length){
//     console.log(index, arr[index]);
//     index++
// }


// index = arr.length;
// while(index >= arr.length){
//     console.log(index, arr[index]);
//     index--
// }


let res = ' '

index = str.length - 1;

while (index >= 0){
    if(str[index] === ' '){
        res += '_'
    }else{
        res += str[index];
    }
    index--;
}
console.log(res)