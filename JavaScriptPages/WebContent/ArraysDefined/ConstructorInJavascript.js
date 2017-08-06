function student(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var arun = new student("arun", 34, "male");
var adwiti = new student("adwiti", 2, "female");
console.log(arun.age + " : " + arun.name + " : " + arun.gender);
console.log(adwiti.age + " : " + adwiti.name + " : " + adwiti.gender);