function validateform() {
	var usernameElem = document.getElementById("username");
	if (usernameElem.value == "") {
		alert("Please enter username");
	} else {
		alert("Username is " + usernameElem.value);
	}
}