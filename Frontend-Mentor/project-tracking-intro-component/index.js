$(document).ready(function () {
  $(".menu-btn").click(function () {
    if ($(".menu-icon").attr("src") == "./images/icon-hamburger.svg") {
      $(".menu-icon").attr("src", "./images/icon-close.svg");
    } else {
      $(".menu-icon").attr("src", "./images/icon-hamburger.svg");
    }
    $(".menu").toggle(500);
  });
});
