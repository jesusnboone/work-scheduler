//moment.js variables
var today = moment().format('dddd, MMMM Do YYYY');
var eightAmEnd = moment().startOf('day').add(8, 'hour').endOf('hour');
var eightAmStart = moment().startOf('day').add(8, 'hour').startOf('hour');
var nineAmEnd = moment().startOf('day').add(9, 'hour').endOf('hour');
var nineAmStart = moment().startOf('day').add(9, 'hour').startOf('hour');
var tenAmEnd = moment().startOf('day').add(10, 'hour').endOf('hour');
var tenAmStart = moment().startOf('day').add(10, 'hour').startOf('hour');
var elevenAmEnd = moment().startOf('day').add(11, 'hour').endOf('hour');
var elevenAmStart = moment().startOf('day').add(11, 'hour').startOf('hour');
var twelvePmEnd = moment().startOf('day').add(12, 'hour').endOf('hour');
var twelvePmStart = moment().startOf('day').add(12, 'hour').startOf('hour');
var onePmEnd = moment().startOf('day').add(13, 'hour').endOf('hour');
var onePmStart = moment().startOf('day').add(13, 'hour').startOf('hour');
var twoPmEnd = moment().startOf('day').add(14, 'hour').endOf('hour');
var twoPmStart = moment().startOf('day').add(14, 'hour').startOf('hour');
var threePmEnd = moment().startOf('day').add(15, 'hour').endOf('hour');
var threePmStart = moment().startOf('day').add(15, 'hour').startOf('hour');
var fourPmEnd = moment().startOf('day').add(16, 'hour').endOf('hour');
var fourPmStart = moment().startOf('day').add(16, 'hour').startOf('hour');
var fivePmEnd = moment().startOf('day').add(17, 'hour').endOf('hour');
var fivePmStart = moment().startOf('day').add(17, 'hour').startOf('hour');

//current date displayed
$("#currentDay").html(today);
//if functions for deciding time slot class
if (moment().isAfter(eightAmEnd)) {
    $("#eight-am").addClass("past");
}
else if (moment().isBefore(eightAmStart)) {
        $("#eight-am").addClass("future")
    }
else {
    $("#eight-am").addClass("present");
}

if (moment().isAfter(nineAmEnd)) {
    $("#nine-am").addClass("past");
}
else if (moment().isBefore(nineAmStart)) {
        $("#nine-am").addClass("future")
    }
else {
    $("#nine-am").addClass("present");
}

if (moment().isAfter(tenAmEnd)) {
    $("#ten-am").addClass("past");
}
else if (moment().isBefore(tenAmStart)) {
        $("#ten-am").addClass("future")
    }
else {
    $("#ten-am").addClass("present");
}

if (moment().isAfter(elevenAmEnd)) {
    $("#eleven-am").addClass("past");
}
else if (moment().isBefore(elevenAmStart)) {
        $("#eleven-am").addClass("future")
    }
else {
    $("#eleven-am").addClass("present");
}

if (moment().isAfter(twelvePmEnd)) {
    $("#twelve-pm").addClass("past");
}
else if (moment().isBefore(twelvePmStart)) {
        $("#twelve-pm").addClass("future")
    }
else {
    $("#twelve-pm").addClass("present");
}

if (moment().isAfter(onePmEnd)) {
    $("#one-pm").addClass("past");
}
else if (moment().isBefore(onePmStart)) {
        $("#one-pm").addClass("future")
    }
else {
    $("#one-pm").addClass("present");
}

if (moment().isAfter(twoPmEnd)) {
    $("#two-pm").addClass("past");
}
else if (moment().isBefore(twoPmStart)) {
        $("#two-pm").addClass("future")
    }
else {
    $("#two-pm").addClass("present");
}

if (moment().isAfter(threePmEnd)) {
    $("#three-pm").addClass("past");
}
else if (moment().isBefore(threePmStart)) {
        $("#three-pm").addClass("future")
    }
else {
    $("#three-pm").addClass("present");
}

if (moment().isAfter(fourPmEnd)) {
    $("#four-pm").addClass("past");
}
else if (moment().isBefore(fourPmStart)) {
        $("#four-pm").addClass("future")
    }
else {
    $("#four-pm").addClass("present");
}

if (moment().isAfter(fivePmEnd)) {
    $("#five-pm").addClass("past");
}
else if (moment().isBefore(fivePmStart)) {
        $("#five-pm").addClass("future")
    }
else {
    $("#five-pm").addClass("present");
}
//functions to set and recieve localStorage for our user inputs
$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});

$(window).on('load', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});