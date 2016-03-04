function check(logInForm, registerForm) { /*function to check userid & password*/
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	/*the following code checkes whether the entered userid and password are matching*/
	if(logInForm.userid.value === "myuserid" && logInForm.pswrd.value === "mypswrd" || logInForm.userid.value === email && logInForm.pswrd.value === password) {
		alert("Welcome " + logInForm.userid.value);
		window.open('Profile.html', "_self")/*opens the target page while Id & password matches*/
	}
	else {
		alert("Error, username or password incorrect!")/*displays error message*/
	}
}

function register(registerForm) {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
}


//When the document loads, loginDiv and regsiterDiv are both hidden and the introDiv is shown.
			$(document).ready(function() {
				$("#logInDiv").hide();
				$("#registerDiv").hide();
				
				//If you click sign in, it hides the introDiv and shows the logInDiv.
				$("#signInButton").click(function(){
    				$("#introDiv").fadeOut("slow");
					$("#logInDiv").fadeIn("slow");
				});
				
				//If you click the back button on the logInDiv page, it fades the div out and shows the introDiv again.
				$("#backButton").click(function(){ 
    				$("#logInDiv").fadeOut("slow");
					$("#introDiv").fadeIn("slow");
				});
				
				//On the register page if you click the back button it fades the div out and shows the introDiv again.
				$("#registerBackButton").click(function(){
    				$("#registerDiv").fadeOut("slow");
					$("#introDiv").fadeIn("slow");
				});
				
				//If you click the register button it fades out the current div and shows the registerDiv.
				$("#registerButton").click(function(){
    				$("#introDiv").fadeOut("slow");
					$("#registerDiv").fadeIn("slow");
				});
			});
	