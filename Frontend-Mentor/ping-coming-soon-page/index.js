$("form").submit(function (e) {
  e.preventDefault();
  const emailVal = document.getElementById("email").value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailVal.match(mailformat)) {
    $(".error-msg").addClass("error");
    $("#email").addClass("error-bdr");
  } else {
    $(".error-msg").removeClass("error");
    $("#email").removeClass("error-bdr");
    document.getElementById("email").value = "";
  }
});
