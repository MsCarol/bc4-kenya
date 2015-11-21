function Person(name,age,status)  { 
	this.name = name;
    this.age = age;
 	this.status = status;

var carol = new Person ("Carol" , 23 , "Dating" );


};
Person.prototype.height = 0;
carol.height = "5'4";

Person(carol);