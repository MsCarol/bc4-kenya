// revealing module pattern
function MyMath() {
    
   function sum() {
    
    var total = 0;
    for (var i = 0; i<arguments.length; i++){

      total += arguments[i];

    }
    return total;
    }

    function avg() {
    var total = sum.apply(this,arguments);
    return total/arguments.length;
    }

    return {
    	sum: sum,
    	avg: avg,
    }
	
}

var x = new MyMath();
console.log(x.sum(10,20));
console.log(x.avg(30,60,90));