$(document).ready(function() {

    // Waypoints Animations
    $(window).load(function() {
        $('.scrollimation').waypoint(function(){
            $(this).addClass('in');
        },{offset:'95%'});
    });

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