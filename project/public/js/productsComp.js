Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: []            
        }
    },
    methods: {
        filter(userSearch) {
            let regExp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter((el) => {
                regExp.test(el.product_name);
            });
        }
    },
    mounted() {
        this.$parent.getJson('/api/products')
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })  
    },
    template: `
        <div class="main-catalog__product center">
            <product ref="product" v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    data() {
        return {
            cartAPI: this.$root.$refs.headerEl.$refs.cart
        };
    },    
    template: `
        <div class="product-card">            
            <img :src="product.img" class="product-card__img" alt="product">
            <h4 class="product-card__header">{{ product.product_name }}</h4>            
            <a href="#" @click="cartAPI.addProduct(product)" class="product-card__button-hover">
                <img src="img/trolley-hover.svg" alt="cart">
                Add to Cart
            </a>
            <p class="product-card__text">{{ product.description }}</p>
            <p class="product-card__price">{{ product.price }} $</p>
        </div>
    `
});