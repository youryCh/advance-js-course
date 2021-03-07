const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/addToBasket.json',
        imgCatalog: 'https://placehold.it/200x150',
        imgCart: 'https://placehold.it/50x100',
        products: [],
        searchLine: '',
        filtered: [],
        isVisibleCart: true,
        cartProducts: [],
        show: true,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            this.getJson(`${API + this.cartUrl}`)              
                .then(data => {
                    if (data.result === 1){
                        let productId = product.id_product;
                        let find = this.products.find(product => product.id_product === productId);
                        if (find){
                          find.quantity++;
                          this.cartProducts.push(find);
                          this.show = false
                        } else {
                          let product = {
                            id_product: productId,
                            price: +product.dataset['price'],
                            product_name: product.dataset['name'],
                            quantity: 1
                          };                          
                          this.cartProducts = [product];                         
                        }
                    } else {
                        alert('Error');
                    }
                })
        },    
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(product => {
                if (!this.filtered.includes(product)) {
                    product.classList.add('invisible');
                } else {
                    product.classList.remove('invisible');
                }
            })  
        },
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
    },
});