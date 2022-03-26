$("#currentDay").text(moment().format('MMM Do YYYY'));
var saveBtn = $('.saveBtn');

var colorChange = function() {
  var thisHour = moment().hours('H');
  $(".time-block").each(function() {
    var timeblockHour = parseInt($(this).attr("id"));
    console.log(this);
    if (timeblockHour > thisHour) {
      $(this).addClass("future");
    }
    else if (timeblockHour === thisHour) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
};

saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var events = $(this).siblings(".description").val();

  localStorage.setItem(time, events);
});

function eventPlan() {
  $(".hour").each(function(){
    var thisHour = $(this).text();
    var thisEvent = localStorage.getItem(thisHour);

    if(thisEvent !== null) {
      $(this).siblings(".description").val(thisEvent);
    }
  });
}

colorChange();
eventPlan();