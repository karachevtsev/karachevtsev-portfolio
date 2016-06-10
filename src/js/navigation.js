$(document).ready(function(){

    // Sandwich toggle
    $('.sandwich').click(function() {
        $('.sandwich').toggleClass('active');
    });

    // Change Navigation State on Scroll
    $(window).scroll(function() {
        if ($(window).scrollTop()< 10) {
            $('#navigation').removeClass('scrolled');
        }
        else {
            $('#navigation').addClass('scrolled');
        }
    });

    // Change Active State on Scroll and Click
    $(window).on('scroll', function () {
        var sections = $('section'),
            nav = $('nav'),
            navHeight = nav.outerHeight();
            curPosition = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - navHeight,
                bottom = top + $(this).outerHeight();

            if (curPosition >= top && curPosition <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }

            if ($(window).scrollTop()< 10) {
                $('a').removeClass('active');
            }

        });

        return false;
    })

    // Smooth scroll
    $('a.scrollto').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');

        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
            function(){window.location.hash = target;});

        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

        return false;
    });


});