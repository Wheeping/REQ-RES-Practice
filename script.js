const reqresAPI = "https://reqres.in/api/users";
let totalPages;
let arrayLength;

//Finds the total amount of pages. Have to use seperate function to assign it.
function findNumberOfPages(website){
	$.getJSON(website, function(pulledJSON){
		totalPages = pulledJSON.total_pages;
	});
}

//Stupid function. Just thinking it out.
/*function loopThroughPages(website){
	findNumberOfPages(website);
	let pageNumber = 1;
	while (pageNumber <= totalPages){
		pageNumber++;
	}
}*/

//Finds the length of the array
function findArrayLength(website, pageNumber){
		$.getJSON(website + '?page=' + pageNumber, function(pulledJSON){
			arrayLength = pulledJSON.data.length;
	});
}

/*
let pageNumber = 1;
	while (pageNumber <= totalPages){
		$.getJSON(reqresAPI + pageNumber, function(passthrough){
			let arrayLength = passthrough.data.length;
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
	*/