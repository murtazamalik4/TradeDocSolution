(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCTPostCarouselHandler = function($scope, $) {
        setTimeout(function() {
            var breakpoints = elementorFrontend.config.breakpoints;
            var carousel = $scope.find(".ct-slick-carousel");
            var data = carousel.data();
            var slickOptions = {
                slidesToShow: data.colxl,
                slidesToScroll: data.slidestoscroll,
                autoplay: true === data.autoplay,
                autoplaySpeed: data.autoplayspeed,
                infinite: true === data.infinite,
                pauseOnHover: true === data.pauseonhover,
                speed: data.speed,
                arrows: true === data.arrows,
                dots: true === data.dots,
                rtl: true === data.dir,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: data.collg
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: data.colmd
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: data.colsm
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: data.colxs,
                            slidesToScroll: data.colxs,
                        }
                    },
                ]
            };
            var nav_for = $scope.find(".ct-slick-nav");
            if (nav_for.length > 0) {
                slickOptions.asNavFor = nav_for;
            }
            if (typeof carousel.attr('data-centerMode') !== 'undefined') {
                slickOptions.centerMode = carousel.attr('data-centerMode') == 'true' ? true : false;
            }
            if (typeof carousel.attr('data-fade') !== 'undefined') {
                slickOptions.fade = carousel.attr('data-fade') == 'true' ? true : false;
            }
            carousel.slick(slickOptions);

            $('.ct-nav-carousel').parents('.elementor-section').addClass('hide-nav');
            $('.ct-nav-carousel .nav-prev').on('click', function() {
                $(this).parents('.elementor-element').find('.slick-prev').trigger('click');
            });
            $('.ct-nav-carousel .nav-next').on('click', function() {
                $(this).parents('.elementor-element').find('.slick-next').trigger('click');
            });

            $('.arrow-focus1 .ct-nav-carousel').parents('.site-content').find('.carousel-focus1').addClass('hide-nav');
            $('.arrow-focus1 .ct-nav-carousel .nav-prev').on('click', function() {
                $(this).parents('.site-content').find('.carousel-focus1 .slick-prev').trigger('click');
            });
            $('.arrow-focus1 .ct-nav-carousel .nav-next').on('click', function() {
                $(this).parents('.site-content').find('.carousel-focus1 .slick-next').trigger('click');
            });

            $('.ct-nav-slick').parent().addClass('hide-nav');
            $('.ct-nav-slick .nav-prev').on('click', function() {
                $(this).parents('.ct-slick-slider').find('.slick-prev').trigger('click');
            });
            $('.ct-nav-slick .nav-next').on('click', function() {
                $(this).parents('.ct-slick-slider').find('.slick-next').trigger('click');
            });


        }, 300);
    };

    $('.ct-slick-slider').each(function() {
        var slider_main = $(this).find('.ct-slick-carousel');
        var slider_nav = $(this).find('.ct-slick-nav');
        $(slider_nav).slick({
            slidesToShow: parseInt(slider_nav.attr('data-nav')),
            slidesToScroll: 1,
            asNavFor: slider_main,
            dots: false,
            arrows: false,
            centerMode: true,
            infinite: true,
            focusOnSelect: true,
            autoplay: false,
            autoplaySpeed: 8000,
            speed: 800,
            rtl: true === slider_nav.data('dir'),
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    });

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_blog_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_service_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_portfolio_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_gallery_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_testimonial_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_team_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_fancybox_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_clients_list.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_case_study_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_fancy_box_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_offer_carousel.default', WidgetCTPostCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_courses_carousel.default', WidgetCTPostCarouselHandler);
    });
})(jQuery);