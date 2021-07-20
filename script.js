const signUpButton = document.querySelector(".sign__up__link");
const signInButton = document.querySelector(".log_in");
const blockSignIn = document.querySelector(".form_block__sign_in");
const blockSignUp = document.querySelector(".form_block__sign_up");

function toggleActiveClass() {
   blockSignIn.classList.toggle("active");
   blockSignUp.classList.toggle("active");
}

signUpButton.onclick = toggleActiveClass;
signInButton.onclick = toggleActiveClass;
