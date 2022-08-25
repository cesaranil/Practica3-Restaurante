$(document).ready(function(){

    //Efecto Menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        })
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500))
    })

    //Efecto del Header
    if($(window).width() > 800){
        $('header .texto').css({
            opacity:0,
            marginTop:0
        })

        $('header .texto').animate({
            opacity:1,
            marginTop: '-52px'
        }, 1500)
    }

})