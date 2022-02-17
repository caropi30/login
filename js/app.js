let btnLogIn = document.querySelector("#btnLogIn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let formInfo = document.querySelector(".formInfo");

function formValidation() {
  console.log(email.value, password.value);

  let emailValue = email.value;
  let passwordVaue = password.value;

  let emailCorrect = "Sí tiene arroba";
  let emailIncorrect = "No tiene arroba";

  for (let i = 0; i < emailValue.length; i++) {
    console.log(emailValue[i]);

    if (emailValue[i] === "@") {
      //emailCorrect;
      email.style = "border: 2px solid #06d6a0";
    } else {
      //emailIncorrect;
      email.style = "border: 2px solid #a4161a";
      /*formInfo.insertAdjacentHTML(
        "beforeend",
        ` <small class="alert">El formato de correo es incorrecto</small>
      `
      );*/
    }
  }

  if (passwordVaue >= 8) {
    console.log("la contraseña cumple con todos los requisitos");
    password.style = "border: 2px solid #06d6a0";
  } else {
    console.log(
      "las contraseñas no cumple con el largo de caractéres esperado"
    );
    password.style = "border: 2px solid #a4161a";
    formInfo.insertAdjacentHTML(
      "beforeend",
      ` <small class="alert">La contraseña debe tener al menos 8 caractéres</small>
      `
    );
  }
}

btnLogIn.addEventListener("click", function () {
  formValidation();
  formInfo.reset();
});
