'use strict'

// function firstFunc(arr, callback) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         result += callback(arr[i]);
//     }
//     return 'New value: ' + result;
// }




















/**
 * 1) Shunday funksiya yaratingki u 2 ta parametrga(a va b) ega bo'lsin. Ushbu parametrlarga butun son kelib tushadi(a < b). Funksiya ushbu parametr qiymatlaridan a dan b gacha bo'lgan sonlardan massiv yasab qaytarsin. 
    Misol:
    a = 1
    b = 4
    --> [1, 2, 3, 4]
 * 
 * 2) Salom beruvchi funksiya yarating, funksiyaning 2 ta parametri bo'lsin. Bu funksiyaning parametrlarga 2 ta nom kiradi va nomga binoan salom beradi
    Misol:
    Agar:	                            Natija:
    ikkala nom bir xil bo'lganda 	    'Salom boss'
    aksincha	                         'Salom, mehmon'
 * 
 * 3) Parametriga kelib tushgan sonning kvadratini qaytaruvchi funksiya yarating
 * Misol: 2 => 4, 3 => 9
 * 
 * 4) Funksiya parametriga sondan tashkil topgan tasodifiy massiv qabul qiladi va sonlarni ko'paytmasini qaytaradi. 
 * Misol: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 * 
 * 5) Funksiya parametriga massiv qabul qiladi va u parametrni teskarisini qaytarsin
    Misol (kirish -> chiqish)
    * [1, 2, 3, 4]  -> [4, 3, 2, 1]
    * [9, 2, 0, 7]  -> [7, 0, 2, 9]
 * 
 * 6) Matn so'zlaridan massiv hosil qiluvchi funksiya yarating.

    Misol (kirish ==> chiqish):
    "Robin Singh" ==> ["Robin", "Singh"]

    "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 * 
 * 
 * 7) Funksiya parametriga son qabul qiladi, agar u son juft bo'lsa u sonni 8 ga ko'paytirib qaytaradi aksincha 9 ga
 * 
 * 8) Funksiya 2 ta matn ko'rinishida bo'lgan son qabul qiladi va ikkala sonni yig;indisini matn ko'rinishida qaytaradi:

    Misol: ( kirish1, kirish2 --> chiqish )

    "4",  "5" --> "9"
    "34", "5" --> "39"
    "", "" --> "0"
    "2", "" --> "2"
    "-5", "3" --> "-2"
 * 
 * 9) Funskiya parametriga qabul qilgan nomni "initsiallarga" ajratsin. Bu deganiki 2 ism va familiyani birinchi harflari nuqta bilan yozilib qoyilsin

    Misol:

    Sam Harris => S.H
    patrick feeney => P.F
 * 
 * 10) Funksiya yarating agar ushbu funksiyaning parametriga true kelib tushsa 'Yes' matnini qaytarsin aksincha agar false kelib tushsa 'No' qaytarsin.
 */