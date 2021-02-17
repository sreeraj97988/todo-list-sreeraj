window.onload = function() {
  
  debugger;
  var request = new XMLHttpRequest()

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)

	request.onload = function () {
	// Begin accessing JSON data here
	var data = JSON.parse(this.response)
	
	for(var x=0; x<data.length;x++){
		var newRow = document.createElement("tr");
		var newCell = document.createElement("td");
		var newCell2 = document.createElement("td");

		var chkbox = document.createElement('input');
		chkbox.type = "checkbox";
		chkbox.id = "chk";
		chkbox.name = "chk";

		newCell.innerHTML = data[x].title;
		newCell2.innerHTML = data[x].completed;

		newCell.id = 'title_' + data[x].id;
		newCell2.id = 'status_' + data[x].id;
		chkbox.id = 'chk_' + data[x].id;
		chkbox.setAttribute("onchange", "updateCheckList(" + data[x].id + ",checked)");
		newRow.append(chkbox);
		newRow.append(newCell);
		newRow.append(newCell2);
		document.getElementById("todoBody").appendChild(newRow);
	}
}
request.send()
};
var selectedList = [];
function updateCheckList(id, checked) {

	if (checked) {
		selectedList.push(id);

		for (var i = 0; i <= selectedList.length; i++) {
			var statusId = document.getElementById('status_' + id);
			statusId.innerHTML = 'true';
		}
	}
	else {
		for (var y = 0; y < selectedList.length; y ++) {
			if (selectedList[y] == id)
				selectedList.splice(y,1);
		}
		for (var i = 0; i <= selectedList.length; i++) {
			var statusId = document.getElementById('status_' + id);
			statusId.innerHTML = 'false';
		}
    }

	let myPromise = new Promise(function (myResolve, myReject) {
		setTimeout(function () { myResolve(selectedList.length); }, 3000);
	});

	myPromise.then(function (value) {
		if (value > 0 && value == 5)
			alert('Congrats!!, ' + value + ' tasks has been successfully completed.');
	});
	
}
