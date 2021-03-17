Vue.component('catalog', {
    data() {
        return {
            products: [
                {
                    "id_product": 124,
                    "product_name": "ELLERY X M'O CAPSULE",
                    "price": "$52.00",
                    "img": "img/product_img1.png",
                    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
                  }
            ],
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
        this.$parent.getJson('/api/prdoducts')
            .then(data => {
                for (let element of data) {
                    this.products.push(element);
                    this.filtered.push(element);
                }
            })
    },
    template: `
        <div class="main-catalog__product center">
            <product v-for="item of products" :img="item.img" :key="item.id_product" :product="item"></product>
        </div>
    `
});