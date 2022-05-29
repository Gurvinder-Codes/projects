const tipBtn = [...$(".tip-btn")];
let tip,
  tipAmount,
  total,
  bill,
  people = 0;

tipBtn.forEach((btn, index) => {
  $(btn).click(function (e) {
    tipBtn.forEach((btn) => {
      console.log(btn);
      $(btn).removeClass("btn-active");
    });
    $(btn).addClass("btn-active");
    switch (index) {
      case 0:
        tip = 5;
        break;
      case 1:
        tip = 10;
        break;
      case 2:
        tip = 15;
        break;
      case 3:
        tip = 25;
        break;
      case 4:
        tip = 50;
        break;
      default:
        break;
    }
  });
});

$(".custom-tip").keyup(function (e) {
  tip = Number($(".custom-tip")[0].value);
});

$(".bill").keyup(function (e) {
  bill = Number($(".bill")[0].value);
});

$(".num-people").keyup(function (e) {
  people = Number($(".num-people")[0].value);
  total = bill + (bill * tip) / 100;
  tipAmount = (bill * tip) / 100 / people;

  if ($(".num-people")[0].value == 0) {
    $(".error-msg").show();
    $(".num-people").addClass("error");
  } else {
    $(".error-msg").hide();
    $(".num-people").removeClass("error");

    if (!isNaN(total) && !isNaN(tipAmount)) {
      $(".tip-amount").text(`$${parseFloat(tipAmount).toFixed(2)}`);
      $(".total").text(`$${parseFloat(total).toFixed(2)}`);
    }
  }
});

$(".reset-btn").click(function (e) {
  e.preventDefault();
  $(".my-form")[0].reset();
  $(".tip-amount").text("$0.00");
  $(".total").text("$0.00");
  tipBtn.forEach((btn) => {
    $(btn).removeClass("btn-active");
  });
  $(".error-msg").hide();
  $(".num-people").removeClass("error");
});
