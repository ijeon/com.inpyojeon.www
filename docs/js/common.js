$(document).on('click', 'nav button', tabs).on('keydown', shortcut);

$.fn.activate = function(){
    return this.addClass('active').siblings().removeClass('active');
}

function tabs(){
    var idx = $(this).index();

    if (idx < 2) $(this).add($('article section').eq(idx)).activate();
    else lchange();
}

function lchange(){
    $('body').toggleClass('eng');
}

function shortcut(e){
    if (e.code == 'KeyW') $('.work').activate();
    else if (e.code == 'KeyC') $('.contact').activate();
    else if (e.code == 'Period') lchange();
}