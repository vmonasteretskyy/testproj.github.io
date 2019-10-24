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
      breakpoint: 1199.9,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991.9,
      settings: {
        slidesToShow: 2
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
        slidesToShow: 3
      }
    }
  ]
});

// $(".menu__icon").click(function() {
//   $(".mobile__menu").css("top", "0");
// });
// $(".close__btn").click(function() {
//   $(".mobile__menu").css("top", "-100vh");
// });
$(" .big__banner  .red_btn:not(.close_modal)").click(function(e) {
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
  $(".all_text span:first-child").toggleClass("less__text");
  $(".all_text span:last-child").toggleClass("show_txt");
});

$(".more__content").click(function() {
  $(".more__events").slideDown(500);
  $(this).css("display", "none");
});

$(document).ready(function() {
  $(".header__dropdown select").select2();
});

$(".more >div:first-child").click(function() {
  $(".more__checks").slideToggle(400);
});

function checkBg() {
  if (
    $(".header_filter").hasClass("red") ||
    $(".header__search svg").hasClass("red_icon") ||
    $(".menu__mobile__icon").hasClass("red_icon")
  ) {
    $(".black__field").addClass("bg_viz");
  } else {
    $(".black__field").removeClass("bg_viz");
  }
}

$(".mobile__filter__btn").click(function() {
  $(".mob_filter")
    .slideToggle(500)
    .hide()
    .css("display", "flex");
  $(".header_filter").toggleClass("red");
  checkBg();
});

$(".header__search svg").click(function() {
  $(".header__search form")
    .slideToggle(500)
    .hide()
    .css("display", "flex");
  $(this).toggleClass("red_icon");
  checkBg();
});

$(".menu__mobile__icon ").click(function() {
  $(".mobile__menu")
    .slideToggle(500)
    .hide()
    .css("display", "flex");
  $(this).toggleClass("red_icon");
  checkBg();
});

$(".mobile__lang span").click(function() {
  $(".mobile__menu ul ").slideToggle(500);
  $(this).toggleClass("red");
  checkBg();
});

if ($(window).width() < 576) {
  $("footer").click(function(e) {
    if ($(e.target).hasClass("footer__title")) {
      $(e.target)
        .next("div.footer__lists")
        .slideToggle(500)
        .hide()
        .css("display", "flex");
    }
  });
}

$(".header__check").click(function() {
  if ($(".header__check input[type=checkbox]").is(":checked")) {
    $(".filter_btn").css("display", "flex");
  } else {
    $(".filter_btn").css("display", "none");
  }
});

$(".datepicker-here").datepicker({position: "tr"});
