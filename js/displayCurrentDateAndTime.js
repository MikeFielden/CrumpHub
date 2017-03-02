function displayCurrentDate() {
  $('.currentDate').html(moment().format('dddd, MMMM D, YYYY'))
}

function displayCurrentTime() {
  $('.currentTime').html(moment().format('LT'))
}

displayCurrentDate();
displayCurrentTime();
setInterval(displayCurrentTime, 1000 * 60);