var person = {

	age : 32,
	name : "arun",
	gender : "male",
	myage : function () {
		return this.age;
	},
	myGender : function (){
		return this.gender;
	}
}

person.age = 12;

console.log("Age is " + person.myage());