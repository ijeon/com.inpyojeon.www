$(document).on('click', 'nav button', tabs).on('click', '.gallery button', lbox).on('click', '.dim', lboxkill);

$.fn.activate = function(){
    return this.addClass('active').siblings().removeClass('active');
}

function tabs(){
    var idx = $(this).index();

    if (idx < 3) $(this).add($('article section').eq(idx)).activate();
    else lchange();
}

function lchange(){
    $('body').toggleClass('eng');
}

function lbox(){
    var csrc = $(this).find('img').attr('src').replace('-thumb', '');

    $('.dim').append('<img src="' + csrc + '">').addClass('active');
}

function lboxkill(){
    $('.dim').empty().removeClass('active');
}

window.onpopstate = function(event) {
	alert('?'); 
}