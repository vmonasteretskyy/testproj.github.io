$(".header__lang span ").click(function() {
  $(".header__lang ul ").fadeIn(300);
});

$(document).mouseup(function(e) {
  var container = $(".header__lang span ");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".header__lang ul ").fadeOut(300);
  }
});
$(".top__slider").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: ".arrow_prev",
  nextArrow: ".arrow_next"
});
