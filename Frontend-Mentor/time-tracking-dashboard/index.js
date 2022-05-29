const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const durationBtn = [...$(".duration-btn")];
const currentHours = [...$(".current-hours")];
const previousHours = [...$(".previous-hours")];

let dailyCurrent = [];
let dailyPrevious = [];
let weeklyCurrent = [];
let weeklyPrevious = [];
let monthlyCurrent = [];
let monthlyPrevious = [];
data.forEach((obj) => {
  dailyCurrent.push(obj.timeframes.daily.current);
  dailyPrevious.push(obj.timeframes.daily.previous);
  weeklyCurrent.push(obj.timeframes.weekly.current);
  weeklyPrevious.push(obj.timeframes.weekly.previous);
  monthlyCurrent.push(obj.timeframes.monthly.current);
  monthlyPrevious.push(obj.timeframes.monthly.previous);
});

durationBtn.forEach((element, index) => {
  $(element).click(function (e) {
    durationBtn.forEach((element) => {
      $(element).removeClass("active");
    });
    $(element).addClass("active");
    if ($(element)[0].innerText === "Daily") {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = `${dailyCurrent[i]}hrs`;
        previousHours[i].innerText = `Yesterday - ${dailyPrevious[i]}hrs`;
      }
    } else if ($(element)[0].innerText === "Weekly") {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = `${weeklyCurrent[i]}hrs`;
        previousHours[i].innerText = `Last Week - ${weeklyPrevious[i]}hrs`;
      }
    } else {
      for (let i = 0; i < currentHours.length; i++) {
        currentHours[i].innerText = `${monthlyCurrent[i]}hrs`;
        previousHours[i].innerText = `Last Month - ${monthlyPrevious[i]}hrs`;
      }
    }
  });
});
