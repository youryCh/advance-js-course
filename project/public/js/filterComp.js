Vue.component('search-el', {
    data() {
        return {
            userSearch: '',                
        }
    },     
    template: `
        <form class="search-form_mg" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <button type="submit" class="btn-search">
                <img src="img/search.svg" class="top-header__search" alt="search">
            </button>
            <input type="text" class="search-field" v-model="userSearch">            
        </form>
    `
});