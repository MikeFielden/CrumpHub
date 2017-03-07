var weekdayChecklistForKayleigh = [
  {taskName: 'Eat Breakfast', taskValue: 5}
  , {taskName: 'Put Dishes in the Sink', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 5}
  , {taskName: 'Get Dressed', taskValue: 5}
  , {taskName: 'Get Hair Stuff Together', taskValue: 5}
  , {taskName: 'Pack Lunch', taskValue: 10}
  , {taskName: 'Make Sure Backpack is Packed and Ready', taskValue: 5}
  , {taskName: 'Homework', taskValue: 10}
  , {taskName: 'Read for 20 Minutes', taskValue: 15}
  , {taskName: 'Help Clean the Table After Dinner', taskValue: 10}
  , {taskName: 'Take a Bath', taskValue: 5}
  , {taskName: 'Brush Teeth', taskValue: 5}
  , {taskName: 'Put on Pajamas', taskValue: 5}
  , {taskName: 'Lay Out Clothes for Tomorrow', taskValue: 10}
  , {taskName: 'Clean Room', taskValue: 10}
  , {taskName: 'Get Ready for Bed', taskValue: 5}
];

var weekendChecklistForKayleigh = [
  {taskName: 'Help Put Away Breakfast Dishes', taskValue: 10}
  , {taskName: 'Put Dishes in the Dish Washer', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 5}
  , {taskName: 'Get Dressed', taskValue: 5}
  , {taskName: 'Help Clean Bathroom', taskValue: 10}
  , {taskName: 'Help Clean Living Room', taskValue: 10}
  , {taskName: 'Put Away Any Toys That Are Out', taskValue: 5}
  , {taskName: 'Help Clear the Table', taskValue: 10}
  , {taskName: 'Take a Bath', taskValue: 5}
  , {taskName: 'Brush Teeth', taskValue: 5}
  , {taskName: 'Put on Pajamas', taskValue: 5}
  , {taskName: 'Clean Bedroom', taskValue: 10}
  , {taskName: 'Get Ready for Bed', taskValue: 5}
];

/**
 *
 * @param listOfThings
 */
function printChecklist($spotToPutIt, listOfThings) {
  var listHTML = '<ul>';
  for (var i = 0; i <= listOfThings.length - 1; i++) {
    listHTML += buildListItem(listOfThings[i]);
  }
  listHTML += '</ul>';
  
  // You might have done this on accident but this is the exact right way
  $spotToPutIt.html(listHTML);
}

function buildListItem(item) {
  return '<li><input type="checkbox" data-value="' + item.taskValue + '"/>' + item.taskName + ' (<small>' + item.taskValue + '</small>)' + '</li>'
}

/**
 * Gets what items to display based on whether the day of the week is a
 *   weekday or a weekend
 *
 * @type {Number} dayOfWeek
 */
function getItemsToDisplayBasedOffTypeOfDay(dayOfWeek) {
  return (dayOfWeek > 0 && dayOfWeek < 6
    ? weekdayChecklistForKayleigh
    : weekendChecklistForKayleigh);
}

var currentDate             = new Date()
  , checklistItemsToDisplay = getItemsToDisplayBasedOffTypeOfDay(currentDate.getDay())
  , $kayleighChecklist        = $('.kayleighChecklist')
  ;

printChecklist($kayleighChecklist, checklistItemsToDisplay);

$(document).ready(function () {
  let total = 0;
  
  $('li').on('click', function (e) {
    $(e.currentTarget).find('input').click();
  });
  
  $('li input').on('click', function (e) {
    var $input    = $(e.currentTarget)
      , isChecked = $input.prop('checked')
      ;
    
    if (isChecked) {
      total += $input.data('value')
    } else {
      total -= $input.data('value')
    }
    
    $('.jsTotal').html(total)
  });
});