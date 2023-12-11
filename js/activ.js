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
