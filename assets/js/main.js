$(function () {

    "use strict";


    //=======menu fix js====== 
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    //=======select2====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });



    //======select js=======
    $('.select_js').niceSelect();



    //======category slider======
    $('.destination_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======marquee js=======
    $('.marquee_animi').marquee({
        speed: 50,
        gap: 50,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    //======= banner search ========
    $(".adv_search_icon").on("click", function () {
        $(".adv_search_area").addClass("show_search");
    });

    $(".adv_search_close").on("click", function () {
        $(".adv_search_area").removeClass("show_search");
    });



});
