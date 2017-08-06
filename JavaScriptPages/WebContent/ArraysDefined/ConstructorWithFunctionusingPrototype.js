function Person(age, name, gender) {
	this.age = age;
	this.name = name;
	this.gender = gender;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.getAge = function() {
	return this.age;
}

Person.prototype.getGender = function() {
	return this.gender;
}

arun = new Person(10, "Adwiti", "Female");

console.log("Name is : " + arun.getName() + " age is " + arun.getAge()
		+ " gender is " + arun.getGender());