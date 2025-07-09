'use strict'

/**Funksiyalar
 * declaration (an`anaviy)
 * express
 * arrow
 */

/// duclaration - Funksiya yaratilgunicha funksiyaga murojat qilish mumkin
// console.log(myFunc('harry'));


// function myFunc(str){
//     return 'Hello' + str
// }


// // decloration funksiya bir xil idenfikatorli funksiyalar e`lon qilishga rucsat beradi, bu esa koddagi konfliktlarga olib kelishi mumkin!

// function myFunc(num){
//     return num * 10
// }
// // console.log(myFunc(5))

// /* -- express -- */

// console.log(myFunc('harry')); // funksiya yozilgan o'zgaruvchi u e'lon qilingunicha murojaat qilish mumkin emas!

// const myFunc = function(str) {
//     return 'Hello' + str;
// }

// console.log(myFunc('john'));

// // express funksiyada this mavjud
// const getPrise = function(current = 'USD'){
//     console.log(this.price + current);
// }
// let prod1 = {
//     name: 'intel',
//     price: 130,
//     getPrise
// }
// prod1.getPrise('RUB');

// // express funksiya argument mavjud!
// const getSumm = function(){
//     let res = 0;
//     for(let value of argument){
//         res += value;
//     }
//     return res;
// }
// console.log(getSumm(10,13,15,7,12))


// /* -- arrow -- */

// const myFunc = (str) => {
//     return 'Hello ' + str
// }
// console.log(myFunc('john'))

// const myFunc = (str) => {return 'hello' + str};
// console.log(myFunc('john'));

// //arrow funksiyaning strelkasi(=>) return ni amalini bajaradi
// const myFunc = (str) => 'hello ' + str;
// consolo.log(myFunc('john'));

// const sayHello = (firstname, lastname, age) => {
//     return `hello my name is ${firstname} ${lastname}. i'm ${age} years old!`
// ;}

// console.log(sayHello('harry', 'potter', 34));

// const sayHello = (firstname, lastname, age) => `hello my name is ${firstname} ${lastname}. i'm ${age} years old!`;

// console.log(sayHello('harry', 'potter', 34));

// //arrow funksiyada argument mavjud emas!
// const getSumm = () => {
//     console.log(argument);
// }
// console.log(getSumm(10,2,4,6))

// //arrow funksiyada this mavjud emas!
// const getPrise = (current = 'USD') => {
//     console.log(this);
//     console.log(this.price + current);
// }
// let prod1 = {
//     name: 'intel',
//     price: 140,
//     getPrise
// }

// prod1.getPrise();


// /* -- o'z-o'zini chaqiruvchi funksiyalar -- */
// (function(){
//     console.log('hello')
// })();
// (() =>{
//     console.log('hello')
// })();