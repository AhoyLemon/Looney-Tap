/*jshint -W117 */

$(document).ready(function() {

    // Stuff that happens on page load.
    $('.image-list li').each(function() {
        var b = $(this).attr('data-cartoon');
        $(this).children('figure').css('background-image', 'url(screenshots/'+b+'.jpg)');
    });
    
    
    // Clicks
    $('header > dl dt').click(function() {
        $(this).next('dd').toggle(500);
    });
});