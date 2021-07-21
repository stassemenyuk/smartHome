const switchButton = document.querySelector(".sign__up__link");
const form = document.querySelector(".form_block__form");
const title = document.querySelector(".form_block__title");
const question = document.querySelector(".dont__have");
const forgotPassword = document.querySelector(".forgot__password");

let counter = 1;

function switchForm() {
   if (counter === 1) {
      title.innerHTML = "Sign Up";
      question.innerHTML = "Already have an account?";
      switchButton.innerHTML = "Log in";
      forgotPassword.style.display = "none";
      form.innerHTML = `<div class="email form_element">
                     <label for="email_up">Email</label>
                     <input
                        type="email"
                        class="blue"
                        id="email_up"
                        placeholder="Placeholder"
                        pattern="^[a-zA-Z0-9\\.]+@[a-zA-Z0-9]+\\.+[a-zA-Z]+$"
                        required
                     />
                  </div>
                  <div class="password form_element">
                     <label for="password_up">Password</label>
                     <input
                        type="password"
                        class="blue"
                        id="password_up"
                        placeholder="Placeholder"
                        pattern="[0-9]{6,10}"
                        required
                     />
                  </div>
                  <div class="confirm form_element">
                     <label for="confirm_up">Confirm Password</label>
                     <input
                        type="password"
                        class="blue"
                        id="confirm_up"
                        placeholder="Placeholder"
                        pattern="[0-9]{6,10}"
                        required
                     />
                  </div>
                  <div class="fullname form_element">
                     <label for="fullname_up">Full Name</label>
                     <input
                        type="text"
                        class="blue"
                        id="fullname_up"
                        placeholder="Placeholder"
                        pattern="^[a-zA-Zа-яА-Я]+\\s+[a-zA-Zа-яА-Я]+$"
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
      counter++;
   } else {
      title.innerHTML = "Sign In";
      question.innerHTML = "Don't have an <br /> account?";
      switchButton.innerHTML = "Sign <br /> up";
      forgotPassword.style.display = "block";
      form.innerHTML = `<div class="email form_element">
                     <label for="email_in">Email</label>
                     <input
                        type="email"
                        class="blue"
                        id="email_in"
                        placeholder="Placeholder"
                        pattern="^[a-zA-Z0-9\\.]+@[a-zA-Z0-9]+\\.+[a-zA-Z]+$"
                        required
                     />
                  </div>
                  <div class="password form_element">
                     <label for="password_in">Password</label>
                     <input
                        type="password"
                        class="blue"
                        id="password_in"
                        placeholder="Placeholder"
                        inputmode="numeric"
                        pattern="[0-9]{6,10}"
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
      counter--;
   }
}

switchButton.onclick = switchForm;
