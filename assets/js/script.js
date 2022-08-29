$('#currentDay').text(moment().format("MMM Do YY"));

var curHour = moment().format("HH")

for (var nId=7; nId<=9; nId++) {   // nId<=17; nId++) {

    setId = '#hour_' + (nId) ;
    console.log(setId);

    if (nId<curHour) {
        $(setId).addClass('past');
        break;
    } else if (nId=curHour) {
        $(setId).addClass('present');
        break;
    } else if (nId>curHour) {
        // nId > curHour
        $(setId).addClass('future');
        break;
    }

}

//console.log( curTime);



/*
.past {
  background-color: #d3d3d3;
  color: white;
}

.present {
  background-color: #ff6961;
  color: white;
}

.future {
  background-color: #77dd77;
  color: white;
}
*/