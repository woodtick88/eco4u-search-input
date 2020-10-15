$(function() {

    $('.search-close .search-button-open').click(function() {
        $('.search-close-wrapper').hide(300);
        $('.search-open-wrapper').show(300);
    });

    $('.search-open .search-button-close').click(function() {        
        $('.search-open-wrapper').hide(300);
        $('.search-close-wrapper').show(300);
    });

});