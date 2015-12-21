
function reverse(s) {
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

var palindromicMap = function(words){
    var splitt = words.split(" ");
    var result = splitt.map(palindromeSingle)
    return result;

};