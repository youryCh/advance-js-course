Vue.component('my-cart', {
    data() {
        return {
            cartItems: [],
            discount: 0,
        }
    },
    methods: {        
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$root.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$root.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        }              
    },
    computed: {
        totalCost() {
            let result = 0;
            for (let item of this.cartItems) {
                result += (item.quantity * item.price);
            }
            return result - (result / 100 * this.discount);
        }
    },    
    mounted() {
        this.$root.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            })
    },    
    template: `                             
        <div class="cart">
            <div>
                <p class="cart-block__text" v-if="!cartItems.length">Корзина пуста</p>                
                <my-cart-item  
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :my-cart-item="item"                
                    @remove="remove"
                    ref="myCartItem">
                </my-cart-item>
            </div>
            <form class="address">
                <div class="address__form">
                    <h4 class="address__header">SHIPPING ADRESS</h4>
                    <input type="text" class="address__input" placeholder="Country">
                    <input type="text" class="address__input" placeholder="State">
                    <input type="text" class="address__input" placeholder="Postcode / Zip">
                    <a href="#" class="address__button">GET A QUOTE</a>
                </div>
                <div class="quote">
                    <h4 class="quote__sub-price">
                        DISCOUNT      
                        <span class="quote__price_mg">{{ discount }}%</span>
                    </h4> 
                    <h4 class="quote__price">
                        GRAND TOTAL      
                        <span class="quote__price_mg quote__price_red">{{ totalCost }}$</span>
                    </h4>
                    <div class="quote__devider"></div>
                    <a href="#" class="quote__button">PROCEED TO CHECKOUT</a>
                </div>
            </form>
        </div>           
    `
});

Vue.component('my-cart-item', {
    props: ['myCartItem'],
    template: `        
        <div class="cart-card">
            <img :src="myCartItem.img" class="cart-card__img" alt="image">
            <div class="cart-card__description">  
                <p class="cart-card__header">{{ myCartItem.product_name }}</p>
                <p class="cart-card__text">
                    Quantity: {{ myCartItem.quantity }}</p>
                <p class="cart-card__text">
                    Price:
                    <span class="cart-card__description_mg cart-card__description_red">{{ myCartItem.price }}$</span>
                </p>
                <p class="cart-card__text">
                    Totel: 
                    <span class="cart-card__description_mg cart-card__description_red">{{ myCartItem.quantity * myCartItem.price }}$</span>
                </p>
                <p class="full-cart-desc">{{ myCartItem.description }}</p>
            </div>
            <a href="#" class="cart-card__close-img" @click="$emit('remove', myCartItem)">
                <img src="../img/close_img2.svg" alt="close">
            </a>
        </div>           
    `
});