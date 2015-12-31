Array.prototype.max = function() {
    return Math.max.apply(null, this);
};


var count = function(input)
{
    var word = input.toLowerCase();
    var letters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(i = 0; i < word.length; i++)
    {
        var character = word[i];
        var value = word.charCodeAt(i); // ascii code for lowercase leteter
        var value2 = value - 'a'.charCodeAt(0); // offset so 'a' is 0

        if(value2 >= 0 && value2 <= 26 )
        {
            letters[value2]++;
        }
//        console.log(value2);
    }

//    console.log("for word " + word + " max occurance was " + letters.max())

    return letters.max();
}


//
//var phrase = function (string) {
//    var words = string.split(" ");
//    console.log(words);
//    for (i = 0; i < words.length; i++){
//        console.log(words[i]);
//    }
//}



console.log(count("never"));
console.log(count("attribute"));
console.log(count("success"));
console.log(count("-Florence"));

//phrase("I attribute my success to this: I never gave or took any excuse. -Florence Nightingale")