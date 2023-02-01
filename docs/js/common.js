$(document).on('click', 'nav button', tabs).on('click', '.gallery button', lBox).on('click', '.dim', lBoxKill).on('click', '#clock', toBatcave);
$(window).on('scroll', navCheck).on('load', init);

var tick;

function init(){
    getTime();
    setClock();
    tick = setInterval(getTime, 1000);
}

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

function getTime(){
    const date = new Date();
    const hour = date.getHours() % 12;
    const min = date.getMinutes();
    const sec = date.getSeconds();

    setClock(hour, min, sec);
}

function setClock(hour, min, sec){
    var degH = Math.round(360 * (hour / 12)) + min * 0.5 - 180;
    var degM = Math.round(360 * (min / 60)) - 180;
    var degS = Math.round(360 * (sec / 60)) - 180;

    $('#hour').css({ transform: 'rotate(' + degH + 'deg)' });
    $('#min').css({ transform: 'rotate(' + degM + 'deg)' });
    $('#sec').css({ transform: 'rotate(' + degS + 'deg)' });
}

function toBatcave(){
    clearInterval(tick);
    $('#clock').addClass('set');
    setTimeout(function(){

    }, 1000);
}