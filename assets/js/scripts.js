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
        $('.bg').css('background','url(assets/imgs/'+img+'bg.png)');
        if(img=="mal"){
            $('.desc .title').text('The ultimate beach vacation!');
            $('.desc p').text('There is seriously no better spot for eather a romantic vacation or family trip');
        }else         if(img=="val"){
            $('.desc .title').text('The ultimate Ski Resort!');
            $('.desc p').text('Val Thorens takes the prize as the highest ski resort in Europe');
        }else         if(img=="las"){
            $('.desc .title').text('The Perfect Las Vegas Vacation');
            $('.desc p').text('Luxor hotel and casino, romantic city or just a nice family visit!');
        }

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