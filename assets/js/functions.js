// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main').addClass('sticky');
    } else {
        $('.main').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main').hasClass('open-nav')) {
        $('.main').removeClass('open-nav');
    } else {
        $('.main').addClass('open-nav');
    }
});

$('.main li a').click(function() {
    if ($('.main').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});
