$(function () {

    var count = 1;
    
    const back = $('#back');
    const next = $('#next');

    next.on('click', function() {
        count++;
        if (count > 1 && count < 5) {
            $('.circle').eq(count - 1).children().addClass('active');
            $(this).siblings().removeAttr('disabled').addClass('active');
        }
        if (count == 4) {
            $(this).removeClass('active').prop('disabled', true);
        }
    });

    back.on('click', function() {
        if (count > 1 && count < 5) {
            $('.circle').eq(count - 1).children().removeClass('active');
            $(this).siblings().removeAttr('disabled').addClass('active');
        }
        if (count == 2) {
            $(this).removeClass('active').prop('disabled', true);
        }
        count--;
    });


    

});