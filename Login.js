let goToLoginPage = document.querySelector('.login-button');

let goToSignupPage = document.querySelector('.signup-button');

let loginContent = document.querySelector('.user-login');

let signupContent = 

document.querySelector('.user-signup');

function showLogin(){

  signupContent.style.display = 'none';

  loginContent.style.display = 'block';

}

function showSignup(){

  signupContent.style.display = 'block';

  loginContent.style.display = 'none';

}

function displayLogin() {

  signupContent.style.display = 'none';

  loginContent.style.display = 'block';

}

function displaySignup() {

  signupContent.style.display = 'block';

  loginContent.style.display = 'none';

}

let displayLoginForm = function(){

  signupContent.style.display = 'none';

  loginContent.style.display = 'block';

}

let displaySignupForm = function(){

  signupContent.style.display = 'block';

  loginContent.style.display = 'none';

}

goToLoginPage.addEventListener('click', function(){

        displayLoginForm();

})

goToSignupPage.addEventListener('click', function(){

      displaySignupForm();

})

