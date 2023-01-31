$(document).on('click', 'nav button', tabs).on('click', '.gallery button', lBox).on('click', '.dim', lBoxKill);
$(window).on('scroll', navCheck);

$.fn.activate = function(){
    return this.addClass('active').siblings().removeClass('active');
}

function tabs(){
    var idx = $(this).index();

    if (idx < 3) $('html, body').stop().animate({ scrollTop: $('article section').eq(idx).offset().top - $('nav').outerHeight() }, 200);
    else $('body').toggleClass('eng');
}

function lBox(){
    var csrc = $(this).find('img').attr('src').replace('-thumb', '');

    $('.dim').append('<img src="' + csrc + '">').addClass('active');
}

function lBoxKill(){
    $('.dim').empty().removeClass('active');
}

function navCheck(){
    var _top = $(window).scrollTop();
    var _sec1 = $('section').eq(1).offset().top - $('nav').outerHeight();
    var _sec2 = $('section').eq(2).offset().top - $('nav').outerHeight();
    var _idx = (_top < _sec1) ? 0 : ((_top >= _sec1 && _top < _sec2) ? 1 : 2);

    $('nav button').eq(_idx).activate();
}