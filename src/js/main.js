$(document).ready(function(){

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