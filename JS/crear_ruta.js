
// Esperar a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");

    const numero = document.getElementById("numero");
    const paraderos = document.getElementById("paraderos");
    const destinoInicial = document.getElementById("destinoInicial");
    const destinoFinal = document.getElementById("destinoFinal");

    const botonVolver = document.querySelector(".volver");


    // ==========================================
    // ACCIÓN AL PRESIONAR "CONTINUAR"
    // ==========================================

    formulario.addEventListener("submit", function (event) {

        // Evitar que el formulario se envíe
        event.preventDefault();


        // Obtener los valores escritos
        const valorNumero = numero.value.trim();
        const valorParaderos = paraderos.value.trim();
        const valorDestinoInicial = destinoInicial.value.trim();
        const valorDestinoFinal = destinoFinal.value.trim();


        // ==========================================
        // VALIDAR NÚMERO DE RUTA
        // ==========================================

        if (valorNumero === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa el número de la ruta.",
                confirmButtonText: "Aceptar"
            });

            numero.focus();

            return;
        }


        // Validar que el número solamente tenga números
        if (!/^[0-9]+$/.test(valorNumero)) {

            Swal.fire({
                icon: "error",
                title: "Número inválido",
                text: "El número de la ruta solamente debe contener números.",
                confirmButtonText: "Aceptar"
            });

            numero.focus();

            return;
        }


        // ==========================================
        // VALIDAR PARADEROS
        // ==========================================

        if (valorParaderos === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa los paraderos de la ruta.",
                confirmButtonText: "Aceptar"
            });

            paraderos.focus();

            return;
        }


        // ==========================================
        // VALIDAR DESTINO INICIAL
        // ==========================================

        if (valorDestinoInicial === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa el destino inicial.",
                confirmButtonText: "Aceptar"
            });

            destinoInicial.focus();

            return;
        }


        // ==========================================
        // VALIDAR DESTINO FINAL
        // ==========================================

        if (valorDestinoFinal === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa el destino final.",
                confirmButtonText: "Aceptar"
            });

            destinoFinal.focus();

            return;
        }


        // ==========================================
        // VALIDAR QUE LOS DESTINOS SEAN DIFERENTES
        // ==========================================

        if (
            valorDestinoInicial.toLowerCase() ===
            valorDestinoFinal.toLowerCase()
        ) {

            Swal.fire({
                icon: "error",
                title: "Destinos iguales",
                text: "El destino inicial y el destino final deben ser diferentes.",
                confirmButtonText: "Aceptar"
            });

            destinoFinal.focus();

            return;
        }


        // ==========================================
        // CONVERTIR DATOS A MAYÚSCULAS
        // ==========================================

        numero.value = valorNumero;

        paraderos.value = valorParaderos.toUpperCase();

        destinoInicial.value =
            valorDestinoInicial.toUpperCase();

        destinoFinal.value =
            valorDestinoFinal.toUpperCase();


        // ==========================================
        // CONFIRMACIÓN DE CREACIÓN
        // ==========================================

        Swal.fire({
            icon: "question",
            title: "¿Crear ruta?",
            html: `
                <p><strong>Ruta:</strong> ${numero.value}</p>
                <p><strong>Paraderos:</strong> ${paraderos.value}</p>
                <p><strong>Destino inicial:</strong> ${destinoInicial.value}</p>
                <p><strong>Destino final:</strong> ${destinoFinal.value}</p>
            `,
            showCancelButton: true,
            confirmButtonText: "Sí, crear ruta",
            cancelButtonText: "Cancelar"
        }).then(function (resultado) {

            // Si el usuario confirma
            if (resultado.isConfirmed) {

                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: "success",
                    title: "Ruta creada",
                    text: "La ruta fue creada correctamente.",
                    confirmButtonText: "Aceptar"
                }).then(function () {

                    // Mostrar información en consola
                    console.log("Número de ruta:", numero.value);
                    console.log("Paraderos:", paraderos.value);
                    console.log("Destino inicial:", destinoInicial.value);
                    console.log("Destino final:", destinoFinal.value);


                    // Limpiar formulario
                    formulario.reset();

                });

            }

        });

    });


    // ==========================================
    // CONVERTIR PARADEROS A MAYÚSCULAS
    // ==========================================

    paraderos.addEventListener("input", function () {

        paraderos.value =
            paraderos.value.toUpperCase();

    });


    // ==========================================
    // CONVERTIR DESTINO INICIAL A MAYÚSCULAS
    // ==========================================

    destinoInicial.addEventListener("input", function () {

        destinoInicial.value =
            destinoInicial.value.toUpperCase();

    });


    // ==========================================
    // CONVERTIR DESTINO FINAL A MAYÚSCULAS
    // ==========================================

    destinoFinal.addEventListener("input", function () {

        destinoFinal.value =
            destinoFinal.value.toUpperCase();

    });


    // ==========================================
    // PERMITIR SOLAMENTE NÚMEROS EN RUTA
    // ==========================================

    numero.addEventListener("input", function () {

        numero.value =
            numero.value.replace(/[^0-9]/g, "");

    });


    // ==========================================
    // BOTÓN VOLVER
    // ==========================================

    botonVolver.addEventListener("click", function () {

        Swal.fire({
            icon: "question",
            title: "¿Deseas volver?",
            text: "Los datos que hayas escrito podrían perderse.",
            showCancelButton: true,
            confirmButtonText: "Sí, volver",
            cancelButtonText: "Cancelar"
        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                window.history.back();

            }

        });

    });


    // ==========================================
    // MENSAJES DE CONSOLA
    // ==========================================

    numero.addEventListener("focus", function () {

        console.log("Campo número de ruta seleccionado.");

    });


    paraderos.addEventListener("focus", function () {

        console.log("Campo paraderos seleccionado.");

    });


    destinoInicial.addEventListener("focus", function () {

        console.log("Campo destino inicial seleccionado.");

    });


    destinoFinal.addEventListener("focus", function () {

        console.log("Campo destino final seleccionado.");

    });


    // ==========================================
    // MENSAJE DE CARGA
    // ==========================================

    console.log("Página Crear ruta cargada correctamente.");

});
