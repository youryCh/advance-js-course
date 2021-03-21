Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },
    template: `
        <div class="product-card">
            <a href="product.html">
                <img :src="img" class="product-card__img" alt="product">
                <h4 class="product-card__header">{{ product.product_name }}</h4>
            </a>
            <a href="#" @click="cartAPI.addProduct(product) class="product-card__button-hover">
                <img src="img/trolley-hover.svg" alt="cart">
                Add to Cart
            </a>
            <p class="product-card__text">{{ product.description }}</p>
            <p class="product-card__price">{{ product.price }}</p>
        </div>
    `
});