Vue.component('footer-el', {
    template: `
        <footer>
            <div class="footer-top">
                <div class="footer-top__container center">
                    <div class="footer-top__item">
                        <img src="img/footer_img1.svg" alt="delivery">
                        <h3 class="footer-top__header">Free Delivery</h3>
                        <p class="footer-top__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div class="footer-top__item">
                        <img src="img/footer_img2.svg" alt="sales">
                        <h3 class="footer-top__header">Sales & discounts</h3>
                        <p class="footer-top__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div class="footer-top__item">
                        <img src="img/footer_img3.svg" alt="quality">
                        <h3 class="footer-top__header">Quality assurance</h3>
                        <p class="footer-top__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
            <div class="footer-subscribe center">
                <figure class="footer-subscribe__info">
                    <img src="img/subscribe_img.png" alt="subscribe" class="footer-subscribe__img">
                    <figcaption class="footer-subscribe__text">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                    </figcaption>
                </figure>
                <div class="subscribe-form">
                    <h3 class="subscribe-form__header">SUBSCRIBE</h3>
                    <p class="subscribe-form__text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <form class="subscribe-form__form">
                        <input type="email" class="subscribe-form__input" placeholder="Enter Your Email">
                        <button type="submit" class="subscribe-form__button">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom__container center">
                    <div class="footer-bottom__copyright">&copy;  2021  Brand  All Rights Reserved.</div>
                    <div class="footer-bottom__social">                    
                        <a href="#">
                            <div class="footer-bottom__icon">
                                <img src="img/facebook_img.svg" class="footer-bottom__icon_hover" alt="facebook">
                            </div>
                        </a>
                        <a href="#">
                            <div class="footer-bottom__icon footer-bottom__instagram">
                                <img src="img/instagram_img.svg" class="footer-bottom__icon_hover footer-bottom__instagram_invert" alt="instagram">
                            </div>
                        </a>
                        <a href="#">
                            <div class="footer-bottom__icon">
                                <img src="img/pinterest_img.svg" class="footer-bottom__icon_hover" alt="pinterest">
                            </div>
                        </a>
                        <a href="#">
                            <div class="footer-bottom__icon">
                                <img src="img/twitter_img.svg" class="footer-bottom__icon_hover" alt="twitter">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `
});