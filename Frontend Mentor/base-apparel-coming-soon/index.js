$("form").submit(function (e) {
  e.preventDefault();
  const emailVal = document.getElementById("email").value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailVal.match(mailformat)) {
    $(".icon-error ,.error-msg").addClass("error");
    $("#email").addClass("error-hlt");
  } else {
    $(".icon-error ,.error-msg ,input[type=email]").removeClass("error");
    $("#email").removeClass("error-hlt");
    document.getElementById("email").value = "";
  }
});
