$(document).ready(function() {
    $('.popup-title').click(function() {
        $(this).siblings('.popup-cont').fadeIn();
    });
    $('.close').click(function() {
        $(this).parents('.popup-cont').fadeOut();
    });


    $('.color').click(function() {
        $('.pick-btn').prop("disabled", true);
        var img = $(this).attr('id');
        $('.color').removeClass('selected');
        $(this).addClass('selected');
        $(this).parents('.colors').siblings('.pic').find('img').attr("src", "assets/imgs/" + img + ".png")
        $('.selected-phone img').attr("src", "assets/imgs/" + img + ".png");
        $(this).parents('.prod').siblings('.pick-btn').prop("disabled", false);
    });
    $('.pick-btn').click(function() {
        $("#step1").slideUp();
        $("#step2").slideDown();
    });
    $('#back').click(function() {
        $("#step2").slideUp();
        $("#step1").slideDown();
    });
}); 