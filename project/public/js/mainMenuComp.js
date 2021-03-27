Vue.component('menu-el', {
    data() {
        return {
            show: false,
            man_items: [
                'Accessories',
                'Bags',
                'Denim',
                'T-Shirts'
            ],
            woman_items: [
                'Accessories',
                'Jackets & Coats',
                'Polos',
                'T-Shirts',
                'Shirts'
            ],
            kids_items: [
                'Accessories',
                'Jackets & Coats',
                'Polos',
                'T-Shirts',
                'Shirts',
                'Bags'
            ]           
        };
    },    
    template: `
        <div>
            <img src="img/menu.svg" class="top-header__main-menu" alt="menu" @click="show = !show" key="menu">
            <nav class="main_menu" v-if="show">
                <div class="top-header__box top-header__box_hide">
                    <a href="registration.html" class="main-menu__img_hide"><img src="img/account.svg" class="top-header__account" alt="account"></a>
                    <a href="cart.html" class="main-menu__img_hide"><img src="img/trolley.svg" class="top-header__cart" alt="trolley"></a>
                </div>
                <label for="main_menu" class="close_icon">
                    <img src="img/close_img.svg" @click="show = !show" alt="cross">
                </label>
                <h5 class="main_menu__header">MENU</h5>                
                <a href="catalog.html" class="main_menu__section">MAN</a>
                <a href="catalog.html" class="main_menu__item" v-for="item in man_items">{{item}}</a>
                <a href="catalog.html" class="main_menu__section">WOMAN</a> 
                <a href="catalog.html" class="main_menu__item" v-for="item in woman_items">{{item}}</a>                
                <a href="catalog.html" class="main_menu__section">KIDS</a>
                <a href="catalog.html" class="main_menu__item" v-for="item in kids_items">{{item}}</a>                
            </nav>
        </div>
    `
});