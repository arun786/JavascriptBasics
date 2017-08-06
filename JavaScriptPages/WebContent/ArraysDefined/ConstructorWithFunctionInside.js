function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;

	this.getName = function() {
		return this.name;
	}

	this.getAge = function() {
		return this.age;
	}

	this.getGender = function() {
		return gender;
	}
}

var arun = new Person("arun", 12, "male");

console.log("Name is " + arun.getName() + " age is " + arun.getAge()
		+ " gender is " + arun.getGender());