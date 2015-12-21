
function reverse(s, index, arr) {
    return s.split('').reverse().join('');
}

var palindromeSingle = function(word, index, arr){
    var rev = reverse(word);
    if (rev == word){
        return true;
    }
    else {
        return false;
    }
    return rev;
};

var wordsReverser = function(words){
    var splitt = words.split(" ");
    var result = splitt.map(reverse);
    var result2 = result.join(" ");
    return result2;

};