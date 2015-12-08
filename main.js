$(document).ready(function() {

    jQuery('.print').css("color", "purple");

    $('#light').click(function(fun){
        console.log("hey");
        jQuery('.groupl').css('color', 'blue');
    });

    $('#dark').click(function(fun){
        console.log("ho");
    });

    $('#makedark').click(function(fun){
        console.log("dark");
        jQuery('body').css('color','white');
        jQuery('body').css('background-color','black');

        // Also we need to remove the purple on the first text because it will
        // overiride the white
        //NOTE: this only works if the color was applied by jquery
        jQuery('.print').css("color", "");

    });


});