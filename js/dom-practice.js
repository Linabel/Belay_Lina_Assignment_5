/*eslint-env browser*/
function loaded() {
	//STEP 2
	document.getElementById("myButton").onclick = clicked;
	//STEP 3
	document.getElementById("myButton1").addEventListener("click", userDefinedFn);
	//STEP 4
	document.getElementById("myButton2").addEventListener("click", function() {alert("I have been clicked");});
	document.getElementById("myButton3").addEventListener("click", alertTextValue);
}
//STEP 1
function clicked() {
	alert("I have been clicked");
}

function userDefinedFn() {
	alert("I have been clicked");
}
//step 6
function preventRedirect(evt) {
	evt.preventDefault();
	alert("Visit google link clicked");
	
}
//step 7
function alertTextValue() {
	document.getElementById("myButton3").disabled = true;
	alert(document.getElementById("textBox").value);
}
//step 8
function openNewPage() {
	window.open("newpage.html", "", "width=300,height=300");
}

function loadedInner() {
window.resizeTo(500, 300); 
}
var timer;
//step 9
function startClicked() {
	timer = setInterval(function(){ console.log("Learning javascript is fun") }, 2000);
}
function stopClicked() {
	clearInterval(timer);
}
//step 10
function select() {
	var sel = document.getElementById("selectBox");
	alert(sel.options[sel.selectedIndex].value);
}
