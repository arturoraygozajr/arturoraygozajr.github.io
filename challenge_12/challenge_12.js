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


function challenge_12(year, month, day) {
    var then = new Date(year, month, day, 0, 0, 0, 0);
    var today = new Date();

    //The army alphabet is a great way to name variable when you are stuck on naming.
    var delta = then.getTime() - today.getTime();

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    //Math.round method rounds to the nearest integer.
    var diffDays = Math.round((delta)/(oneDay));

    var diffMonths = 0;
    var diffYears = 0;
// all variable are using diffDays (total days) as a base. Then I am reducing the amount of days by the largest variable first.
    if (diffDays > 365) {
        diffYears = Math.floor(diffDays/365);
        diffDays = diffDays - (diffYears * 365);
    }

    if (diffDays > 30) {
        diffMonths = Math.floor(diffDays/30);
        diffDays = diffDays - (diffMonths*30);
    }

    //I am returning the variable + string so that it is easily readable to the user.
    //Using if so that I return only variable that have a value > 0.
    if( diffMonths == 0 && diffYears == 0) {
        return diffDays + " days";
    }

    if (diffMonths > 0 && diffYears == 0 ) {
        return diffMonths + " months " + diffDays + " days ";
    }

    if( diffMonths > 0 && diffYears > 0) {
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

