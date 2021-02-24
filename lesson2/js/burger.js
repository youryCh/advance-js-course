//Задание 3
'use strict';

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
    _getInputEl(id) {
        return document.querySelector(`#${id}`);        
    }
    calcPrice() {
        return Number(this._getInputEl(this.size).dataset.price) + Number(this._getInputEl(this.stuff).dataset.price);
    }
    calcEnergy() {
        return Number(this._getInputEl(this.size).dataset.energy) + Number(this._getInputEl(this.stuff).dataset.energy);
    }
}