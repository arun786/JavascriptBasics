function init() {
	var stringM = document.getElementById("concatenate");
	document.getElementById("concatenate").innerHTML = stringM.innerHTML.substring(0,6); //will give This_i
	document.getElementById("index").innerHTML = stringM.innerHTML.indexOf("_"); //will give 4
}