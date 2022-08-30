var todaysDate = moment().format("YYYYMMDD")
//console.log(todaysDate);

// Initialize variable - Array to hold values
var aryDayScheduler = [{
    "date": todaysDate,
    "time": 9,
    "task": ""
},
{
    "date": todaysDate,
    "time": 10,
    "task": ""
},
{
    "date": todaysDate,
    "time": 11,
    "task": ""
},
{
    "date": todaysDate,
    "time": 12,
    "task": ""
},
{
    "date": todaysDate,
    "time": 13,
    "task": ""
},
{
    "date": todaysDate,
    "time": 14,
    "task": ""
},
{
    "date": todaysDate,
    "time": 15,
    "task": ""
},
{
    "date": todaysDate,
    "time": 16,
    "task": ""
},
{
    "date": todaysDate,
    "time": 17,
    "task": ""
}]

// Look/Extract from localStorage
var storageDayScheduler = getStoredScheduler(todaysDate)
// if (storageDayScheduler !== []) {
if (storageDayScheduler.length>0) {
    aryDayScheduler = storageDayScheduler;
    displayWorkDay();
}


$('#currentDay').text(moment().format("MMM Do YY"));

var ccurHour = moment().format("HH");  // Return string expression
var nCurHour = parseInt(ccurHour);     // Convert Hour to Numeric

for (var nId = 8; nId <= 17; nId++) {      // nId<=17; nId++) {

    setId = '#hour_' + (nId);
    console.log(setId);

    if (nId < nCurHour) {
        $(setId).addClass('past');
    } else if (nId == nCurHour) {
        $(setId).addClass('present');
    } else if (nId > nCurHour) {
        $(setId).addClass('future');
    }

}

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    // Extrat id of the element clicked
    var id = $(this).attr('id');

    // Save button's Id = save_#
    // Hour textArea Id = hour_#
    nElement = id.substr(5, 2)  // After "_"

    // textId = "#hour_" + id.substr(5,2)
    textId = "#hour_" + nElement
    // Will get text 
    var task = $(textId).val();

    /*
     9     1
    10     2
    11     3
    12     4
    13     5
    14     6
    15     7
    16     8
    17     9
    */

    nAryPos = nElement - 9;
    aryDayScheduler[nAryPos]["task"] = task;

    localStorage.setItem("dailyPlanner", JSON.stringify(aryDayScheduler));
})

// Get information stored in localStorage
function getStoredScheduler(pdToday) {
    var storedlocalStorage = localStorage.getItem("dailyPlanner");

    if (storedlocalStorage == 'null' ) {
        savedPlanner = [];
    } else {
        savedPlanner = JSON.parse(storedlocalStorage);

        if (savedPlanner[0]['date'] === pdToday) {
            // Belongs to Today's date
        } else {
            // If is from a different day, will delete it from localStorage
            localStorage.setItem('dailyPlanner', 'null')
            savedPlanner = [];
        }
        
    }

    return savedPlanner;
}

function displayWorkDay() {
    for (var nHour = 9; nHour <= 17; nHour++) {
        nAryPos = nHour - 9;              // Position in the Array
        textId = "#hour_" + nHour  ;      // Hour_#
        // $(textId).val = aryDayScheduler[nAryPos]["task"];
        $(textId).val( aryDayScheduler[nAryPos]["task"] );

        // ww = 'To set debugger/break point'
    }
}