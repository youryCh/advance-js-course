Vue.component('catalog', {
    data() {
        return {
            products: [],
            filtered: [],
            //imgCatalog: '',
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
                //console.log(data.valueOf());
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    },
    template: `
        <div class="main-catalog__product center">
            <product v-for="item of products" :img="item.img" :key="item.id_product" :product="item"></product>
        </div>
    `
});