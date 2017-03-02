var weekdayChecklistForAmelia = [
  'Eat Breakfast'
  , 'Put Dishes in the Sink'
  , 'Brush Teeth'
  , 'Get Dressed'
  , 'Clean up Toys'
  , 'Help Clean the Table After Dinner'
  , 'Clean Room'
  , 'Take a Bath'
  , 'Brush Teeth'
  , 'Put on Pajamas'
  , 'Get Ready for Bed'
];

var weekendChecklistForAmelia = [
  'Help Put Away Breakfast Dishes'
  , 'Brush Teeth'
  , 'Get Dressed'
  , 'Help Clean Bathroom'
  , 'Help Clean Living Room'
  , 'Put Away Any Toys That Are Out'
  , 'Help Clear the Table'
  , 'Take a Bath'
  , 'Brush Teeth'
  , 'Put on Pajamas'
  , 'Get Ready for Bed'
];

/**
 *
 * @param listOfThings
 */
function printChecklist($spotToPutIt, listOfThings) {
  var listHTML = '<ol>';
  for (var i = 0; i <= listOfThings.length - 1; i++) {
    listHTML += '<li>' + listOfThings[i] + '</li>';
  }
  listHTML += '</ol>';
  
  // You might have done this on accident but this is the exact right way
  $spotToPutIt.html(listHTML);
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
