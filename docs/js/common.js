$(document).on('click', 'imgslide button', lbOpen);
$(document).on('click', 'dim', lbClose);

function lbOpen() {
    var src = $(this).children('img').attr('src').replace('-thumb', '');
    window.location.hash = src.split('/').pop().split('.')[0];

    $('dim').addClass('active');
    $('lightbox').css({ backgroundImage: 'url('+src+')' });
}

function lbClose() {
    $('dim').removeClass('active');
    $('lightbox').css({ backgroundImage: 'none' });
}