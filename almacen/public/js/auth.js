  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault(); // evita que recargue la página

    // Validación rápida (opcional)
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    if (!name || !email) {
      Swal.fire("Faltan datos", "Por favor completa el formulario", "warning");
      return;
    }

    // Simular envío exitoso
    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada con éxito!',
      text: 'Serás redirigido al detalle de tu pedido',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirigir (puedes cambiar esta URL)
      window.location.href = "/miscelanea";
    });
  });