document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector(".formulario");
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const password = document.getElementById("password");
    const boton = document.getElementById("btnguardar");

    boton.addEventListener("click", function (event) {

        event.preventDefault();

        const valorCorreo = correo.value.trim();
        const valorContrasena = contrasena.value.trim();
        const valorPassword = password.value.trim();

        if (valorCorreo === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor ingrese el correo."
            });
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorCorreo)) {
            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Ingrese un correo válido."
            });
            return;
        }

        if (valorContrasena === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor ingrese la contraseña."
            });
            return;
        }

        if (valorPassword === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor ingrese la llave de acceso."
            });
            return;
        }

        formulario.submit();

    });

});