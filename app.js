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