"use strict";
/* -------------- preloader ------------- */
$(document).ready(function () {
  // Add 'no-scroll' class to body
  $("body").addClass("no-scroll");
  // Delay the preloader and hide it
  $(".preloader")
    .delay(5000)
    .fadeOut("slow", function () {
      // Remove the 'no-scroll' class from the body
      $("body").removeClass("no-scroll");
    });
});
/* -------------- preloader ------------- */

/* -------------- scroll-up ------------- */

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up-btn").fadeIn();
    } else {
      $(".scroll-up-btn").fadeOut();
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
/* -------------- scroll-up ------------- */

/* -------------- NavBar ------------- */

let Nav = document.getElementById("mainNav");
let lastScrollPos = 0;

window.onscroll = () => {
  if (scrollY < 100) {
    Nav.classList.remove("fixed");
  } else if (scrollY > lastScrollPos) {
    Nav.classList.remove("fixed");
  } else {
    Nav.classList.add("fixed");
  }

  lastScrollPos = scrollY;
};
/* -------------- NavBar ------------- */

/* -------------- WOW ------------- */
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotel();
}
// WOW js
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});
/* -------------- WOW ------------- */

/* -------------- Skills width ------------- */
$(() => {
  if ($(window).width() > 768) {
    $(".Skills").height($(window).height()).css({
      margin: "0",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: " center",
      alignItems: "center",
    });
  }

  $(window).resize(() => {
    if ($(window).width() > 768) {
      $(".Skills").height($(window).height()).css({
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: " center",
        alignItems: "center",
      });
    }
  });
});
