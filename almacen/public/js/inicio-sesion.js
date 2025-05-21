function seleccionarRol(rol) {
  if (rol === "cliente") {
    document.getElementById("clienteSection").classList.remove("hidden");
    document.getElementById("adminSection").classList.add("hidden");
    document.getElementById("btnCliente").classList.add("active");
    document.getElementById("btnAdmin").classList.remove("active");
  } else {
    document.getElementById("clienteSection").classList.add("hidden");
    document.getElementById("adminSection").classList.remove("hidden");
    document.getElementById("btnCliente").classList.remove("active");
    document.getElementById("btnAdmin").classList.add("active");
  }
}
const toggleBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordEmpleado');
const eyeOpenIcon = document.querySelector('.eye-open');
const eyeClosedIcon = document.querySelector('.eye-closed');

toggleBtn.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOpenIcon.style.display = 'none';
    eyeClosedIcon.style.display = 'inline-block';
  } else {
    passwordInput.type = 'password';
    eyeOpenIcon.style.display = 'inline-block';
    eyeClosedIcon.style.display = 'none';
  }
});