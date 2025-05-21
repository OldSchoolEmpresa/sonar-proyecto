document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM cargado correctamente.");

  // Obtiene los elementos
  const btnCliente = document.getElementById("btnCliente");
  const btnAdmin = document.getElementById("btnAdmin");
  const clienteSection = document.getElementById("clienteSection");
  const adminSection = document.getElementById("adminSection");
  const form = document.getElementById("registerForm");

  // Verifica si los elementos existen
  if (!btnCliente || !btnAdmin || !clienteSection || !adminSection || !form) {
    console.error(
      "❌ Error: Uno o más elementos no fueron encontrados en el DOM."
    );
    return;
  }

  // Función para alternar entre Cliente y Administrador
  function toggleRole(role) {
    if (role === "cliente") {
      clienteSection.classList.remove("hidden");
      adminSection.classList.add("hidden");
      btnCliente.classList.add("active");
      btnAdmin.classList.remove("active");
    } else {
      adminSection.classList.remove("hidden");
      clienteSection.classList.add("hidden");
      btnAdmin.classList.add("active");
      btnCliente.classList.remove("active");
    }
  }

  // Eventos para cambiar de rol
  btnCliente.addEventListener("click", () => toggleRole("cliente"));
  btnAdmin.addEventListener("click", () => toggleRole("admin"));

  // Validación antes de enviar el formulario
  form.addEventListener("submit", function (event) {
    let valid = true;
    const inputs = form.querySelectorAll("input:not([type='hidden'])");

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "none";
      }
    });

    if (!valid) {
      event.preventDefault();
      alert("❌ Por favor, completa todos los campos.");
    }
  });
});
