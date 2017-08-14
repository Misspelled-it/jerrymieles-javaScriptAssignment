function firstfocus(){
		document.getElementsByName("userid")[0].focus();
}

function userid_validation(min, max){
	var user = document.getElementsByName("userid")[0].value;
	if (user.length == 0){
			console.log("User ID should not be empty!");
	}
	document.getElementsByName("passid")[0].focus();
}

function passid_validation(min, max){
	var pass = document.getElementsByName("passid")[0].value;
	if(pass.length == 0){
		console.log("User password should not be empty!")
	}
	document.getElementsByName("username")[0].focus();
}

function allLetter(){
	var username = document.getElementsByName("username")[0].value;
	for(var i=0;i<username.length;i++){
			if(((username[i] > '@') && (username[i] < '[')) || ((username[i] > '`') && (username[i] < '{'))){
				continue;
			}
			// else if(username[i] == undefined){
			// 	break;
			// }
			else{
				console.log("User's name should have alphabet characters only!");
				break;
			}
	}
	document.getElementsByName("email")[0].focus();
}

function ValidateEmail(){
	var email = document.getElementsByName("email")[0].value;
	var valid;
	for(var i=0;i<email.length;i++){
			//email must have '@'
			if(email[i] == '@')
			{
					for(var j = i; j<email.length; j++){
							//Email must have a '.'
							if(email[j] == '.'){
								valid = true;
							}
					}
			}
	}
	if(!valid){
			console.log("You have entered an invalid email format!");
	}
}