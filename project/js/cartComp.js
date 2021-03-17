Vue.component('cart-el', {
    data() {
        return {
            cartItems: [],
            showCart: false
        }
    },
    methods: {

    },
    template: `
        <div>
            <a href="#" class="main-menu__img_hide" @click="showCart = !showCart">
                <img src="img/trolley.svg" class="top-header__cart" alt="trolley">
            </a>            
            <div class="cart-block" v-show="showCart">
                <p class="cart-block__text" v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
            </div>
        </div>    
    `
});