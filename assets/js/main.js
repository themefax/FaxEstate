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



    //======destination slider======
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


    //======category slider======
    $('.category_pro_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-long-arrow-left prevArrow"></i>',

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


    //====== testimonial slider ======= 
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
    });


    //======category slider======
    $('.latest_pro_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


    //======featured listingr slider======
    $('.featured_listing_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-long-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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


    //======testimonial 2 slider======
    $('.testimonial_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: '<i class="fas fa-long-arrow-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-long-arrow-left prevArrow"></i>',
    });


    //======WOW JS========
    new WOW().init();


    //======STICKY SIDEBAR======= 
    $(".sticky_sidebar").stickit({
        top: 90,
    })


    //=====LOGIN PASSWORD======== 
    $(".show_password").on("click", function () {
        $(".show_password").toggleClass("show");
    });

    $(".show_confirm_password").on("click", function () {
        $(".show_confirm_password").toggleClass("show");
    });



});
