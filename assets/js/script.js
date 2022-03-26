$("#currentDay").text(moment().format('MMM Do YYYY'));
var saveBtn = $('.saveBtn');

var colorChange = function() {
  var thisHour = moment().hours();
  $(".time-block").each(function() {
    var timeblockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(this);
    if (timeblockHour < thisHour) {
      $(this).addClass("past");
    }
    else if (timeblockHour === thisHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
};

colorChange();

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


eventPlan();