$(document).ready(function() {

    //Animate CSS + WayPoints javaScript
    //Example: $(".element").animated("zoomInUp");
    $.fn.animated = function(inEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: "85%"
        });
    };

    $(window).load(function() {
        // Header Animations Start
        $('.header img').animated('zoomIn');
        $('.header h1').animated('fadeInDownBig');
        $('.header p').animated('fadeInLeftBig');
        $('.header span').animated('fadeInRightBig');
        $('.header .social').animated('fadeInUpBig');
        // Header Animations End

        // Hide about-text element on page load
        $('.about-text').addClass('animated');
        $('.about-text').css('opacity', '0');

        // Hide service-item element on page load
        $('.service-item').addClass('animated');
        $('.service-item').css('opacity', '0');

        // Hide portfolio-item element on page load
        $('.portfolio-item').addClass('animated');
        $('.portfolio-item').css('opacity', '0');

    });

    // Animations for all section titles
    $('.section-title').animated('fadeInDown');
    $('.animate-btn').animated('fadeInUp');

    // Services Items Animations Start
    $('.services').waypoint(function() {
        $('.service-item').each(function(index) {
            var item = $(this);
            setInterval(function() {
                item.addClass('zoomIn').css('opacity', '1');
            }, 400*index);
        });
    }, {offset:'70%'});
    // Services Items Animations End

    // Latest Works Animations End
    $('.work-info-left').animated('zoomIn');
    $('.work-img-right').animated('fadeInUp');
    $('.devider').animated('fadeInUp');
    $('.work-info-right').animated('zoomIn');
    $('.work-img-left').animated('fadeInUp');
    // Latest Works Animations End

    // Call To Action Animations Start
    $('.action-text').animated('zoomIn');
    // Call To Action Animations End

    // Profile Animations Start
    $('.about').waypoint(function() {
        $('.about-text').each(function(index) {
            var item = $(this);
            setInterval(function() {
                item.addClass('zoomIn').css('opacity', '1');
            }, 400*index);
        });
    }, {offset:'70%'});
    // Profile Animations End

    // Skills-item Animations Start
     $('.skills-item').animated('zoomIn');
     // Skills-item Animations End

    // Portfolio Items Animations Start
    $('.portfolio').waypoint(function() {
        $('.portfolio-item').each(function(index) {
            var item = $(this);
            setInterval(function() {
                item.addClass('zoomIn').css('opacity', '1');
            }, 400*index);
        });
    }, {offset:'60%'});

    $('.project-action').animated('fadeInUp');
    // Portfolio Items Animations End

    // Contacts Animations End
    $('.contact-left').animated('fadeInUp');
    $('.contact-right').animated('fadeInUp');
    // Contacts Animations End

    // Refresh scrollSpy function
    function scrollSpyRefresh(){
        setTimeout(function(){
            $('body').scrollspy('refresh');
        },1000);
    }

    // Refresh waypoints function
    function waypointsRefresh(){
        setTimeout(function(){
            $.waypoints('refresh');
        },1000);
    }

    $('.skills').waypoint(function() {
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

    $("[data-toggle='tooltip']").tooltip({container: 'body'});

});