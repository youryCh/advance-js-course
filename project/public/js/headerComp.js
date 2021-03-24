Vue.component('header-component', {    
    template: `
        <header class="top-header">
            <div class="top-header__left">
                <a href="index.html"><img src="img/logo.svg" class="top-header__logo" alt="logo"></a>
                <search-el></search-el>                
            </div>
            <div class="top-header__right">                             
                <menu-component></menu-component>
                <div class="top-header__box">
                    <a href="registration.html" class="main-menu__img_hide"><img src="img/account.svg" class="top-header__account" alt="account"></a>
                    <cart ref="cart"></cart>                    
                </div>
            </div>
        </header>
    `
});