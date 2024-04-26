$(document)
  .on("click", "header .logo", function(){
    location.href = location.href;
  })
  .on("click", "header nav button", scrollPage)
  .on("click", ".showmore", showMore)
  .on("click", "#translate", toggleLang)
  .on("click", "#mode", toggleMode);

function scrollPage() {
  var _target = $(this).data("target");
  var _rem = parseInt($("html").css("font-size"));
  var _padding = $("header").outerHeight() + _rem * 0.75;
  var _currentTop = $("html").scrollTop();
  var _targetTop = $(_target).offset().top - _padding;
  var _duration = Math.abs(_targetTop - _currentTop) * 0.5;
  $("html, body").stop().animate(
    {
      scrollTop: _targetTop,
    },
    _duration
  );
}

function showMore() {
  $('.list').parent().toggleClass("_opened");
}

function toggleMode() {
  $("body").toggleClass("dark");
}

function toggleLang() {
  var _currentLang = $("html").attr("lang");
  if (_currentLang == "en") {
    $("html").attr("lang", "ko");
    $("body").removeClass("en").addClass("ko");    
  } else {
    $("html").attr("lang", "en");
    $("body").removeClass("ko").addClass("en");
  }
}
