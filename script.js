const switchButton = document.querySelector(".sign__up__link");
const form = document.querySelector(".form_block__form");
const title = document.querySelector(".form_block__title");
const question = document.querySelector(".dont__have");
const forgotPassword = document.querySelector(".forgot__password");

let currentForm = "signIn";

function switchForm() {
   if (currentForm === "signIn") {
      title.innerHTML = "Sign Up";
      question.innerHTML = "Already have an account?";
      switchButton.innerHTML = "Log in";
      forgotPassword.style.display = "none";
      form.innerHTML = `<div class="email form_element">
                     <label for="email_up">Email</label>
                     <input
                        type="email"
                        class="blue default_input"
                        id="email_up"
                        placeholder="Placeholder"
                        required
                     />
                  </div>
                  <div class="password form_element">
                     <label for="password_up">Password</label>
                     <input
                        type="password"
                        class="blue default_input"
                        id="password_up"
                        placeholder="Placeholder"
                        required
                     />
                  </div>
                  <div class="confirm form_element">
                     <label for="confirm_up">Confirm Password</label>
                     <input
                        type="password"
                        class="blue default_input"
                        id="confirm_up"
                        placeholder="Placeholder"
                        required
                     />
                  </div>
                  <div class="fullname form_element">
                     <label for="fullname_up">Full Name</label>
                     <input
                        type="text"
                        class="blue default_input"
                        id="fullname_up"
                        placeholder="Placeholder"
                        required
                     />
                  </div>
                  <div class="sumbit">
                     <input
                        class="sign__up__btn btn"
                        type="submit"
                        value="SIGN UP"
                        required
                     />
                  </div>
                  <div class="description">
                     By clicking Join now, you agree to the LinkedIn User <br />
                     Agreement, Privacy Policy, and Cookie Policy
                  </div>`;
      currentForm = "signUp";
   } else {
      title.innerHTML = "Sign In";
      question.innerHTML = "Don't have an <br /> account?";
      switchButton.innerHTML = "Sign <br /> up";
      forgotPassword.style.display = "block";
      form.innerHTML = `<div class="email form_element">
                     <label for="email_in">Email</label>
                     <input
                        type="email"
                        class="blue default_input"
                        id="email_in"
                        placeholder="Placeholder"
                        required
                     />
                  </div>
                  <div class="password form_element">
                     <label for="password_in">Password</label>
                     <input
                        type="password"
                        class="blue default_input"
                        id="password_in"
                        placeholder="Placeholder"
                        inputmode="numeric"
                        required
                     />
                  </div>
                  <div class="sumbit">
                     <input
                        class="sign__in__btn btn"
                        type="submit"
                        value="SIGN IN"
                        required
                     />
                  </div>`;
      currentForm = "signIn";
   }
}

switchButton.onclick = switchForm;
