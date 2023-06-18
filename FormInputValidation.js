const makePasswordVisible = document.querySelector('.password-visible');

const userPassword = document.querySelector('.user-password');

let confirmPassword = document.querySelector('.confirm-password');

//Creating event handlers for each of the button

makePasswordVisible.addEventListener('click', function(){

  if(userPassword.type === 'password'){

    userPassword.type = 'text';

    makePasswordVisible.innerHTML = '<i class="fa-regular fa-eye-slash fa-1x"></i>';

  }else{

    userPassword.type = 'password';

    makePasswordVisible.innerHTML = '<i class="fa-regular fa-eye fa-1x"></i>';

  }

})

PasswordVisible.addEventListener('click', function(){

  if(confirmPassword.type === 'password'){

    confirmPassword.type = 'text';

    PasswordVisible.innerHTML = '<i class="fa-regular fa-eye-slash fa-1x"></i>';

  }else{

    confirmPassword.type = 'password';

    PasswordVisible.innerHTML = '<i class="fa-regular fa-eye fa-1x"></i>';

  }

})

//To check password Length if its upt to 8 and mark a password requirement

userPassword.addEventListener('input', function(){

  const minPassWordLength = 8;

  const userPasswordValue = userPassword.value;

  if (userPasswordValue.length >= minPassWordLength) {

    document.querySelector('.check1').innerHTML = '<i class="fa-regular fa-circle-check"></i>';

  }else{

    document.querySelector('.check1').innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

  }

  confirmPassword.addEventListener('input',function(){

    if (userPasswordValue == confirmPassword.value) {

      document.querySelector('.check2').innerHTML = '<i class="fa-regular fa-circle-check"></i>';

    } else {

      document.querySelector('.check2').innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

    }

  })

  })

//To check if the password field contains appropriate characters

//for email validation

const userEmail = document.querySelector('.email-el');

const emailValidator = '@gmail.com';

let reportEl = document.querySelector('.report');

let validator = document.querySelector('.valid');

userEmail.addEventListener('input',function(){

  let userEmailValue = userEmail.value;

  

  if (userEmailValue.toLowerCase().includes(emailValidator.toLowerCase())) {

    validator.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

    reportEl.textContent = 'Email address is valid!';

    reportEl.style.color = '#16B0AC';

  }else{

    validator.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

    reportEl.textContent = 'Enter a valid email';

    reportEl.style.color = '#ff0000';

  }

})

//for choice selection selector

const displayChoice = 

document.querySelector('#displayChoice');

const userChooseStudent = 

document.querySelector('.student');

const userChooseTeacher =

  document.querySelector('.teacher');

const userChooseResearcher =

document.querySelector('.researcher');

let showDropDown = 

document.querySelector('.icon-button');

let removeDropDown = 

document.querySelector('.icon-button2');

 let categorySelector = document.querySelector('.category-selector');

showDropDown.addEventListener('click', function(){

    categorySelector.style.display = 'flex';

    showDropDown.style.display = 'none';

    removeDropDown.style.display = 'inline';

    //showDropDown.innerHTML = '<i class="fa-solid fa-angle-up fa-1x">';

})

removeDropDown.addEventListener('click', function() {

    categorySelector.style.display = 'none';

    showDropDown.style.display = 'inline';

    removeDropDown.style.display = 'none';

})

