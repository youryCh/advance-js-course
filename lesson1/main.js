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

const renderProduct = (title, price, img = 'https://placehold.it/150x100') => {
    return `<div class="card">
            <img src="${img}" class="card__img"></img>
            <h3 class="card__title">${title}</h3>
            <p class="card__price">${price}</p>
            <button class="btn">Добавить в корзину</button>
        </div>`;
}

renderProducts(products);