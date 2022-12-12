let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;




function validateForm() {
  
  var fields = [
    "first_name",
    "last_name",
    "email",
    "phoneNumber",
    "password",
    "confirm_password",
  ];

  var i, l = fields.length;
  for (i = 0; i < l; i++) {
    formInput = (document.querySelector(`#${fields[i]}`));
    if (formInput.value == "") {
      console.log(formInput)

      return false;
    }
  }
  console.log(formInput.value)
  return true;
}

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");


btn.onclick = () => {
  if (validateForm()) {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
  }
};
