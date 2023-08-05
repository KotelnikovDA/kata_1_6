import Swiper from './swiper-bundle-min';

function swiperFunc() {

    const breakpoint = window.matchMedia('(min-width:768px)');

    let mySwiper;

    const breakpointChecker = function () {

        if (breakpoint.matches === true) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true);
            return;
        }

        if (breakpoint.matches === false) {
            return enableSwiper();
        }

    };

    const enableSwiper = function () {

        mySwiper = new Swiper(

            '.swiper-container', {

            spaceBetween: 16,

            slidesPerView: 'auto',

            grabCursor: true,

            pagination: {

                el: '.swiper-pagination',

                clickable: true,

            },

        }
        );

    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();

}

swiperFunc()