var cb = function (num) {
console.log(num);
};

var checkNum = function(i,callback) {
	callback(i);
};
checkNum(46,cb);