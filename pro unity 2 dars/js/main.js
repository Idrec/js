// 
// console.log('hello');
// console.log(12);
// console.log('12');



/**Malumot turlari 2 guruhga bo'linadi:
 * Primitivlar
 * Obyektlar
 */

/**Primitivlar
 * string
 * number
 * bolean
 * undefined
 * null
 * symbol()
 */

/**Obyektlar (reference type - ssilka bo'yicha o'tuvchi)
 * object
 * array
 * function
 * object date
 */

// string
let str;
str = 'hello';
str = "world";
str = `hello world`;
str = '13';

// console.log(str);
// console.log(typeof str);


//number
let num;
num = 13;
num = -13;
num = 4.14;
num = -1.23;
num = Infinity;
num = -Infinity;
num = 3 * 3 //9;
num = 3 * 'a' //NaN = Not a number

// console.log(num)
// console.log('malumot turi: ', typeof num);

// boolean

let bool;
bool = true;
bool = false;

// console.log(bool);
// console.log('Malumot turi:',typeof bool);

//undefined

// undefined - agar uzgaruvchi e`lon qilinisa, lekin unga qiymat o'rnatilmasa uning standart qiymati undefined bo'ladi; 

let exapmle;


// console.log(example);
// console.log('Malumot turi:',typeof example);

//null

//null - o'zgaruvchi yoki qandaydir qoplamning qiymati bo'shliq ekanligini atayin namoyon qilish uchun ishlatiladi

exapmle = null

// console.log(exapmle);
// console.log('Malumot turi:',typeof exapmle);


// object
let user1 = {
    firstname:'Behzod',
    lastname: 'Bakhshilloev',
    age: 25,
};

let user2 = {
    firstname:'oktam',
    lastname: 'narziyev',
    age: null,
};
let user3 = {
    firstname:'ali',
    lastname: 'null',
    age: 19,
};

// console.table(user1);    // table - yangili consolo ishlatilishi
// console.log('Malumot turi:',typeof user1);

// console.log(user1.firstname);
// console.log(user2.lastname);
// console.log(user3.age);

//array
let arr = ['hello', false, 123];

// console.table(arr);
// console.log('Malumot turi:',typeof arr);

console.log(arr[2]);
console.log(arr[0]);

let users = [user1, user2, user3, ['a', 'b', 'c'], 'hello'];
