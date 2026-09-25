
// Esperar a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const llave = document.getElementById("llave");
    const boton = document.querySelector("button");


    // Acción al presionar "Continuar"
    boton.addEventListener("click", function (event) {

        event.preventDefault();


        // Obtener los valores escritos
        const valorCorreo = correo.value.trim();
        const valorContrasena = contrasena.value.trim();
        const valorLlave = llave.value.trim();


        // Validar correo vacío
        if (valorCorreo === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa el correo del administrador.",
                confirmButtonText: "Aceptar"
            });

            correo.focus();

            return;
        }


        // Validar formato del correo
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorCorreo)) {

            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Por favor, ingresa un correo electrónico válido.",
                confirmButtonText: "Aceptar"
            });

            correo.focus();

            return;
        }


        // Validar contraseña vacía
        if (valorContrasena === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa la contraseña.",
                confirmButtonText: "Aceptar"
            });

            contrasena.focus();

            return;
        }


        // Validar longitud de contraseña
        if (valorContrasena.length < 6) {

            Swal.fire({
                icon: "error",
                title: "Contraseña inválida",
                text: "La contraseña debe tener mínimo 6 caracteres.",
                confirmButtonText: "Aceptar"
            });

            contrasena.focus();

            return;
        }


        // Validar llave de acceso vacía
        if (valorLlave === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa la llave de acceso.",
                confirmButtonText: "Aceptar"
            });

            llave.focus();

            return;
        }


        // Validar longitud de llave
        if (valorLlave.length < 4) {

            Swal.fire({
                icon: "error",
                title: "Llave inválida",
                text: "La llave de acceso debe tener mínimo 4 caracteres.",
                confirmButtonText: "Aceptar"
            });

            llave.focus();

            return;
        }


        // Si todos los datos son correctos
        Swal.fire({
            icon: "success",
            title: "Datos correctos",
            text: "Los datos fueron ingresados correctamente.",
            confirmButtonText: "Continuar"
        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                console.log("Correo:", valorCorreo);
                console.log("Contraseña ingresada correctamente.");
                console.log("Llave de acceso ingresada correctamente.");


                // Mensaje de bienvenida
                Swal.fire({
                    icon: "info",
                    title: "Bienvenido a NovaRuta",
                    text: "Puedes continuar con el panel de administrador.",
                    confirmButtonText: "Aceptar"
                });

            }

        });

    });


    // Convertir correo a minúsculas
    correo.addEventListener("input", function () {

        correo.value = correo.value.toLowerCase();

    });


    // Evitar espacios en la contraseña
    contrasena.addEventListener("input", function () {

        contrasena.value = contrasena.value.replace(/\s/g, "");

    });


    // Evitar espacios en la llave de acceso
    llave.addEventListener("input", function () {

        llave.value = llave.value.replace(/\s/g, "");

    });


    // Mensaje en consola al seleccionar el correo
    correo.addEventListener("focus", function () {

        console.log("Campo de correo seleccionado.");

    });


    // Mensaje en consola al seleccionar la contraseña
    contrasena.addEventListener("focus", function () {

        console.log("Campo de contraseña seleccionado.");

    });


    // Mensaje en consola al seleccionar la llave
    llave.addEventListener("focus", function () {

        console.log("Campo de llave de acceso seleccionado.");

    });


    // Mensaje en consola cuando cargue la página
    console.log("Página de administrador cargada correctamente.");

});
