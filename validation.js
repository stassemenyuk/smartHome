let inputs, emailInputs, passwordInputs, nameInputs;

setInterval(() => {
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

   inputs.forEach((item) => {
      item.addEventListener("input", (event) => {
         if (!event.target.checkValidity()) {
            item.classList.remove("blue");
            item.classList.add("red");
         } else {
            item.classList.add("blue");
            item.classList.remove("red");
         }
      });
   });
}, 10);
