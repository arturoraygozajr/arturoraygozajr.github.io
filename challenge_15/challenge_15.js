var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]

// converts array of ascii char codes to array of characters
Array.prototype.function1 = function() {

    var i;
    var ret = [];
    for(i = 0; i < this.length; i++)
    {
        ret[i] = String.fromCharCode(this[i]);
    }
//    console.log(ret);
    return ret;
};

// converst array of characters to a string
Array.prototype.function2 = function() {
    var i;
    var ret = "";
    for(i = 0; i < this.length; i++)
    {
        ret += this[i];
    }
    return ret;
};

console.log(ascii.function1().function2());