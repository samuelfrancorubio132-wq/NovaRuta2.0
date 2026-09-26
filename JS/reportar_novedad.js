
// Esperar a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const cedula = document.getElementById("cedula");
    const placa = document.getElementById("placa");
    const password = document.getElementById("password");
    const boton = document.querySelector("button");


    // Acción al presionar "Continuar"
    boton.addEventListener("click", function (event) {

        event.preventDefault();


        // Obtener los valores escritos
        const valorCedula = cedula.value.trim();
        const valorPlaca = placa.value.trim();
        const valorPassword = password.value.trim();


        // Validar cédula vacía
        if (valorCedula === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa tu cédula.",
                confirmButtonText: "Aceptar"
            });

            cedula.focus();

            return;
        }


        // Validar placa vacía
        if (valorPlaca === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa la placa del vehículo.",
                confirmButtonText: "Aceptar"
            });

            placa.focus();

            return;
        }


        // Validar contraseña vacía
        if (valorPassword === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa tu contraseña.",
                confirmButtonText: "Aceptar"
            });

            password.focus();

            return;
        }


        // Validar que la cédula solamente tenga números
        if (!/^[0-9]+$/.test(valorCedula)) {

            Swal.fire({
                icon: "error",
                title: "Cédula inválida",
                text: "La cédula solamente debe contener números.",
                confirmButtonText: "Aceptar"
            });

            cedula.focus();

            return;
        }


        // Validar longitud de la cédula
        if (valorCedula.length < 6 || valorCedula.length > 10) {

            Swal.fire({
                icon: "error",
                title: "Cédula inválida",
                text: "La cédula debe tener entre 6 y 10 números.",
                confirmButtonText: "Aceptar"
            });

            cedula.focus();

            return;
        }


        // Validar placa
        if (!/^[A-Za-z0-9-]+$/.test(valorPlaca)) {

            Swal.fire({
                icon: "error",
                title: "Placa inválida",
                text: "La placa contiene caracteres no válidos.",
                confirmButtonText: "Aceptar"
            });

            placa.focus();

            return;
        }


        // Convertir placa a mayúsculas
        placa.value = valorPlaca.toUpperCase();


        // Validar formato de placa
        if (placa.value.length < 5 || placa.value.length > 7) {

            Swal.fire({
                icon: "error",
                title: "Placa inválida",
                text: "Verifica que la placa del vehículo sea correcta.",
                confirmButtonText: "Aceptar"
            });

            placa.focus();

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

                // Mostrar los datos en consola
                console.log("Cédula:", valorCedula);
                console.log("Placa:", placa.value);
                console.log("Contraseña:", valorPassword);


                // Aquí posteriormente puedes enviar
                // los datos a otra página o base de datos.

                Swal.fire({
                    icon: "info",
                    title: "Bienvenido a NovaRuta",
                    text: "Puedes continuar con el proceso.",
                    confirmButtonText: "Aceptar"
                    
                });

            }

        });

    });


    // Convertir automáticamente la placa a mayúsculas
    placa.addEventListener("input", function () {

        placa.value = placa.value.toUpperCase();

    });


    // Permitir solamente números en la cédula
    cedula.addEventListener("input", function () {

        cedula.value = cedula.value.replace(/[^0-9]/g, "");

    });


    // Mostrar mensaje cuando el usuario entra al campo de cédula
    cedula.addEventListener("focus", function () {

        console.log("Campo de cédula seleccionado.");

    });


    // Mostrar mensaje cuando el usuario entra al campo de placa
    placa.addEventListener("focus", function () {

        console.log("Campo de placa seleccionado.");

    });


    // Mostrar mensaje cuando el usuario entra al campo de contraseña
    password.addEventListener("focus", function () {

        console.log("Campo de contraseña seleccionado.");

    });


    // Mostrar mensaje en consola cuando cargue la página
    console.log("Página NovaRuta - Conductor cargada correctamente.");

});
