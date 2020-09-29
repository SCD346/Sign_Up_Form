// store signup form element
// add submit event listener
const signUpForm = document.getElementById('dkh-signup-form');
signUpForm.addEventListener('submit', handleSignupFormSubmit);

// callback function for signup form submit listener
function handleSignupFormSubmit(e) {
    // prevernt default browser behaviour
    // TODO: add link to mdn docs
    e.preventDefault();
    console.log('submit', e)
}