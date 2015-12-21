//var add = function(Content1, Content2){
//    var result = (Content1+Content2);
//    return result;
//};
//
//console.log(add(13,16));
//
//var subtract = function(Content1, Content2){
//    var result = (Content1 - Content2);
//    return result;
//};
//
//
//console.log(subtract(213,134));
function reverse(s) {
    return s.split('').reverse().join('');
}

var palindromeSingle = function(word){
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
    return splitt;

};