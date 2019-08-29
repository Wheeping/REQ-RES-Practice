/*--------GLOBAL VARIABLES--------*/
//Declaring the website I'm using for this program.
const reqresAPI = "https://reqres.in/api/users";

//Global variables to hold the total number of pages and the length of the arrays.
let totalPages;
let arrayLength;

//Global variables to hold the current row information.
let row;
let cellId;
let cellEmail;
let cellFirstName;
let cellLastName;
let cellAvatar;
/*--------END GLOBAL VARIABLES--------*/

/*-------------FUNCTIONS-------------*/
//Finds the total amount of pages. Have to use seperate function to assign it.
function findNumberOfPages(website){
	$.getJSON(website, function(pulledJSON){
		totalPages = pulledJSON.total_pages;
		console.log("Found pages");
	});
}

//Finds the length of the array
function findDataArrayLength(website, pageNumber){
		$.getJSON(website + '?page=' + pageNumber, function(pulledJSON){
			arrayLength = pulledJSON.data.length;
			console.log("Found array length");
	});
}

//Adds new row to table
function addRow(table){
	row = table.insertRow(1);
	cellId = row.insertCell(0);
	cellEmail = row.insertCell(1);
	cellFirstName = row.insertCell(2);
	cellLastName = row.insertCell(3);
	cellAvatar = row.insertCell(4);
	console.log("Added Row");
}

//assigns the pulled information to the row
function assignUserDataToRow(website, pageNumber, arrayNumber){
	$.getJSON(website + '?page=' + pageNumber, function(pulledJSON){
		let pulledId = pulledJSON.data[arrayNumber].id;
		let pulledEmail = pulledJSON.data[arrayNumber].email;
		let pulledFirstName = pulledJSON.data[arrayNumber].first_name;
		let pulledLastName = pulledJSON.data[arrayNumber].last_name;
		let pulledAvatar = pulledJSON.data[arrayNumber].avatar;
		let image = document.createElement('img');
		image.src = pulledAvatar;
		cellId.innerHTML = pulledId;
		cellEmail.innerHTML = pulledEmail;
		cellFirstName.innerHTML = pulledFirstName;
		cellLastName.innerHTML = pulledLastName;
		cellAvatar.appendChild(image);
		console.log("Inserted Info");
	});
}

//Display all users onto table
function displayAllUsers(website, table){
	findNumberOfPages(website);
	let currentPage = 1;
	while (currentPage <= totalPages){
		findDataArrayLength(website, currentPage);
		addRow(table);
		let arrayNumber = 1;
		while (arrayNumber <= arrayLength){
			assignUserDataToRow(website, currentPage, arrayNumber)
			arrayNumber++;
		}
		currentPage++;
	}
}
/*------------END FUNCTIONS------------*/
/*
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
*/