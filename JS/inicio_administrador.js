
document.addEventListener("DOMContentLoaded", function () {


    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const password = document.getElementById("password");
    const boton = document.getElementById("btnguardar");


    boton.addEventListener("click", function () {

        event.preventDefault();


        const valorCorreo = correo.value.trim();
        const valorContrasena = contrasena.value.trim();
        const valorPassword = password.value.trim();


        if (valorCorreo === "") {

            correo.focus();

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese el correo de administrador.",
                footer: "<a href=\"#\">¿Por qué aparece este mensaje?</a>"
            });

            return;
        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorCorreo)) {

            correo.focus();

            Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "El correo ingresado no es válido. Por favor ingrese un correo correcto.",
                footer: "<a href=\"#\">¿Por qué aparece este mensaje?</a>"
            });

            return;
        }


        if (valorContrasena === "") {

            contrasena.focus();

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese la contraseña.",
                footer: "<a href=\"#\">¿Por qué aparece este mensaje?</a>"
            });

            return;
        }



        if (valorContrasena.length < 6) {

            contrasena.focus();

            Swal.fire({
                icon: "error",
                title: "Contraseña incorrecta",
                text: "La contraseña debe tener mínimo 6 caracteres.",
                footer: "<a href=\"#\">¿Por qué aparece este mensaje?</a>"
            });

            return;
        }



        if (valorPassword === "") {

            password.focus();

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese la llave de acceso.",
                footer: "<a href=\"#\">¿Por qué aparece este mensaje?</a>"
            });

            return;
        }



        Swal.fire({
            title: "¡Buen trabajo!",
            text: "Ingresaste todos los datos correctamente.",
            icon: "success",
            confirmButtonText: "Continuar"
        }).then(function () {


            window.location.href = "bienvenido_administrador.html";

        });


        console.log("Correo:", valorCorreo);
        console.log("Contraseña:", valorContrasena);
        console.log("Llave de acceso:", valorPassword);

    });


});

