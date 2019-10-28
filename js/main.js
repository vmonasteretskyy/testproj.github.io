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
  $(".autocomplete").slideUp(500);
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

$(".header__check > div >input").click(function() {
  if ($(".header__check input[type=checkbox]").is(":checked")) {
    $(".filter_btn").css("display", "flex");
  } else {
    $(".filter_btn").css("display", "none");
  }
});

function ValidateEmail(inputText, e) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    $(".invalid").css("display", "none");
    $(".actual_search__right input").addClass("valid");
    document.form1.text1.focus();
    return true;
  } else {
    e.preventDefault();
    $(".invalid").css("display", "block");
    document.form1.text1.focus();
    return false;
  }
}
$(".city_drop1 > div:not(.city_check_wrap)").click(function() {
  $(".city_check_wrap1").slideToggle(500);
  $(this).toggleClass("upArow");
  $(".calendar_wrap1").slideUp(500);
  $(".date_drop1 > div:first-child").removeClass("upArow");
});
$(".city_drop2 > div:not(.city_check_wrap)").click(function() {
  $(".city_check_wrap2").slideToggle(500);
  $(this).toggleClass("upArow");
  $(".calendar_wrap2").slideUp(500);
  $(".date_drop2 > div:first-child").removeClass("upArow");
});

$(".header__search .first_form input").focus(function() {
  $(".autocomplete1").slideDown(500);
});
$(".header__search .second_form input").focus(function() {
  $(".autocomplete2").slideDown(500);
});

var a = $(
  "main, .black__field, .header__top > .container > div:not(.header__search), .header_filter,.banner__top"
);
$(a).click(function() {
  $(".autocomplete").slideUp(500);
});

new Lightpick({
  field: document.getElementById("datepicker"),
  singleDate: false,
  lang: "ru",
  autoclose: false,
  hideOnBodyClick: false,
  inline: true,
  parentEl: ".calendar.calendar1",
  locale: {
    tooltip: {
      one: "день",
      few: "дня",
      many: "дней"
    },
    pluralize: function(i, locale) {
      if ("one" in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
      if (
        "few" in locale &&
        i % 10 === Math.floor(i % 10) &&
        i % 10 >= 2 &&
        i % 10 <= 4 &&
        !(i % 100 >= 12 && i % 100 <= 14)
      )
        return locale.few;
      if (
        "many" in locale &&
        (i % 10 === 0 ||
          (i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9) ||
          (i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14))
      )
        return locale.many;
      if ("other" in locale) return locale.other;

      return "";
    }
  },
  onSelect: function(start, end) {
    // document.getElementById("result-10").innerHTML = rangeText(start, end);
  }
});
new Lightpick({
  field: document.getElementById("datepicker2"),
  singleDate: false,
  lang: "ru",
  autoclose: false,
  hideOnBodyClick: false,
  inline: true,
  parentEl: ".calendar.calendar2",
  locale: {
    tooltip: {
      one: "день",
      few: "дня",
      many: "дней"
    },
    pluralize: function(i, locale) {
      if ("one" in locale && i % 10 === 1 && !(i % 100 === 11)) return locale.one;
      if (
        "few" in locale &&
        i % 10 === Math.floor(i % 10) &&
        i % 10 >= 2 &&
        i % 10 <= 4 &&
        !(i % 100 >= 12 && i % 100 <= 14)
      )
        return locale.few;
      if (
        "many" in locale &&
        (i % 10 === 0 ||
          (i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9) ||
          (i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14))
      )
        return locale.many;
      if ("other" in locale) return locale.other;

      return "";
    }
  },
  onSelect: function(start, end) {
    // document.getElementById("result-10").innerHTML = rangeText(start, end);
  }
});

$(".date_drop1 > div:first-child").click(function() {
  $(".calendar_wrap1").slideToggle(500);
  $(this).toggleClass("upArow");
  $(".city_check_wrap1").slideUp(500);
  $(".city_drop1 > div:not(.city_check_wrap").removeClass("upArow");
});
$(".calendar_wrap1 .red_btn").click(function() {
  $(".calendar_wrap1").slideUp(500);
  $(".date_drop1 > div:first-child").removeClass("upArow");
});
$(".date_drop2 > div:first-child").click(function() {
  $(".calendar_wrap2").slideToggle(500);
  $(this).toggleClass("upArow");
  $(".city_check_wrap2").slideUp(500);
  $(".city_drop2 > div:not(.city_check_wrap").removeClass("upArow");
});
$(".calendar_wrap2 .red_btn").click(function() {
  $(".calendar_wrap2").slideUp(500);
  $(".date_drop1 > div:first-child").removeClass("upArow");
});
$(".fixed__filter_btn > span").click(function() {
  $(".header__fixed .mob_filter").slideToggle(500);
  $(this).toggleClass("fixed_red");
});

function resizeCh() {
  if ($(window).width() < 768) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 110) {
        $(".header_filter")
          .css("position", "fixed")
          .css("width", "100vw")
          .css("top", "0");
      } else {
        $(".header_filter").css("position", "relative");
      }
    });
  }
  if ($(window).width() >= 768) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 220) {
        $(".header__fixed").show();
      } else {
        $(".header__fixed").hide();
      }
    });
  }
}
$(document).ready(function() {
  resizeCh();
});
$(window).resize(function() {
  resizeCh();
});
