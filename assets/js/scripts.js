$(document).ready(function() {
    $('.popup-title').click(function() {
        $(this).siblings('.popup-cont').fadeIn();
    });
    $('.close').click(function() {
        $(this).parents('.popup-cont').fadeOut();
    });


    $('.item').click(function() {
        $('.choose').prop("disabled", false);
        var img = $(this).attr('id');
        $('.item').removeClass('selected');
        $(this).addClass('selected');
        $('.selected-country img').attr("src", "assets/imgs/" + img + ".png");
        var title=$(this).find('.title').text();
        $('.selected-country .title').text(title);


    });
    $('.choose').click(function() {
        $("#step1").slideUp();
        $("#step2").slideDown();
    });
    $('#back').click(function() {
        $("#step2").slideUp();
        $("#step1").slideDown();
    });
}); 