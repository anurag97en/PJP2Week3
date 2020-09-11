
function operationsub() {
    var showYears = document.getElementById('showYears');
    var showMonths = document.getElementById('showMonths');
    var showDays = document.getElementById('showDays');
    var button = document.getElementById('minus');
    var dateStart = document.getElementById('date1').value;
    var dateEnd = document.getElementById('date2').value;
    var dateStarting = new Date(dateStart);
    var dateEnding = new Date(dateEnd);
    var diff = dateEnding - dateStarting;
    var years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    var remaining = Math.floor(diff % (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor(remaining / ((365.25 / 12) * 24 * 60 * 60 * 1000));
    var remaining = Math.floor(remaining % ((365.25 / 12) * 24 * 60 * 60 * 1000));
    var days = Math.floor(remaining / (24 * 60 * 60 * 1000));
    document.getElementById('showYears').innerHTML = years;
    document.getElementById('showMonths').innerHTML = months;
    document.getElementById('showDays').innerHTML = days;
}

function operationadd() {

    var dateStart = document.getElementById('date1').value;
    var dateEnd = document.getElementById('date2').value;
    var date1 = new Date(dateStart);
    var date2 = new Date(dateEnd);

    var year1 = date1.getFullYear();
    var month1 = date1.getMonth() + 1;
    var days1 = date1.getDate();

    var year2 = date2.getFullYear();
    var month2 = date2.getMonth() + 1;
    var days2 = date2.getDate();

    var days = days2 + days1;
    var months = month2 + month1;
    var years = year2 + year1;

    if (days > 30) {
        days -= 30;
        months += 1;
    }
    if (months > 12) {
        months -= 12;
        years += 1;
    }

    document.getElementById('showYears').innerHTML = years;
    document.getElementById('showMonths').innerHTML = months;
    document.getElementById('showDays').innerHTML = days;
}

// function displayradiovalues() {

//     var checkm=document.getElementById("months").checked();
//     var checkw=document.getElementById("weeks").checked();

//         var dateStart = document.getElementById('dateInput').value;
//         //   var d = new Date(dateStart);
//         var inputn = document.getElementById('inputnum').value;
//         //    var dater=d.setDate(d.getDate()-inputn);.
//         var date1 = new Date(dateStart);

//         var year1 = date1.getFullYear();
//         var month1 = date1.getMonth() + 1;
//         var day1 = date1.getDate();
//         var days = inputn;

//         if (checkm)
//             days = 30 * n;
//         else if (checkw)
//             days = 7 * n;


//         year1 = year1 + Math.floor(days / 365);
//         days = days % 365;
//         month1 = month1 + Math.floor(days / 30);
//         days = days % 30;
//         day1 = day1 + days;

//         if (day1 > 30) {
//             day1 = day1 - 30;
//             month1 += 1;
//         }
//         if (month1 > 12) {
//             month1 -= 12;
//             year1 += 1;
//         }

//         document.getElementById('showYears').innerHTML = year1;
//         document.getElementById('showMonths').innerHTML = month1;
//         document.getElementById('showDays').innerHTML = day1;
//     }



var x;
$(function () {

    $(".dropdown-menu li a").click(function () {
        console.log("hello");
        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());
        x = ($(this).text());
    });

});

function add() {
    var date = document.getElementById('date').value;
    var n = document.getElementById('n').value;
    //var selected = getElementById('selected').value;	
    console.log("date = " + date + ",n = " + n + ", selected = " + x);
    var date1 = new Date(date);
    var year1 = date1.getFullYear();
    var month1 = date1.getMonth() + 1;
    var day1 = date1.getDate();
    var days = n;

    if (x == "Month")
        days = 30 * n;
    else if (x == "Weeks")
        days = 7 * n;


    year1 = year1 + Math.floor(days / 365);
    days = days % 365;
    month1 = month1 + Math.floor(days / 30);
    days = days % 30;
    day1 = day1 + days;

    if (day1 > 30) {
        day1 = day1 - 30;
        month1 += 1;
    }
    if (month1 > 12) {
        month1 -= 12;
        year1 += 1;
    }

    document.getElementById('showYears').innerHTML = year1;
    document.getElementById('showMonths').innerHTML = month1;
    document.getElementById('showDays').innerHTML = day1;
}

function subs() {
    var date = document.getElementById('date').value;
    var n = document.getElementById('n').value;
    //var selected = getElementById('selected').value;	
    var days = n;

    if (x == "Month")
        days = 30 * n;
    else if (x == "Weeks")
        days = 7 * n;

    var date1 = new Date(date);
    var d = date1.setDate(date1.getDate() - days);
    var dd = new Date(d);

    var year1 = dd.getFullYear();
    var month1 = dd.getMonth() + 1;
    var day1 = dd.getDate();


    document.getElementById('showYears').innerHTML = year1;
    document.getElementById('showMonths').innerHTML = month1;
    document.getElementById('showDays').innerHTML = day1;
}