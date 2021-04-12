Vue.component('home', {
    template: `
        <div>
            <div class="promo">
                <div class="promo__left">
                    <img src="img/promo.png" class="promo__img" alt="promo">
                </div>
                <div class="promo__right">
                    <div class="promo__content">
                        <h1 class="promo__header">THE BRAND</h1>
                        <p class="promo__text">OF LUXERIOUS <span>FASHION</span></p>
                    </div>
                </div>
            </div>
            <div>
                <div class="catalog">
                    <div class="catalog__item">
                        <img src="img/for_women.png" class="catalog__img" alt="for women">
                        <div class="catalog__content">
                            <h3 class="catalog__header">30% OFF</h3>
                            <p class="catalog__text">FOR WOMEN</p>
                        </div>
                    </div>
                    <div class="catalog__item catalog__item_margin">
                        <img src="img/for_men.png" class="catalog__img" alt="for men">
                        <div class="catalog__content">
                            <h3 class="catalog__header">HOT DEAL</h3>
                            <p class="catalog__text">FOR MEN</p>
                        </div>
                    </div>
                    <div class="catalog__item">
                        <img src="img/for_kids.png" class="catalog__img" alt="for kids">
                        <div class="catalog__content">
                            <h3 class="catalog__header">NEW ARRIVALS</h3>
                            <p class="catalog__text">FOR KIDS</p>
                        </div>
                    </div>
                </div>
                <div class="catalog__bottom">
                    <div class="catalog__item catalog__item_height">
                        <img src="img/accesories.png" class="catalog__img catalog__img_height" alt="accesories">
                        <div class="catalog__content">
                            <h3 class="catalog__header">LUXIROUS & TRENDY</h3>
                            <p class="catalog__text">ACCESORIES</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    `
});