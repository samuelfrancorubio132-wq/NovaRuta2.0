
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const cedula = document.getElementById("cedula");
    const placa = document.getElementById("placa");
    const password = document.getElementById("password");
    const boton = document.querySelector("button");


    boton.addEventListener("click", function (event) {

        event.preventDefault();


        const valorCedula = cedula.value.trim();
        const valorPlaca = placa.value.trim();
        const valorPassword = password.value.trim();


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


        placa.value = valorPlaca.toUpperCase();


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


        Swal.fire({
            icon: "success",
            title: "Datos correctos",
            text: "Los datos fueron ingresados correctamente.",
            confirmButtonText: "Continuar"
        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                console.log("Cédula:", valorCedula);
                console.log("Placa:", placa.value);
                console.log("Contraseña:", valorPassword);



                Swal.fire({
                    icon: "info",
                    title: "Bienvenido a NovaRuta",
                    text: "Puedes continuar con el proceso.",
                    confirmButtonText: "Aceptar"

                });

            }

        });

    });


    placa.addEventListener("input", function () {

        placa.value = placa.value.toUpperCase();

    });


    cedula.addEventListener("input", function () {

        cedula.value = cedula.value.replace(/[^0-9]/g, "");

    });


    cedula.addEventListener("focus", function () {

        console.log("Campo de cédula seleccionado.");

    });


    placa.addEventListener("focus", function () {

        console.log("Campo de placa seleccionado.");

    });


    password.addEventListener("focus", function () {

        console.log("Campo de contraseña seleccionado.");

    });


    console.log("Página NovaRuta - Conductor cargada correctamente.");

});
