'use strict';

// let value;

// value = 14 > 7;
// value = 8 < 5;
// value = '5' > 3;
// value = 3 > '5';
// value = '13' > '5'; // true
// value = 'a' > 'A'; // false

// Matnning UNICODE ni aniqlash

// value = 'a'.charCodeAt(); //97
// value = 'A'.charCodeAt(); //65

// value = 'abv' > 'abefgc'; // true

// value = 13 >=13;
// value = '13' <= 18;
// value = 5 <= '8';
// value = 3 <= '3';

// value = 7 == 7;
// value = '7' == 7;
// value = 13 == 10;
 
// value = 18 != 13;
// value = 13 != '13';

// // Qatiy tenglik 
// value = 10 === 10;
// value = '13' === 13;

// //Qatiy tengsizlik
// value = 15 !== 13;
// value = '13' !== 13;


 
/*

    id(shart){
        shart qoniqtirgandagi amallar
    }else{
        aksincha (shart qoniqtirmagandagi) amallari
    }

*/

// value = 10;
// value = 0;

// if(value > 0){
//     console.log('son noldan katta');
// }else{
//     console.log('error')
// }


// O'zgaruvchi qiymati borligi tekshirish
// value = 10;
// value = 0;
// value = 'hello';
// value = '';

// if(value){
//     console.log('o\'zgaruvchi bo\'sh emas');
// }else {
//     console.log('o\'zgaruvchi bo\'sh yoki unda inkor qiymat bor');
// }


// 'emas' '!' operatori
//consolo.log(Boolean('hello')); // true
// console.log(Boolean(null)); // false

// console.log(!'hello'); // false
// console.log(!null); // true

// "emas" "!" operatori - qiymatni o'ziga bo'lgan qarama-qarshi booleanga aylantiradi
// misol !"hello" -> false
// misol !null -> true'



//Inkor qiymat qabul qiluvchi shart

// value = null;
// value = 'hello';
// if(!value){
//     console.log('ozgaruvchining qiymati inkor qiymat');
// }
// Obyekt bilan misol
// let user =  {
//     name: 'Harry potter',
//     age: 34
// }

// if(user.name){
//     confirm.log('nima degan xususiyat bor ekan')
// } else{
//     console.log('yoq ekan')
// }

// let user =  {
//     name: null,
//     age: 34
// }

// if(user.name){
//     console.log('name degan xususiyat bor ekan');
// } else {
//     console.log('yoq ekan');
// }

// //Obyektda ko'rsatilgan xususiyat bor yoki yoqligini tekshirish
// // console.log(user.hasOwnProperty('name'));

// if(user.hasOwnProperyty('name')){
//     console.log('name degan xususiyat bor ekan')
// }else{
//     console.log('yoq ekan');
// }

// //Ko'rsatilgan xususiyatni bo'lmaganda ishlaydigan shart
// if(!user.hasOwnProperyty('info')){
//     console.log('bunaqa xususiyat yoq!');
// }


//Massivlar bilan misol
// let arr = [null,123,'hello'];

// if(arr.length > 0){
//     console.log('massiv bo`sh emas');
// }else{
//     console.log('massiv bo`sh');
// }


// if(arr.length){
//     console.log('massiv bo`sh emas');
// }else{
//     console.log('massiv bo`sh');
// }


// Massiv bo'sh bo'lganda ishlaydigan shart
// if(!arr.length){
//     console.log('massiv bo`sh');
// }


//O'zgaruvchining qiymati massiv ekanligini tekshirish
// console.log(typeof(arr)); //object

// console.log(Array.isArray(arr)) //true


// if(Array.isArray(arr)){
//     console.log('bu massiv')
// }else{
//     console.log('bu masssiv emas')
// }


//O'zgaruvchi qiymati massiv bo'lmaganda ishlaydigan masssiv 

// arr = 'hello'

// if(!Array.isArray(arr)){
//     console.log('bu massiv')
// }else{
//     console.log('bu masssiv emas')
// }



// console.log(value)



let a;

a = 0 || 'string'; // string
a = 1 && 'string'; // string
a = null || 25; // 25
a = null && 25; //null
a = null || 0 || 35; // 35
a = null && 0 && 35; // null

console.log(a)



let value;
value = 12 + 14 + '12'; // 2612
value = 3 + 2 - '1'; // 4
value = '3' + 2 - 1; // 31
value = undefined + 2; // nan
value = null + 5; // 5
value = true + undefined; // nan

console.log(value)


let hidden = 5

if(hidden == 0){
   console.log(1)
}else if(hidden > 0){
    console.log("less then zero")
}else if(hidden < 0){
    console.log(hidden * 10)
}


let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if(car.age > 5){
    console.log('Need Repair')
    car.needRepair = true
}

console.log(car)


let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

let price = parseFloat(item.price.replace('$', ''))
let discount = parseFloat(item.discount.replace('%', ''))

item.priceWithDiscount = price - (price * discount / 100)

console.log(item)


let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; 
let max = 20; 

let цена = parseFloat(product.price.replace('$', ''))

if(цена >= min && цена <= max){
    console.log(product.name)
}else{
    console.log("товаров не найдено.")
}