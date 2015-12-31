


function loop_div()
{
    $( "div" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
    });
}



loop_div();