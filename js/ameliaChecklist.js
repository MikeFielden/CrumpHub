var weekdayChecklistForAmelia = [
  {taskName: 'Eat Breakfast', taskValue: 6}
  , {taskName: 'Put Dishes in the Sink', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 10}
  , {taskName: 'Get Dressed', taskValue: 10}
  , {taskName: 'Clean up Toys', taskValue: 10}
  , {taskName: 'Help Clean the Table After Dinner', taskValue: 10}
  , {taskName: 'Clean Room', taskValue: 10}
  , {taskName: 'Take a Bath', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 10}
  , {taskName: 'Put on Pajamas', taskValue: 10}
  , {taskName: 'Get Ready for Bed', taskValue: 10}
];

var weekendChecklistForAmelia = [
  {taskName: 'Help Put Away Breakfast Dishes', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 10}
  , {taskName: 'Get Dressed', taskValue: 10}
  , {taskName: 'Help Clean Bathroom', taskValue: 10}
  , {taskName: 'Help Clean Living Room', taskValue: 10}
  , {taskName: 'Put Away Any Toys That Are Out', taskValue: 10}
  , {taskName: 'Help Clear the Table', taskValue: 10}
  , {taskName: 'Take a Bath', taskValue: 10}
  , {taskName: 'Brush Teeth', taskValue: 10}
  , {taskName: 'Put on Pajamas', taskValue: 10}
  , {taskName: 'Get Ready for Bed', taskValue: 10}
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
    ? weekdayChecklistForAmelia
    : weekendChecklistForAmelia);
}

var currentDate             = new Date()
  , checklistItemsToDisplay = getItemsToDisplayBasedOffTypeOfDay(currentDate.getDay())
  , $ameliaChecklist        = $('.ameliaChecklist')
  ;

printChecklist($ameliaChecklist, checklistItemsToDisplay);

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