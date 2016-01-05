function arrayAnalyzer(arr){
    for (var i = 0; i < arr.length; i++){
// this is how to define an odd.
// The modulus (%) helps you find the remainder after it is broken down as much as possible by your selected number.
        this.odds = this.odds || 0;
        if (arr[i]%2 != 0){
            this.odds++
        };
//this is how to define a negative
        this.negatives = this.negatives || 0;
        if(arr[i] < 0){
          this.negatives++
        };
//this is how you define average. Also how to display up to a certain decimal.
        var total = total + arr[i] || arr[i];
        };
        this.avg = parseFloat(parseFloat(total/ arr.length).toFixed(2));


    var medianFind = function(values){
        values.sort( function(a,b) {return a - b;} );

       //Math.floor rounds down to the nearest integer.
        var half = Math.floor(values.length/2);

        if(values.length % 2) {
            return values[half];}
        else {
            return (values[half-1] + values[half]) / 2.0;}
    };
    this.median = medianFind(arr);
};

var p = new arrayAnalyzer([7, -3, 0, 12, 44, -5, 3]);
console.log(p)
