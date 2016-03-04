// JavaScript Document
//if (document.getElementById('enquireButton').clicked == true) {
//	alert("button was clicked");
//}




function a() {
	var companyName = document.getElementById('companyName').value;//done------------
	var companyLocation = document.getElementById('companyLocation').value;//done--------
	var travel = $('input[name="travel"]:checked').val();//done--------
	var companyWebsite = document.getElementById('companyWebsite').value;
	var clientName = document.getElementById('clientName').value;//done----------
	var clientNumber = document.getElementById('clientNumber').value;
	var clientEmail = document.getElementById('clientEmail').value;//done--------
	var jobRole = document.getElementById('jobRole').value;//done--------
	var startDate = document.getElementById('startDate').value;//done--------
	var endDate = document.getElementById('endDate').value;//done----------
	var weeklyHours = document.getElementById('weeklyHours').value;//done----------
	var skillsetsRequired = document.getElementById('skillsetsRequired').value;//done--------
	var equipmentRequired = document.getElementById('equipmentRequired').value;//done--------
	var personalMessage = document.getElementById('personalMessage').value;//done--------
	var optionalMessage = document.getElementById('optionalMessage').value;//done--------
	

	var formGeneratedMessage = document.getElementById('enquiryOutputDiv').innerHTML += 
'<br>Hi (INSERT POD MEMBER NAME HERE),<br> You\'ve got a new request from POD!<br><b>' 
+ clientName + '</b> from <b>' + companyName + '</b> has requested for your services and would like to hire you for a job!<br>' +
'Below are all of the details listed for the job for your reading purposes:<br><br><br>' + 
'Start date: <b>' + startDate + '</b><br>' + 
'End date: <b>' + endDate + '</b><br>' + 
'Weekly Hours: <b>' + weeklyHours + '</b><br>' + 
'Your job role will be: <b>' + jobRole + '</b><br>' +
'The company location is: <b>' + companyLocation + '</b><br>' +
'The client has decided if your travel expense will be paid for: <b>' + travel + '</b><br>' +
'your required skillset for this job is: <b>' + skillsetsRequired + '</b><br>' +
'The equipment that is required for this job is: <b>' + equipmentRequired + '</b><br><br>' +
'The personal information that the client has written out for you regarding this job is the following: <br><b>' + personalMessage + '</b><br><br>' + 
'Any optional information the client has added is the following: <br><b>' + optionalMessage + '</b><br><br>' + 
'The contact details for the client are as follows: <br>Client Name: <b>' + clientName + '</b><br>' +
'Company Name: <b>' + companyName + '</b><br>' + 
'Company Email Address: <b>' + clientEmail + '</b><br>' +
'Client Contact Number: <b>' + clientNumber + '</b><br>' +
'Client Website: <b>' + companyWebsite + '</b><br>';
}