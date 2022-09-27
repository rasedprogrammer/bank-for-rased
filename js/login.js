document.getElementById('login-btn').addEventListener('click', function(){
	// Get Email
	const emailField = document.getElementById('email');
	const email = emailField.value;

	//Get Password
	const passwordField = document.getElementById('password');
	const password = passwordField.value;

	// Validation Check
	if(email === 'rasedprogrammer@gmail.com' && password === 'Rased'){
		window.location.href = './bank.html';
	}else{
		alert('NonValid User');
	}
})