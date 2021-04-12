Vue.component('my-cart', {
    data() {
        return {
            discount: 0,
        }
    },   
    computed: {
        getTotalCost() {
            let result = 0;
            for (let item of this.$root.$refs.headerEl.$refs.cart.cartItems) {
                result += (item.quantity * item.price);
            }
            return result;
        },
        getDiscount() {
            return this.getTotalCost - (this.getTotalCost / 100 * this.discount);
        }
    },      
    template: `                             
        <div class="cart">
            <div>
                <p class="cart-block__text_lg" v-if="!$root.$refs.headerEl.$refs.cart.cartItems.length">no purchases yet</p>                
                <my-cart-item  
                    v-for="item of $root.$refs.headerEl.$refs.cart.cartItems" 
                    :key="item.id_product"
                    :my-cart-item="item"                
                    @remove="$root.$refs.headerEl.$refs.cart.remove"
                    ref="myCartItem">
                </my-cart-item>
            </div>
            <form class="address" v-if="$root.$refs.headerEl.$refs.cart.cartItems.length">
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
                        <span class="quote__price_mg">{{ discount }} %</span>
                    </h4> 
                    <h4 class="quote__price">
                        GRAND TOTAL      
                        <span class="quote__price_mg quote__price_red">{{ getDiscount }}$</span>
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