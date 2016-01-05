
//this function step by step inverts a hex color.
function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}


function rgbToHex(srgb) {
    //exec() method tests for a match in a string.
    var rgbvals = /rgba?\((.+),(.+),(.+)\)/i.exec(srgb);
    //parseInt method takes a string and returns an integer.
    var rval = parseInt(rgbvals[1]);
    var gval = parseInt(rgbvals[2]);
    var bval = parseInt(rgbvals[3]);
    return '#' + (
        rval.toString(16) +
            gval.toString(16) +
            bval.toString(16)
        ).toUpperCase();
}

function loop_div()
{
    // pick random colors
    $( "div" ).each(function( index ) {
        var rand = '#'+Math.floor(Math.random()*16777215).toString(16);
        $( this).css('background-color',rand);
    });


    // Invert background colors of all divs
    $( "div" ).each(function( index ) {
        var x = $(this).css('background-color');
        console.log("x "+ x);
        hexcolor = rgbToHex(x);
      //setting the inverted color the font color here
       $( this).css('color',invertColor(hexcolor));
    });




}

