var passwordChecker = function (password) {
	var correctPassword = apple;
	return password == correctPassword;
};
document.getElementById('checkPassword').onclick = function () {

	var foodCount = parseInt(document.getElementById('password').value);

	if (checkPassword (foodCount) ) {
		document.getElementById('foodSupply').innerHTML = '213 sandwiches';
	}
	else {
		document.getElementById('foodSupply').innerHTML = 'incorrect';
	}
};