Vue.component('full-cart', {
    data() {
        return {
            cartItems: [],         
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
        },    
        filter(userSearch) {
            let regExp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter((el) => {
                regExp.test(el.product_name);
            });
        },
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
        <div>                      
            <div class="full-cart">
                <p class="cart-block__text" v-if="!cartItems.length">Корзина пуста</p>                
                <cart-item class="full-cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item"                
                @remove="remove"
                ref="cartItem">
                </cart-item>
            </div>
        </div>    
    `    
});