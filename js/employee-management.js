/*eslint-env browser*/
var employees = [
	['John', 'Engineer', 2345],
	['Mathew', 'Engineer', 6789],
	['Lorenz', 'Manager', 4321],
	['Thomson', 'Engineer', 9876],
	['Antony', 'Engineer', 4680]
]
function loadData() {
	

createTableData()
}

function createTableData() {

var table = document.getElementById("employeeTable");
while(table.rows.length>0) {
			table.deleteRow(0);
		}
for(var i=0; i< employees.length;i++) {
	
	var employee = employees[i];
	var row = table.insertRow(i);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = employee[0];
	cell2.innerHTML = employee[1];
	cell3.innerHTML = employee[2];
	
	var btn = document.createElement('input');
	btn.type = "button";
	btn.className = "btn";
	btn.value="Delete";
	btn.onclick = (function(i) {return function() {
		
		
		employees.splice(i,1);
		createTableData();
		
	}}(i));
	cell4.appendChild(btn);
	
	document.getElementById("countLabel").innerHTML = "Showing "+ employees.length + " Employees"
}
}

function addEmployee() {
	var name = document.getElementById('name').value
	var title = document.getElementById('title').value
	var extension = document.getElementById('extension').value
	if(!name ) {
		document.getElementById("nameError").innerHTML = "Please fill name";
		return;
	}
	if(!title ) {
		document.getElementById("titleError").innerHTML = "Please fill name";
		return;
	}
	if(!extension ) {
		document.getElementById("extensionError").innerHTML = "Please fill name";
		return;
	}
	employees.push([name, title, extension]);
	createTableData();
}	
