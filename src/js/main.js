$(document).ready(function(){

    $('.sandwich').click(function() {
        $('.sandwich').toggleClass('active');
    });

    if ($(window).scrollTop()< 10) {
        $('#navigation').removeClass('scrolled');
    }
    else{
        $('#navigation').addClass('scrolled');
    }

    $(window).scroll(function() {
        if ($(window).scrollTop()< 10){
            $('#navigation').removeClass('scrolled');
        }
        else{
            $('#navigation').addClass('scrolled');
        }
    });

    $('a.scrollto').click(function(e){
        e.preventDefault();
        // alert("It works!")
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
            function(){window.location.hash = target;});

        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    $('#skills').waypoint(function() {
        $('.chart').each(function() {
        $(this).easyPieChart({
                size: 130,
                animate: 2000,
                lineCap:'butt',
                scaleColor: false,
                trackColor: 'transparent',
                barColor: '#00CCCB',
                lineWidth: 5,
                easing:'easeOutQuad'
            });
        });
    }, {offset:'80%'});

});