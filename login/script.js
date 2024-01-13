

const btnlogin = document.getElementById("sign-in"),
      btnregistro = document.getElementById("sign-up"),
      formregister = document.querySelector(".registro"),
      formlogin = document.querySelector(".login");

// evento al momento de hacer click en el boton login se oculta el formulario de registro y trae al formulario de login
btnlogin.addEventListener("click", e => {
  formregister.classList.add("hide");
  formlogin.classList.remove("hide")
})

// evento al momento de hacer click en el boton registro se oculta el formulario de login y trae al formulario de registro
btnregistro.addEventListener("click", e => {
  formlogin.classList.add("hide");
  formregister.classList.remove("hide")
})