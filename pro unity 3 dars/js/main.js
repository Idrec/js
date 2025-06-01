'use strict';

/**
 * string
 * number 
 * boolean
 * undefined
 * null
 * symbol
 * object
 * array
 * function
 * object date
 */


let value

// number to string
let num = 13
value = num


value = String(13);
value = String(num); 
value = (7).toString(); 
value = num.toString();
value = 8 + '';
value = num + '';


// boolean to string
let bool = true;

value = String(false);
value = String(bool); 
value = (false).toString(); 
value = bool.toString();
value = false + '';
value = bool + '';


// undefined to string
let example = undefined;

value = example;
value = String(example); 
// value = (example).toString(); // undefined ga metod qo'llabbulmaydi!
value = example + '';


// null to string
example = null;

value = example;
value = String(null);
value = String(example);
// value = (null),toString(); // null ga metod qo'llab bo'lmaydi!
value = null + '';
value = example + '';


// object to string
let user = {
    name:  'Harry potter',
    age: 34
}

value = user;
value = String(user); // [object Object]
value = user.toString(); // [object Object]
value = user + ''; //[object Object]


// array to string
let array = ['hello', false, 123];

value = array;
value = String(array); // hello,false,123
value = array.toString(); // hello,false,123
value = array + ''; // hello,false,123




// JSON
value = JSON;
value = JSON.stringify(user); //'{"name":"Harry potter","age":34}'
value = JSON.stringify(array); //["hello",false,123] 






// === string to number

let str = '13';

value = str;
value = Number('76');
value = Number(str);
value = +'78'; // unar operatori o'zidan keyn turgan qiymatni songa aylantiradi
value = +str;

// Agar son harf bilan kelsa

value = +'12ab'; // NaN = not a number
value = Number('231as'); // NaN


value = +''; // 0
value = Number(''); // 0

value = '100USD';
value = parseInt('100USD'); //matndan sonni butun qismini 100 ni olib beradi
value = parseFloat('12.5USD'); // 12
value = parseFloat('13.5USD'); // 13.5
value = parseInt('USD102'); // NaN yani son faqat matndan oldinga kelsa parse Int va Float komandalari ishlaydi
value = parseFloat('USD23.3'); // NaN yani son faqat matndan oldinga kelsa parse Int va Float komandalari ishlaydi


// boolean to number
value = true;
value = Number(true); // 1
value = Number(false); // 0
value = +true; // 1
value = +false; // 0
value = true + true + true; // 3
value = false - 3; // -3

// undefined to number
value = Number(undefined); // NaN
value = +undefined; // NaN

// null to number
value = Number(null); // 0
value = +null; // 0

value = undefined + 3; // NaN
value = null + 3; // 3

// object to number
value = user;
value = Number(user); // NaN
value = Number({}); // NaN
value = +user; // NaN
value = +{}; // NaN

// array to number
value = array;
value = Number(array); // NaN
value = +array; // NaN
value = Number([]); // 0
value = +[];

value = [] - 3; // -3

// all to boolean
value = Boolean('hello'); // true
value = Boolean(''); // false
value = Boolean(123); // true  
value = Boolean(-13); // true  
value = Boolean(0); // false
value = Boolean(undefined); // false  
value = Boolean(null); // false  
value = Boolean(user); // true  
value = Boolean({}); // true  
value = Boolean(array); // true  
value = Boolean([]); // true  

console.log(value);
console.log(typeof value);