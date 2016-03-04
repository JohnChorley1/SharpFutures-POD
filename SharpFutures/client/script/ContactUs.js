function a() {
	var name = document.getElementById('clientName').value;//done----------
	var contactNumber = document.getElementById('clientNumber').value;
	var contactEmail = document.getElementById('clientEmail').value;//done--------
	var enquiry = document.getElementById("enquiryType");
	var enquiryType = enquiry.options[enquiry.selectedIndex].text;
	var personalMessage = document.getElementById('personalMessage').value;//done--------
	

	var formGeneratedMessage = document.getElementById('enquiryOutputDiv').innerHTML = 
'<br>Hi there,<br> You\'ve got a new <b>contact us</b> request from POD!<br><b>' + 
'<b>Name: </b>' + name + '<br>' + 
'<b>Contact Number: </b>' + contactNumber + '<br>' +
'<b>Contact Email: </b>' + contactEmail + '<br>' + 
'<b>Enquiry Type: </b>' + enquiryType + '<br><br>' + 
'<b>Personal Message: </b>' + personalMessage + '<br>';
}