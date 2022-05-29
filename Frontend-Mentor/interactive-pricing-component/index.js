if ($(document).width() >= 768) {
  $(".discount").text("-25% discount");
} else {
  $(".discount").text("-25%");
}

const price = $(".price");
const pageviews = $(".pageviews");
const slider = document.querySelector(".range");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
  ((value - min) / (max - min)) * 100
}%, hsl(224, 65%, 95%) ${
  ((value - min) / (max - min)) * 100
}%, hsl(224, 65%, 95%) 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, hsl(224, 65%, 95%) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, hsl(224, 65%, 95%) 100%)`;
};

if ($(".billing-toggle").prop("checked") == false) {
  $(".range").change(function (e) {
    let value = Number(this.value);
    switch (value) {
      case 8:
        price.text("$8.00");
        pageviews.text("10k pageviews");
        break;
      case 12:
        price.text("$12.00");
        pageviews.text("50k pageviews");
        break;
      case 16:
        price.text("$16.00");
        pageviews.text("100k pageviews");
        break;
      case 24:
        price.text("$24.00");
        pageviews.text("500k pageviews");
        break;
      case 36:
        price.text("$36.00");
        pageviews.text("1M pageviews");
        break;
      default:
        break;
    }
  });
}

$(".billing-toggle").click(function () {
  if ($(this).prop("checked") == true) {
    const currentVal = $(".range")[0].value;
    let discountedValue = parseFloat(
      currentVal - (currentVal / 100) * 25
    ).toFixed(2);
    price.text(`$${discountedValue}`);
    $(".range").change(function (e) {
      let value = Number(this.value);
      let discountedValue = parseFloat(value - (value / 100) * 25).toFixed(2);
      switch (value) {
        case 8:
          price.text(`$${discountedValue}`);
          break;
        case 12:
          price.text(`$${discountedValue}`);
          break;
        case 16:
          price.text(`$${discountedValue}`);
          break;
        case 24:
          price.text(`$${discountedValue}`);
          break;
        case 36:
          price.text(`$${discountedValue}`);
          break;
        default:
          break;
      }
    });
  } else if ($(this).prop("checked") == false) {
    const currentVal = $(".range")[0].value;
    price.text(`$${parseFloat(currentVal).toFixed(2)}`);
    $(".range").change(function (e) {
      let value = Number(this.value);
      switch (value) {
        case 8:
          price.text(`$${parseFloat(value).toFixed(2)}`);
          break;
        case 12:
          price.text(`$${parseFloat(value).toFixed(2)}`);
          break;
        case 16:
          price.text(`$${parseFloat(value).toFixed(2)}`);
          break;
        case 24:
          price.text(`$${parseFloat(value).toFixed(2)}`);
          break;
        case 36:
          price.text(`$${parseFloat(value).toFixed(2)}`);
          break;
        default:
          break;
      }
    });
  }
});
