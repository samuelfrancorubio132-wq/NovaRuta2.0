
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");

    const numero = document.getElementById("numero");
    const paraderos = document.getElementById("paraderos");
    const destinoInicial = document.getElementById("destinoInicial");
    const destinoFinal = document.getElementById("destinoFinal");

    const botonVolver = document.querySelector(".volver");



    formulario.addEventListener("submit", function (event) {

        event.preventDefault();


        const valorNumero = numero.value.trim();
        const valorParaderos = paraderos.value.trim();
        const valorDestinoInicial = destinoInicial.value.trim();
        const valorDestinoFinal = destinoFinal.value.trim();


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



        numero.value = valorNumero;

        paraderos.value = valorParaderos.toUpperCase();

        destinoInicial.value =
            valorDestinoInicial.toUpperCase();

        destinoFinal.value =
            valorDestinoFinal.toUpperCase();



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

            if (resultado.isConfirmed) {

                Swal.fire({
                    icon: "success",
                    title: "Ruta creada",
                    text: "La ruta fue creada correctamente.",
                    confirmButtonText: "Aceptar"
                }).then(function () {

                    console.log("Número de ruta:", numero.value);
                    console.log("Paraderos:", paraderos.value);
                    console.log("Destino inicial:", destinoInicial.value);
                    console.log("Destino final:", destinoFinal.value);


                    formulario.reset();

                });

            }

        });

    });



    paraderos.addEventListener("input", function () {

        paraderos.value =
            paraderos.value.toUpperCase();

    });



    destinoInicial.addEventListener("input", function () {

        destinoInicial.value =
            destinoInicial.value.toUpperCase();

    });



    destinoFinal.addEventListener("input", function () {

        destinoFinal.value =
            destinoFinal.value.toUpperCase();

    });



    numero.addEventListener("input", function () {

        numero.value =
            numero.value.replace(/[^0-9]/g, "");

    });



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



    console.log("Página Crear ruta cargada correctamente.");

});
