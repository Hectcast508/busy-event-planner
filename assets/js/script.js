$("#currentDay").text(moment().format('MMM Do YYYY'));
var saveBtn = $('#saveBtn');

var colorChange = function() {
  var thisHour = moment().hours();
  $(".time-block").each(function() {
    var timeblockHour = parseInt($(this).attr("id").split("=")[i]);

    if (thisHour > timeblockHour) {
      $(this).addClass("past");
    }
    else if (thisHour === timeblockHour) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  });
};

saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var event = $(this).siblings("description");

  localStorage.setItem(time, event);
});

