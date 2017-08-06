var studentId = new Array();

function displayStudent() {

	var student = document.getElementById("studentArray");
	if (studentId.length == 0) {
		student.innerHTML = "The Student Id is Empty";
	} else {
		student.innerHTML = "";
		for (var i = 0; i < studentId.length; i++) {
			student.innerHTML = student.innerHTML + studentId[i] + " , ";
		}
	}
}

function addStudent() {
	var studId = document.getElementById("studentId");
	studentId.push(studId.value);
	document.getElementById("studentId").value = "";
	displayStudent();
}

function deleteStudent() {
	alert("You removed student " + studentId.pop());
	displayStudent();
}