// 'use strict'

let value;

// === NUMBER
// value = 13;
// value = -13;
// value = 13.13;
// value = -13.13;
// value = Infinity;
// value = -Infinity;

// value = 15 + 13;
// value = 15 - 13;
// value = 15 * 13;
// value = 15 / 13;
// value = 15 % 2;// sonni 2 ga bo'lganda qoldig'ini aniqlash
// value = 17 % 2;
// value = 15 ** 13; // darajaga ko'paytirish
// value = 2 ** 8;
// value = 64 ** (1/2); // 64 ni kvadrat ildizga qo'yish


// value = 10;
// value = value + 3;
// value = value - 3;
// value = value * 3;
// value = value / 3;

// value += 3;
// value -= 3;
// value *= 3;
// value /= 3;

// value /= 3; //ikki maarta takroriy bo'lish
// value /= 3;

// value = 3 + '3';// javob '33'
// value = 6 - '3'; // javob 3
// value = 8 * '4'; // javob 32
// value = '5' * '4'; // javob 30
// value = 18 / '2'; // javob 9

// value = 5 * '2a'; // NaN
// value = '5' * '6'; // 30
// // value += 3; // 33


/// === inkrement va dikrement

// value = 10;

// value++;// inkriment o'zgaruvchini 1 ga oshirish (consol.log komandasiga ishlamaydi)
// value--; // dikriment o'zgaruvchini 1 ga kamaytirish(consol.log komandasiga ishlamaydi)
// ++value; 1ni qo'shib beradi (consol.log komandasiga ishlaydi)
// --value; 1ni ayirib beradi (consol.log komandasiga ishlaydi)

// == To'g'ri ishlaydi
// console.log(++value)
// console.log(--value)

//== Xato ishlamaydi
// console.log(value++)
// console.log(value--)

/**
 * Agar inkrimet/dikriment o'zgaruvchi turgan bo'lsa u shu zahoti ishlab beradi
 * Agar inkriment/dikriment o'zgaruvchi keyin turgan bo'lsa u shu protsessagi barcha amallar tugalllangandan keyin ishlab beradi
 */

// == Kasr sonlar bilan ishlash
// value = 3.3 * 3.3;
// value = (33 * 33) / 100;
// value = (3.3 * 3.3).toFixed(2); // bu yerda toFiced komandasi butn sonni qoldini yaxlidalb berishi mumkin agar 0 qoysak butun sonni uzini beradi.
// value = +(3.3 * 3.3).toFixed(2);
// value = Number((3.3 * 3.3).toFixed(2));
// value = parseFloat((3.3 * 3.3).toFixed(2));

// Object Math
value = Math;
value = Math.PI;
value = Math.E;

value = Math.random(); // 0 - 1
value = Math.random() * 10; 
value = parseInt(Math.random() * 10); // 0 dan 9 gacha 
value = +(Math.random() * 10).toFixed(0); // 0 dan 10gacha


value = Math.round(2.3); // 2 bu yaxlitlaydi
value = Math.round(2.5); // 3
value = Math.round(2.7); // 3

value = Math.ceil(2.1); // har doim katta tomonga yaxlitlaydi == 3
value = Math.ceil(-2.1); // har doim katta tomonga yaxlitlaydi == -3


value = Math.floor(2.999); // har doim kichik tomonga yaxlitlaydi == 2
value = Math.floor(-2.999); // har doim kichik tomonga yaxlitlaydi == -2

value = Math.max(16,15,5,78,13); // berilgan sonlardan eng kattasini oladi ==  78

value = Math.min(16,15,5,78,13); // berilgan sonlardan eng kichikini oladi == 5


console.log(value)