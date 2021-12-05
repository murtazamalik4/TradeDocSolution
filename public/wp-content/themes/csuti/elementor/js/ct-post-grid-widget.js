(function($) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetPostMasonryHandler = function($scope, $) {
        setTimeout(function() {
            $('.ct-grid-masonry').imagesLoaded(function() {
                $.sep_grid_refresh();
            });
        }, 300);
    };

    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_blog_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_team_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_service_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_portfolio_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_career_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_fancy_box_grid.default', WidgetPostMasonryHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/ct_case_study_grid.default', WidgetPostMasonryHandler);
    });
})(jQuery);