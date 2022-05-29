$(".question-container").click(function () {
  $(this).toggleClass("active");
  $(this).children(".arrow").toggleClass("rotate");
  $(this).siblings(".answer").slideToggle(400);
});
