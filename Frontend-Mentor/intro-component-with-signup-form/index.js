$("#myForm").submit(function (e) {
  const emailVal = document.getElementById("email").value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  e.preventDefault();
  Object.entries($("input")).forEach((element) => {
    if ($(element)[1].value == "") {
      $(element).addClass("error");
      $(element).next().addClass("show-error");
    } else {
      $(element).removeClass("error");
      $(element).next().removeClass("show-error");
    }

    if (!emailVal.match(mailformat)) {
      $("#email").addClass("error");
      $("#email").addClass("email-error");
      $("#email").next().addClass("show-error");
    } else {
      $("#email").removeClass("error");
      $("#email").removeClass("email-error");
      $("#email").next().removeClass("show-error");
    }
  });

  const classCheck = Object.entries($("input"))
    .slice(0, 4)
    .filter((e) => {
      return $(e[1]).hasClass("error");
    });

  if (!classCheck.length) {
    $("#myForm")[0].reset();
  }
});
