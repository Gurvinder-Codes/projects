$(".share").click(function () {
  if ($("body").width() > 648) {
    $(".share-tooltip").toggleClass("active");
    console.log("clicked");
  } else {
    $(".personal-info").toggle();
    $(".share-container-mobile").toggleClass("active");
  }
});

console.log($("body").width());
