Vue.component('search-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
        <form @submit.prevent="$parent.products.filter(userSearch)">
            <button type="submit" class="btn-search">
                <img src="img/search.svg" class="top-header__search" alt="search">
            </button>
            <input type="text" class="search-field" v-model="userSearch">            
        </form>
    `
});