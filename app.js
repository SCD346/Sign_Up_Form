// store signup form element
// add submit event listener
const signUpForm = document.getElementById('dkh-signup-form');
signUpForm.addEventListener('submit', handleSignupFormSubmit);

// callback function for signup form submit listener
function handleSignupFormSubmit(e) {
    // prevernt default browser behaviour
    e.preventDefault();
    console.log('submit', e)

    const formDataEntries = new FormData(signUpForm).entries();
    const { email, password } = Object.fromEntries(formDataEntries);

    // submit email and password to an API

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validateEmail(password);

    if (!emailErrorMessage) {
        // selector: email form field element
        const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
        // render email error message
        emailErrorMessageElement.innerText = emailErrorMessage;
    }

    if (passwordErrorMessage) {
        // selector: email form field message element
        const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
        // render password error message
        passwordErrorMessageElement.innerText = passwordErrorMessage;
    }
}

//Password Validation
function validatePassword(password, minlenght) {
    if (!password) return 'Password is required';
    if (password.length < minlenght) {
        return `Password must be at least ${minlenght} characters long`;
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        return 'Please use at least one capital letter.'
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        return 'Please use at least one number.'
    }
    return '';
}

//Email Validation
function validateEmail(email) {
    if (!email) return 'Email is required';
      
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
  
    return '';
  }