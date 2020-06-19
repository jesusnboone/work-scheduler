var today = moment().format('dddd, MMMM Do YYYY');
var hour = moment().startOf('hour');
var eightAM = moment().startOf('day').add(8, 'hours').endOf('hour');
console.log(eightAM);
console.log(hour);

$("currentDay").innerHTML = today

if (moment().isAfter(eightAM)) {
    $("#eight-am").addClass("past");
}