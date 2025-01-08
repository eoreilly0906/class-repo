const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  const SignUp = {
    firstNameInput: firstNameInput.value.trim(),
    lastNameInput: lastNameInput.value.trim(),
    emailInput: emailInput.value.trim(),
    passwordInput: passwordInput.value.trim(),
  };

  localStorage.setItem('SignUp', JSON.stringify(SignUp));

  // TODO: Set new submission to local storage
});
