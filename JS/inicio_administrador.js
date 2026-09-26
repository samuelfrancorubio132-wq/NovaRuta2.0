document.addEventListener("DOMContentLoaded", function () {
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const llave = document.getElementById("password");
    const botonContinuar = document.querySelector("button");

    botonContinuar.addEventListener("click", function () {
        // Validar correo
        if (correo.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo vacío",
                text: "Por favor, ingrese el correo de administrador."
            });
            return;
        }
        if (correo.value.indexOf("@") === -1) {
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "El correo debe contener el símbolo '@'."
            });
            return;
        }

        // Validar contraseña
        if (contrasena.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo vacío",
                text: "Por favor, ingrese la contraseña."
            });
            return;
        }
        if (contrasena.value.length < 6) {
            Swal.fire({
                icon: "error",
                title: "Contraseña corta",
                text: "La contraseña debe tener al menos 6 caracteres."
            });
            return;
        }

        // Validar llave de acceso
        if (llave.value.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo vacío",
                text: "Por favor, ingrese la llave de acceso."
            });
            return;
        }

        // ✅ Si todo está correcto
        Swal.fire({
            icon: "success",
            title: "Validación exitosa",
            text: "Accediendo al panel de administrador..."
        }).then(() => {
            // Redirigir a la página de bienvenida
            window.location.href = "bienvenido_administrador.html";
        });
    });
});
