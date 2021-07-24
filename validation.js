const Button = document.querySelector(".sign__up__link");

let inputs = document.querySelectorAll("input"),
   emailInputs = document.querySelectorAll("input[type='email']"),
   passwordInputs = document.querySelectorAll("input[type='password']"),
   nameInputs = document.querySelectorAll("input[type='text']");

emailInputs.forEach((item) => {
   item.pattern = "^[a-zA-Z0-9\\.]+@[a-zA-Z0-9]+\\.+[a-zA-Z]+$";
});

passwordInputs.forEach((item) => {
   item.pattern = "[0-9]{6,10}";
});

Button.addEventListener("click", () => {
   inputs = document.querySelectorAll("input");
   emailInputs = document.querySelectorAll("input[type='email']");
   passwordInputs = document.querySelectorAll("input[type='password']");
   nameInputs = document.querySelectorAll("input[type='text']");

   emailInputs.forEach((item) => {
      item.pattern = "^[a-zA-Z0-9\\.]+@[a-zA-Z0-9]+\\.+[a-zA-Z]+$";
   });

   passwordInputs.forEach((item) => {
      item.pattern = "[0-9]{6,10}";
   });

   nameInputs.forEach((item) => {
      item.pattern = "^[a-zA-Zа-яА-Я]+\\s+[a-zA-Zа-яА-Я]+$";
   });
});
