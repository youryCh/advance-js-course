Vue.component('header-el', {    
    template: `
        <header class="top-header">
            <div class="top-header__left">
                <a href="#"><img src="img/logo.svg" class="top-header__logo" alt="logo"></a>
                <button
                    class="tab-btn"
                    v-for="tab in $root.tabs"
                    :key="tab"
                    @click="$root.currentTab = tab"
                >
                    {{ tab }}
                </button>                         
            </div>
            <div class="top-header__right"> 
                <search-el ref="searchEl"></search-el>                             
                <menu-el ref="menuEl"></menu-el>
                <div class="top-header__box">
                    <a href="#" class="main-menu__img_hide"><img src="img/account.svg" class="top-header__account" alt="account"></a>
                    <cart ref="cart"></cart>                    
                </div>
            </div>
        </header>
    `
});