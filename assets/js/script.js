var todaysDate = moment().format("YYYYMMDD")
//console.log(todaysDate);

// Initialize variable - Array to hold values
var aryDayScheduler = [{"date":  todaysDate,
"time": 8,
"task": ""
},
{"date":  todaysDate,
"time": 9,
"task": ""
},
{"date":  todaysDate,
"time": 10,
"task": ""
},
{"date":  todaysDate,
"time": 11,
"task": ""
},
{"date":  todaysDate,
"time": 12,
"task": ""
},
{"date":  todaysDate,
"time": 13,
"task": ""
},
{"date":  todaysDate,
"time": 14,
"task": ""
},
{"date":  todaysDate,
"time": 15,
"task": ""
},
{"date":  todaysDate,
"time": 16,
"task": ""
},
{"date":  todaysDate,
"time": 17,
"task": ""
}]

var storageDayScheduler = getStoredScheduler(todaysDate)


$('#currentDay').text(moment().format("MMM Do YY"));

var ccurHour = moment().format("HH");  // Return string expression
var nCurHour = parseInt(ccurHour);     // Convert Hour to Numeric

for (var nId=8; nId<=17; nId++) {      // nId<=17; nId++) {

    setId = '#hour_' + (nId) ;
    console.log(setId);

    if (nId<nCurHour) {
        $(setId).addClass('past');
    } else if (nId==nCurHour) {
        $(setId).addClass('present');
    } else if (nId>nCurHour) {
        $(setId).addClass('future');
    }

}


// 
$(".saveBtn").on("click", function() {

    var id =  $(this).attr('id');
    
    //console.log(text);
    //console.log(id);

    textId = "#hour_" + id.substr(5,2)
    var text = $(textId).value ;

})

// Get information stored in localStorage
function getStoredScheduler(pdToday) {
    var storedlocalStorage = localStorage.getItem("dailyPlanner");

    if (storedlocalStorage != null) {
        savedPlanner = JSON.parse(storedlocalStorage) ;
    } else {
        savedPlanner = [];
    }
    
}