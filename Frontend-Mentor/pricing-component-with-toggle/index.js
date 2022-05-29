const monthlyPrice = [19.99, 24.99, 39.99];
const annualPrice = [199.99, 249.99, 399.99];
const price = [...$(".amount")];

$(document).ready(function () {
  $(".toggle-input").click(function () {
    if ($(this).prop("checked") == false) {
      for (let i = 0; i < price.length; i++) {
        $(price[i]).text(`${annualPrice[i]}`);
      }
    } else if ($(this).prop("checked") == true) {
      for (let i = 0; i < price.length; i++) {
        $(price[i]).text(`${monthlyPrice[i]}`);
      }
    }
  });
});
