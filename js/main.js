$(".header__lang span ").click(function() {
  $(".header__lang ul ").fadeToggle(300);
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
  nextArrow: ".arrow_next",
  autoplay: false,
  autoplaySpeed: 5000,
  focusOnSelect: true,
  asNavFor: ".big__slider",
  responsive: [
    {
      breakpoint: 991.9,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767.9,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575.9,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(".search_block").click(function() {
  $(".search_block form").addClass("active_search");
});

$(document).click(function() {
  $(".search_block form").removeClass("active_search");
});

$(".search_block").click(function(e) {
  e.stopPropagation(); // This is the preferred method.
  return true; // This should not be used unless you do not want
  // any click events registering inside the div
});

$(".menu__icon").click(function() {
  $(".mobile__menu").css("top", "0");
});
$(".close__btn").click(function() {
  $(".mobile__menu").css("top", "-100vh");
});
$(".red_btn:not(.close_modal)").click(function(e) {
  e.preventDefault();
  // $(".bg__modal").css("display", "flex");
  $(".bg__modal")
    .css("display", "flex")
    .hide()
    .fadeIn();
  $("body").css("overflow", "hidden");
});
$(".close_modal").click(function(e) {
  e.preventDefault();
  $(".bg__modal")
    .fadeOut()
    .hide()
    .css("display", "flex");
  $("body").css("overflow-y", "unset");
});
$(".big__slider").slick({
  asNavFor: ".top__slider",
  arrows: false,
  infinite: false
});

$(".all_text").click(function() {
  $(".about_us__home__text").toggleClass("more_text");
});
