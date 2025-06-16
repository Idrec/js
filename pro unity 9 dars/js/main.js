'use strict'

let a = 10,
    b = 2;

// if(a > 0){
//     b = a
// }else{
//     b = 13
// }

/// Ternar operatori

// a > 0 ? (b = a) : (b = 13); // tenar operatori 1 turi


// a > 0 ? // sharti
//     (b = a) // to'g'ri shartdagi amallari
//     : // aksincha yoki else
//     (b = 13); //noto'g'ri yoki else ishlagan amallar
 



// a = 10;

// if(a > 0){
//     b = a;
// } else if(a < 0){
//     b *= 15;
// }else if(a === 0){
//     b = 20
// }else{
//     b = 'error'
// }


// a > 0 ? (b =5) : a < 0 ? (b *= 15) : a === 0 ? (b = 20) : (b = 'eror');


// a = 10;
// // a = -10;

// // console.log(a > 0 ? a : 13);

// // b = (a > 0 ? a : 13);

// b = a > 0 ? a : a < 0 ? b * 15 : a === 0 ? 20 : "eror";

// console.log(b);


// Switch case
let color = 'green';

// if (color === 'red') {
//     console.log('To\'xta!')
// } else if (color === 'yellow') {
//     console.log('Tayyorlan!')
// } else if (color === 'green') {
//     console.log('Harakatlan!')
// } else {
//     console.log('error');
// }

color = 'red';
color = 'yellow';
color = 'green';
color = '';

// switch (color) {
//     case 'red':
//         console.log('To\'xta!');
//         break;
//     case 'yellow':
//         console.log('Tayyorlan!');
//         break;
//     case 'green':
//         console.log('Harakatlan!');
//         break;
//     default:
//         console.log('error');
// }

color = 'yellow';

switch (color) {
    case 'red':
        console.log('To\'xta!');
        break;
    case 'yellow':
    case 'green':
        console.log('Harakatlan!');
        break;
    default:
        console.log('error');
}
