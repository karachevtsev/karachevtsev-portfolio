$(document).ready(function() {

    // Sandwich toggle
    $('.sandwich').click(function() {
        $('.sandwich').toggleClass('active');
    });

    // Navigation Functions
    if ($(window).scrollTop()< 10) {
        $('#main-nav').removeClass('scrolled');
    }
    else{
        $('#main-nav').addClass('scrolled');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop()< 10) {
            $('#navigation').removeClass('scrolled');
        }
        else{
            $('#navigation').addClass('scrolled');
        }
    });

    $('a.scrollto').click(function(e) {
        e.preventDefault();
        var target =$(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
            function(){window.location.hash = target;});

        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });


});