//var today = new Date();
//var dd = today.getDate();
//var mm = today.getMonth()+1; //January is 0!
//var yyyy = today.getFullYear();
//
//if(dd<10) {
//    dd='0'+dd
//}
//
//if(mm<10) {
//    mm='0'+mm
//}
//
//today = mm+'/'+dd+'/'+yyyy;
//document.write(today);

//var then = new Date();


function challenge_12(year, month, day)
{
    var then = new Date(year, month, day, 0, 0, 0, 0);
    var today = new Date();

    var delta = then.getTime() - today.getTime();

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round((delta)/(oneDay));

    var diffMonths = 0;
    var diffYears = 0;

    if (diffDays > 365)
    {
        diffYears = Math.floor(diffDays/365);
        diffDays = diffDays - (diffYears * 365);
    }

    if (diffDays > 30)
    {
        diffMonths = Math.floor(diffDays/30);
        diffDays = diffDays - (diffMonths*30);
    }

    if( diffMonths == 0 && diffYears == 0)
    {
        return diffDays + " days";
    }

    if (diffMonths > 0 && diffYears == 0 )
    {
        return diffMonths + " months " + diffDays + " days ";
    }

    if( diffMonths > 0 && diffYears > 0)
    {
        return diffYears + " years "+ diffMonths + " months "+ diffDays + " days ";
    }

    return "";
}


var result = challenge_12(2017,11,17);
console.log(result);


var result = challenge_12(2016,05,08);
console.log(result);


var result = challenge_12(2016,0,4);
console.log(result);

