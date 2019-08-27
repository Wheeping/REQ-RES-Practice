const reqresAPI = "https://reqres.in/api/users?page=";

$.getJSON("https://reqres.in/api/users", function(passthrough){
	let totalPages = passthrough.total_pages;
	let pageNumber = 1;
	while (pageNumber <= totalPages){
		$.getJSON(reqresAPI + pageNumber, function(passthrough){
			arrayLength = passthrough.data.length;
			let arrayNumber = 0;
			while (arrayNumber < arrayLength)
			{
				let gotId = passthrough.data[arrayNumber].id;
				let gotEmail = passthrough.data[arrayNumber].email;
				let gotFirstName = passthrough.data[arrayNumber].first_name;
				let gotLastName = passthrough.data[arrayNumber].last_name;
				let gotAvatar = passthrough.data[arrayNumber].avatar;
				var img = document.createElement('img');
    			img.src = gotAvatar;

				var table = document.getElementById("userTable");
				var row = table.insertRow(1);
				var cellId = row.insertCell(0);
				var cellEmail = row.insertCell(1);
				var cellFirstName = row.insertCell(2);
				var cellLastName = row.insertCell(3);
				var cellAvatar = row.insertCell(4);
				cellId.innerHTML = gotId;
				cellEmail.innerHTML = gotEmail;
				cellFirstName.innerHTML = gotFirstName;
				cellLastName.innerHTML = gotLastName;
				cellAvatar.appendChild(img);

				arrayNumber++;
			};
		});
		pageNumber++;
	};
});

function sortTable(n) {
  let row, i, x, y;
  let shouldSwap = false;
  let swapable = true;
  let swapcount = 0;
  const table = document.getElementById("userTable");
  let dir = "asc";

  while (swapable) {
    swapable = false;
    row = table.rows;
    for (i = 1; i < (row.length - 1); i++) {
      	shouldSwap = false;
      	x = row[i].getElementsByTagName("TD")[n];
      	y = row[i + 1].getElementsByTagName("TD")[n];
      	if (dir === "asc") {
        	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          		shouldSwap= true;
          		break;
        	}
      	} else if (dir === "desc") {
        	if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          		shouldSwap = true;
          		break;
        	}
      	}
    }
    if (shouldSwap) {
      	row[i].parentNode.insertBefore(row[i + 1], row[i]);
      	swapable = true;
      	swapcount++;
    } else {
      	if (swapcount === 0 && dir === "asc") {
        	dir = "desc";
        	swapable = true;
      	}
    }
  }
}

function sortId(n) {
  let row, i, x, y;
  let shouldSwap = false;
  let swapable = true;
  let swapcount = 0;
  const table = document.getElementById("userTable");
  let dir = "asc";

  while (swapable) {
	swapable = false;
	row = table.rows;
	for (i = 1; i < (row.length - 1); i++) {
		shouldSwap = false;
	    x = row[i].getElementsByTagName("TD")[n];
	    y = row[i + 1].getElementsByTagName("TD")[n];
	    if (dir === "asc"){
	    	if (Number(x.innerHTML) > Number(y.innerHTML)) {
	        	shouldSwap = true;
	        	break;
	      	}
	  	} else if (dir === "desc") {
	    	if (Number(x.innerHTML) < Number(y.innerHTML)) {
	        	shouldSwap = true;
	        	break;
	      	}
	    }
	}
	if (shouldSwap) {
		row[i].parentNode.insertBefore(row[i + 1], row[i]);
	    swapable = true;
	    swapcount++;
	} else {
	   	if (swapcount === 0 && dir === "asc") {
	    	dir = "desc";
	    	swapable = true;
	    }
	}
  }
}