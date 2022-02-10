/*---------------------------
      Table of Contents
    --------------------
    
    01- Mobile Menu
    02- Sticky Navbar
    03- Module Search 
    04- Scroll Top Button
    05- Set Background-img to section 
    06- Add active class to accordions
    07- Load More Items
    08- Owl Carousel
    09- Popup Video
    10- CounterUp
    11- portfolio Filtering and Sorting
    12- timeline js
      
 ----------------------------*/

$(function () {

    "use strict";

    // Global variables
    var $win = $(window);

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })

    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $navbar = $('.sticky-navbar');
            if ($win.scrollTop() > 80) {
                $navbar.addClass('fixed-navbar');
            } else {
                $navbar.removeClass('fixed-navbar');
            }
        }
    });

    /*==========   Scroll Top Button   ==========*/
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        $(this).remove();
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__item-header').on('click', function () {
        $(this).parent('.accordion-item').addClass('opened');
        $(this).parent('.accordion-item').siblings().removeClass('opened');
    })
    $('.accordion__item-title').on('click', function (e) {
        e.preventDefault()
    });

    /*==========   Load More Items  ==========*/
    function loadMore(loadMoreBtn, loadedItem) {
        $(loadMoreBtn).on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $(loadedItem).fadeIn();
        })
    }

    loadMore('.loadMoreBlog', '.hidden-blog-item');
    loadMore('.loadMoreportfolio', '.portfolio-hidden > .portfolio-item');

    /*==========   Owl Carousel  ==========*/
    $('.carousel').each(function () {
        $(this).owlCarousel({
            nav: $(this).data('nav'),
            dots: $(this).data('dots'),
            loop: $(this).data('loop'),
            margin: $(this).data('space'),
            center: $(this).data('center'),
            dotsSpeed: $(this).data('speed'),
            autoplay: $(this).data('autoplay'),
            transitionStyle: $(this).data('transition'),
            animateOut: $(this).data('animate-out'),
            animateIn: $(this).data('animate-in'),
            autoplayTimeout: 15000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: $(this).data('slide-sm'),
                },
                700: {
                    items: $(this).data('slide-md'),
                },
                1000: {
                    items: $(this).data('slide'),
                }
            }
        });
    });

    // Owl Carousel With Thumbnails
    $('.thumbs-carousel').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        loop: true,
        margin: 0,
        autoplay: $(this).data('autoplay'),
        nav: $(this).data('nav'),
        dots: $(this).data('dots'),
        dotsSpeed: $(this).data('speed'),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*==========  Popup Video  ==========*/
    $('.popup-video').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /*==========   counterUp  ==========*/
    $(".counter").counterUp({
        delay: 10,
        time: 4000
    });

  

    /*==========   portfolio Filtering and Sorting  ==========*/
    $("#filtered-items-wrap").mixItUp();
    $(".portfolio-filter li a").on("click", function (e) {
        e.preventDefault();
    });
});

  /*==========  timeline js==========*/
//   $(() => {
//     let stickyTop = 0,
//     scrollTarget = false;
  
//     let timeline = $('.timeline__nav'),
//     items = $('li', timeline),
//     milestones = $('.timeline__section .milestone'),
//     offsetTop = parseInt(timeline.css('top'));
  
//     const TIMELINE_VALUES = {
//       start: 190,
//       step: 30 };
  
  
//     $(window).resize(function () {
//       timeline.removeClass('fixed');
  
//       stickyTop = timeline.offset().top - offsetTop;
  
//       $(window).trigger('scroll');
//     }).trigger('resize');
  
//     $(window).scroll(function () {
//       if ($(window).scrollTop() > stickyTop) {
//         timeline.addClass('fixed');
//       } else {
//         timeline.removeClass('fixed');
//       }
//     }).trigger('scroll');
  
//     items.find('span').click(function () {
//       let li = $(this).parent(),
//       index = li.index(),
//       milestone = milestones.eq(index);
  
//       if (!li.hasClass('active') && milestone.length) {
//         scrollTarget = index;
  
//         let scrollTargetTop = milestone.offset().top - 80;
  
//         $('html, body').animate({ scrollTop: scrollTargetTop }, {
//           duration: 400,
//           complete: function complete() {
//             scrollTarget = false;
//           } });
  
//       }
//     });
  
//     $(window).scroll(function () {
//       let viewLine = $(window).scrollTop() + $(window).height() / 3,
//       active = -1;
  
//       if (scrollTarget === false) {
//         milestones.each(function () {
//           if ($(this).offset().top - viewLine > 0) {
//             return false;
//           }
  
//           active++;
//         });
//       } else {
//         active = scrollTarget;
//       }
  
//       timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
  
//       items.filter('.active').removeClass('active');
  
//       items.eq(active != -1 ? active : 0).addClass('active');
//     }).trigger('scroll');
//   });