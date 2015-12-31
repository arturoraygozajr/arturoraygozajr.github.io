

console.log("one");


$.get( "https://api.github.com/users/arturoraygozajr", function( data ) {

   console.log(data);

    var success = function(){
        console.log("post done");

        $('.container').append("<img src='" + data.avatar_url + "'><h1>" + data.name + "</h1><h3>" + data.login + "</h3>");
    };


    $.ajax({
        type: "POST",
        url: "http://httpbin.org/post",
        data: data,
        success: success,
        dataType: ""
    });

});


console.log("two");

