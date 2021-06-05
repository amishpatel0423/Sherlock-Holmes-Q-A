var form = document.getElementById("Login");
form.addEventListener("submit",Login,false);

function Login(event) 
{
    
	var result = true;
	var elements = event.currentTarget;

	var email = elements[0].value;
	var password = elements[1].value;

	var email_v = /^[\w]+@uregina.ca$/;
	var pswd_v = /^(\S*)?\d+(\S*){6,}$/;
	
	document.getElementById("email_msg").innerHTML = "";
	document.getElementById("pswd_msg").innerHTML = "";

	//email validation
	if (email === null || email === "") {
		document.getElementById("email_msg").innerHTML = "Email address empty.";
		document.getElementById("e").style.color = "Red";
		result = false;
	} else if (email_v.test(email) === false) {
		document.getElementById("email_msg").innerHTML = "Email address wrong format. example: username@somewhere.sth";
		document.getElementById("e").style.color = "Red";
		result = false;
	} else if (email.length > 60) {
		document.getElementById("email_msg").innerHTML = "Email address too long. Maximum is 60 characters.";
		document.getElementById("e").style.color = "Red";
		result = false;
	}
	else
      {
        document.getElementById("e").style.color = "Black";
      }


	//password validation
	if (password === null || password === "") {
		document.getElementById("pswd_msg").innerHTML = "Password is empty.";
		document.getElementById("p").style.color = "Red";

		result = false;
	} else if (pswd_v.test(password) === false) {
		document.getElementById("pswd_msg").innerHTML = "Atleast 6 characters and one non-letter";
		document.getElementById("p").style.color = "Red";

		result = false;
	} else if (password.length <= 5) {
		document.getElementById("pswd_msg").innerHTML = "Should be atleast 6 characters";
		document.getElementById("p").style.color = "Red";

		result = false;
	}
	else
      {
        document.getElementById("p").style.color = "Black";
      }

	  event.preventDefault();

	if (result == true) 
	{
		location.href = "question_list.html";
		return true;
	} else 
	{
		return false;
	}
}