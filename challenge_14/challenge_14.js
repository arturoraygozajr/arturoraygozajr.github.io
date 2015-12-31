// helps find max in an array
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};


// looks at one word and returns a number which is the maximum repeated letter
var count = function(input)
{
    var word = input.toLowerCase();
    // make array length 26 with all zeros
    var letters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i;
    for(i = 0; i < word.length; i++)
    {
        var character = word[i];
        var value = word.charCodeAt(i); // ascii code for lowercase leteter
        var value2 = value - 'a'.charCodeAt(0); // offset so 'a' is 0

        // only look at values that are a-z (aka they are in our new range of 0-26)
        if(value2 >= 0 && value2 <= 26 )
        {
            letters[value2]++;
        }
//        console.log(value2);
    }
//    console.log("for word " + word + " max occurance was " + letters.max())
    return letters.max();
};



var wordSelector = function (string) {
    var words = string.split(" ");
    console.log(words);
    var maxlettercount = 0;
    var lettercount = 0;
    var i;

    // loop through entire sentance, and find the max letter score
    for (i = 0; i < words.length; i++){
//        console.log(words[i]);
        lettercount = count(words[i]);
        console.log("count for " + words[i] + " is " + lettercount);
        if(lettercount > maxlettercount)
        {
            maxlettercount = lettercount;
            console.log("new max is " + lettercount);
        }
    }


    result = [];

    // loop through again and now pick out words that are exactly the max
    for (i = 0; i < words.length; i++){
        lettercount = count(words[i]);
        if( lettercount == maxlettercount )
        {
            result.push(words[i]);
        }
    }

    return result;

};



//console.log(count("never"));
//console.log(count("attribute"));
//console.log(count("success"));
//console.log(count("-FlorEnce"));

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. -Florence Nightingale"));