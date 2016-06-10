$(document).ready(function(){

    $('#contact-form .form-control').each(function(){

        if ($.trim($(this).val()) === ''){
            $(this).removeClass('input-filled');
        } else {
            $(this).addClass('input-filled');
        }
    });

    $('#contact-form .form-control').on('blur',function(){

        if ($.trim($(this).val()) === '') {
            $(this).removeClass('input-filled');
        } else {
            $(this).addClass('input-filled');
        }
    });

});