var passwd = prompt("Please enter password");

while (passwd != "123" && passwd != null) {
	alert("you have not entered the right password");
	passwd = prompt("Please enter the password");
}

if (passwd != null) {
	alert("you have entered the right password");
}