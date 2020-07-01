$(document).ready(function(){

    let _this = {
        
        $dom: {
            burgerMenu: $(".burger-menu"),
            hiddenNav: $(".hidden-nav"),
            closeBtn: $(".close"),
            navInner: $('.navbar__inner'),
            productsSlider: $('.js-products-slider'),
            btn: $('.js-btn'),
            productsInner: $('.products__inner'),
            productsInner1: $('.products__inner1'),
            productsInner2: $('.products__inner2'),
            productsInner3: $('.products__inner3'),
            productsInner4: $('.products__inner4')
        },
        init: function(){
            _this.events();
            _this.slide();
            // _this.showProducts();
        },
        events: function(){
            _this.modalToggle();
            _this.search();
        },
        /**
         * Methods
         */
        modalToggle: function() {
            _this.$dom.burgerMenu.on( 'click', _this.showNav);
            _this.$dom.burgerMenu.one( 'click', _this.generateNav);
            _this.$dom.closeBtn.on( 'click', _this.hideNav);
        },
        showNav: function() {
            _this.$dom.hiddenNav.addClass('navbar-active');
        },
        hideNav: function() {
            _this.$dom.hiddenNav.removeClass('navbar-active');
        },
        generateNav: function() {
            var innerUl = $('.footer__list--first').html();            
            _this.$dom.navInner.append(innerUl);
        },

        slide: function() {
            $(_this.$dom.productsSlider).slick({
                dots: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                fade: true,
                arrows: true,
                cssEase: 'linear',
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
            });
        },
        search: function() {
            _this.$dom.btn.on('click', _this.showProducts);
        },
        
        showProducts: function() {
           
            _this.$dom.btn.removeClass('active-btn');
            $(this).addClass('active-btn');

            _this.$dom.productsInner.removeClass('show-products');
            
            let navTab = $(this).data('tab');

            _this.$dom.productsInner.each(function() {
                if(navTab == $(this).data('tab')) {

                    _this.$dom.productsInner.removeClass('show-products');                        
                    $(this).addClass('show-products');
                    _this.$dom.productsSlider.slick('setPosition');
                }
            })
        }, 
    };

    _this.init();

});

      