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

console.log("Age is " + person.myage());