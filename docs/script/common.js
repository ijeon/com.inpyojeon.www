$(document)
  .on("click", "header nav button", scrollPage)
  .on("click", ".showmore", showMore);

function scrollPage() {
  var _target = $(this).data("target");
  var _rem = parseInt($("html").css("font-size"));
  var _padding = $("header").outerHeight() + _rem * 0.75;
  var _currentTop = $("html").scrollTop();
  var _targetTop = $(_target).offset().top - _padding;
  var _duration = Math.abs(_targetTop - _currentTop) * 0.5;
  console.log(_duration);
  $("html, body").stop().animate(
    {
      scrollTop: _targetTop,
    },
    _duration
  );
}

function showMore() {
  $(this).parent().toggleClass("_opened");
}
