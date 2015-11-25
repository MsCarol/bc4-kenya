function Person(name,age,status)  { 
	this.name = name;
    this.age = age;
 	this.status = status;

var carol = new Person ("Carol" , 23 , "Dating" );


};
Person.prototype.height = 0;
carol.height = "5'4";

Person(carol);

function isEven (n) {
	if (n/2) {
		console.log(n+"I am Even");
	} else {
		console.log(n+" is not  Even");
	}

};
isEven(24);
console.log(isEven(27));

function Andela() {

var student = { "Carol" : 23 ,
                "Peggy" : 18 ,
                "Eunice": 26 ,
            }


}