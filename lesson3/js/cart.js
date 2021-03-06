'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class BasketList {
    #goods;
    #allProducts;
  
    constructor(container = '.basket-products') {
      this.container = container;
      this.#goods = [];
      this.#allProducts = [];
  
      this.getBasket()
        .then((data) => {
          this.#goods = [...data.contents];
          this.#render();
        });
    }
  
    goodsTotalPrice() {
      return this.#goods.reduce((sum, { price }) => sum + price, 0);
    }  
    
    getBasket() {
      return fetch(`${API}/getBasket.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
    }
  
    #render() {
      const block = document.querySelector(this.container);
  
      this.#goods.forEach((product) => {
        const basketObject = new BasketItem(product);
        this.#allProducts.push(basketObject);
        block.insertAdjacentHTML('beforeend', basketObject.render());
      });
    }

    addToBasket() {}
    deleteFromBasket() {}
}
  
class BasketItem {
    constructor(product, img='https://placehold.it/200x150') {
      this.title = product.product_name;
      this.price = product.price;
      this.id = product.id_product;
      this.img = img;
    }
  
    render() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p> 
                    <button class="buy-btn">Удалить</button>                   
                </div>
            </div>`;
    }
}
  
const basketList = new BasketList();  