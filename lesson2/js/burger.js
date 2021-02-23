//Задание 3
'use strict';
// const obj = {};

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     for (let i = 0; i < 7; i++) {        
//         event.target[i].checked ? obj[i] = true : obj[i] = false;
//     }    
// });


// function getParams() {
//     const obj  = {};
//     const form = document.querySelector('form');
//     form.addEventListener('submit', event => {
//         event.preventDefault();
//         for (let i = 0; i < 7; i++) {        
//             event.target[i].checked ? obj[i] = true : obj[i] = false;
//         }    
//     });
//     return obj;
// }


class Burger {
    
    
    constructor(size, stuff) { 
        this.size = size;
        this.stuff = stuff;       
    }
    addTopping(topping) {}
    removeTopping(topping) {}
    getToppings(topping) {} 
    getSize() {}
    getStuff() {}
    getInputEl(id) {
        return document.querySelector(`#${id}`);        
    }
    calcPrice() {
        return Number(this.getInputEl(this.size).dataset.price) + Number(this.getInputEl(this.stuff).dataset.price);
    }
    calcEnergy() {
        return Number(this.getInputEl(this.size).dataset.energy) + Number(this.getInputEl(this.stuff).dataset.energy);
    }
}

const burger1 = new Burger('big', 'cheese');
console.log(burger1.calcPrice());
console.log(burger1.calcEnergy());