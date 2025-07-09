'use strict';

// console.log(this)


function getPrice(currency = 'USD') {
    console.log(this.price + currency);
}
function getName(){
    console.log(this.name + ' ' + 'найден')
}
let prod1 = {
    name: 'intel',
    price: 130,
    // getThis,
    getPrice,
    getName
}

prod1.getPrice()
prod1.getName()