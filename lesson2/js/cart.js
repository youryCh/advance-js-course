//Урок 2
//Задание 1

class Cart {
    constructor(productName, price, quantity) {
        this.productName = productName; //название товара
        this.price = price; //цена
        this.quantity = quantity; //количество
    }
    totalPrice() {} //возвращает общую стоимость покупки
    removeProduct() {} //удаляет товар
    makeDiscount() {} //возвращает цену с учётом скидки
    makePurchase() {} //делает последнее оформление с оплатой пр.  
}

class CartElement extends Cart {
    constructor(productName, price, quantity) {
        super(productName, price, quantity)
    }
    addQuantity() {} //добавляет количество товара
    removeQuantity() {} //уменьшает количество
} 