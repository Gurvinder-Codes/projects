const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$(".form1").submit(function (e) {
  e.preventDefault();
  const emailVal = $(this).find(".email").val();
  console.log($(this).find(".error-msg"));
  if (!emailVal.match(mailformat)) {
    $(this).find(".error-msg").css("visibility", "visible");
    $(this).find(".email").css("borderColor", "red");
  } else {
    $(this).find(".error-msg").css("visibility", "hidden");
    $(this).find(".email").css("borderColor", "hsl(243, 87%, 12%)");
  }
});

$(".form2").submit(function (e) {
  e.preventDefault();
  const emailVal = $(this).find(".email").val();
  if (!emailVal.match(mailformat)) {
    $(this).find(".error-msg").css("visibility", "visible");
    $(this).find(".email").css("borderColor", "red");
  } else {
    $(this).find(".error-msg").css("visibility", "hidden");
    $(this).find(".email").css("borderColor", "transparent");
  }
});
