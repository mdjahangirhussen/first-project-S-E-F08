$(document).ready(function() {
    "use strict";
    //	/*==============================================
    //	    * Author        : ""
    //	    * Template Name : Artistica | HTML Template
    //	    * Version       : 1.0
    //	================================================= */
    //
    //	/*=========== TABLE OF CONTENTS ===========
    //
    //		1. Menu js
    //		2. AOS Animation js
    //		3. Parallax 
    //      4. testimonial_owl Carousel
    //		5. Owl Carousel
    //		6. grid js
    //		7. backtobutton js
    //		
    //
    //	===========================================*/

    //	 	1. Menu js
    $('.toggle_bar').on('click', function() {
        $('.logo').toggleClass('logo_white');
        $('body').toggleClass('scroll_y');
    });


    //	 	2. AOS Animation js
    AOS.init();

    //	 	4. parallax js
    (function() {
        var parallax = $('.parallaxie');
        if (parallax.length) {
            parallax.each(function() {
                var _this = $(this),
                    scale = _this.data('scale'),
                    orientation = _this.data('orientation');

                new simpleParallax(_this[0], {
                    scale: scale,
                    orientation: orientation,
                    delay: .5,
                    overflow: true,
                    transition: 'cubic-bezier(0,0,0,1)'
                });
            });
        }
    })
    ();


    //	 	4. testimonial_owl Carousel
    $('.testimonial_owl').owlCarousel({
        center: true,
        items: 1,
        nav: true,
        navElement: 'button',
        autoplay: false,
        dots: false,
        loop: true,
        margin: 30,
        smartSpeed: 700,
        navText: ["<span> <i class='icon fas fa-arrow-left'></i></span>", " <span><i class='icon fas fa-arrow-right'></i></span>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
            },
            1024: {
                items: 1,
            }

        }
    });

    //	 	5. owl Carousel

    $('.owl-carousel').owlCarousel({
        items: 3,
        nav: true,
        navElement: 'button',
        dots: false,
        loop: true,
        margin: 20,
        smartSpeed: 700,
        navText: ["<span> <i class='icon fas fa-arrow-left'></i></span>", " <span><i class='icon fas fa-arrow-right'></i></span>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
            },
            1024: {
                items: 3
            }

        }
    });
});
//	 	6. grid js
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
});
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

//button active mode
$('.button').click(function() {
    $('.button').removeClass('is-checked');
    $(this).addClass('is-checked');
});


//	 	7. backtobutton js

$(document).ready(function() {
    $(".backtobutton a").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
});