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

function printChecklist( ) {
  var listHTML = '<ol>';
  for ( var i = 0; i <= weekdayChecklistForAmelia.length -1; i ++) {
    listHTML += '<li>' + weekdayChecklistForAmelia[i] + '</li>';
  }
  listHTML += '</ol>';
  $('.ameliaChecklist').html(listHTML);
} 

function printWeekendChecklist( ) {
  var listHTML = '<ol>';
  for ( var i = 0; i <= weekendChecklistForAmelia.length -1; i ++) {
    listHTML += '<li>' + weekendChecklistForAmelia[i] + '</li>';
  }
  listHTML += '</ol>';
  $('.ameliaChecklist').html(listHTML);
} 

currentDate = new Date()
,  dayofWeek = currentDate.getDay();
if (dayofWeek > 0 && dayofWeek < 6 ) {
  printChecklist(); 
}  else {
   printWeekendChecklist(); 
    
}

