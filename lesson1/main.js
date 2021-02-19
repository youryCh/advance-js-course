'use strict';

const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
];

const renderProducts = list => {
    const productsEl = document.querySelector('.products');
    list.forEach(product => {
        productsEl.insertAdjacentHTML('beforeend', renderProduct(product.title, product.price));
    });
}

const renderProduct = (title, price) => {
        return `<div class="card">
            <h3 class="card-title">${title}</h3>
            <p class="card-price">${price}</p>
            <button class="btn">Добавить в корзину</button>
        </div>`;
    }

renderProducts(products);

// Вариант
// const renderProducts = list => {
//     const productsEl = document.querySelector('.products');
//     const innerEl = createList(list).reduce((result, item) => `${result} ${item}`);
//     productsEl.innerHTML = innerEl;
// }

// const createList = list => {
//     return list.map(product => renderProduct(product.title, product.price));
// }

// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//         <h3>${title}</h3>
//         <p>${price}</p>
//         <button class="by-btn">Добавить в корзину</button>
//     </div>`;
// }