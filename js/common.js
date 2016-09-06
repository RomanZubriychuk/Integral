$(document).ready(function() {

    // OWL CAROUSEL
    $('.carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        lazyLoad: true,
        navSpeed: 1000
    });

    $('.carousel-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 2,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },

            1000:{
                items:2,
            },
            1800:{
                items:3,
            }
        }
    });

    $('.carousel-3').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 3,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            660:{
                items:2,
            },
            1000:{
                items:3,
            },
            1800:{
                items:4,
            }
        }

    });

    $('.carousel-4').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            660:{
                items:2,
            },
            1000:{
                items:3,
            },
            1300:{
                items:4,
            }
        }
    });

    $('.carousel-5').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        navSpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            660:{
                items:2,
            },
            1000:{
                items:3,
            },
            1300:{
                items:4,
            }
        }
    });

    //Change country img
    $('#language').change(function(){
        $('#languageimg img').attr('src', $('#language option:selected').attr('data-path'));
    });

    //Video front page
    var customSrc = $('.video-wrap iframe').attr('src');
    $('#home-video').click(function(){
        $('.video-wrap iframe').fadeIn(3000);
        $('.video-wrap iframe').attr('src',customSrc + '?rel=0&autoplay=1')
    });

    //Slimmenu
    $('.menu-top').slimmenu(
        {
            resizeWidth: '900',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: '',
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


    $('.nav-tabs').scrollingTabs();
});
