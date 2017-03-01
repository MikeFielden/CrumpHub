
function displayCurrentDate ()  {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    , currentDate = new Date()
    ,  dayofWeek = currentDate.getDay()    
    ,  printDay = weekdays[dayofWeek]
    ,  day = currentDate.getDate()
    ,  month = currentDate.getMonth() + 1
    ;
$('.currentDate').html(moment().format('dddd, MMMM D, YYYY'))
//  $('.currentDate').html('<p> It is ' + printDay + ', ' + month + '/' + day + ' </p>');
}

function displayCurrentTime () {
var currentTime = new Date()
  , hours = currentTime.getHours()
  , minutes = currentTime.getMinutes()
  , suffix = "AM"
  ;

    if (minutes < 10) {
	   minutes = "0" + minutes;
    }

	if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
	}
	if (hours == 0) {
	   hours = 12;
	}

   /* $('.currentTime').html('<p> ' + hours + ':' + minutes + ' ' + suffix + ' </p>');   */
    $('.currentTime').html(moment().format('LT'))
}

displayCurrentDate();
displayCurrentTime();
setInterval(displayCurrentTime, 1000*60);