
document.addEventListener("DOMContentLoaded", function () {

    const rutas = document.querySelectorAll(".ruta");
    const botonesAceptar = document.querySelectorAll(".aceptar");
    const botonesEsperar = document.querySelectorAll(".esperar");
    const botonesCancelar = document.querySelectorAll(".cancelar");

    const botonEnviar = document.querySelector(".enviar");
    const botonCerrar = document.querySelector(".cerrar");

    const campoNovedad = document.querySelector(".novedad textarea");


    let rutaSeleccionada = null;



    botonesAceptar.forEach(function (boton, index) {

        boton.addEventListener("click", function (event) {

            event.stopPropagation();


            const ruta = rutas[index];

            const nombre =
                ruta.querySelector(".nombre-ruta").textContent.trim();

            const horario =
                ruta.querySelector(".hora").textContent.trim();

            const recorrido =
                ruta.querySelector(".recorrido").textContent
                    .replace(/\s+/g, " ")
                    .trim();


            Swal.fire({
                icon: "question",
                title: "¿Aceptar ruta?",
                html: `
                    <p><strong>${nombre}</strong></p>
                    <p>${horario}</p>
                    <p>${recorrido}</p>
                `,
                showCancelButton: true,
                confirmButtonText: "Sí, aceptar",
                cancelButtonText: "Cancelar"
            }).then(function (resultado) {

                if (resultado.isConfirmed) {

                    rutas.forEach(function (otraRuta) {

                        otraRuta.classList.remove("ruta-activa");

                    });


                    ruta.classList.add("ruta-activa");

                    rutaSeleccionada = index;


                    Swal.fire({
                        icon: "success",
                        title: "Ruta aceptada",
                        text: `${nombre} ha sido asignada correctamente.`,
                        confirmButtonText: "Aceptar"
                    });


                    console.log("Ruta aceptada:", nombre);
                    console.log("Horario:", horario);
                    console.log("Recorrido:", recorrido);

                }

            });

        });

    });


    botonesEsperar.forEach(function (boton, index) {

        boton.addEventListener("click", function (event) {

            event.stopPropagation();


            const ruta = rutas[index];

            const nombre =
                ruta.querySelector(".nombre-ruta").textContent.trim();


            Swal.fire({
                icon: "info",
                title: "Ruta en espera",
                text: `La ${nombre} ha sido puesta en espera.`,
                confirmButtonText: "Aceptar"
            });


            rutas.forEach(function (otraRuta) {

                otraRuta.classList.remove("ruta-activa");

            });


            ruta.classList.add("ruta-espera");


            console.log("Ruta en espera:", nombre);

        });

    });


    botonesCancelar.forEach(function (boton, index) {

        boton.addEventListener("click", function (event) {

            event.stopPropagation();


            const ruta = rutas[index];

            const nombre =
                ruta.querySelector(".nombre-ruta").textContent.trim();


            Swal.fire({
                icon: "warning",
                title: "¿Cancelar ruta?",
                text: `¿Estás seguro de cancelar ${nombre}?`,
                showCancelButton: true,
                confirmButtonText: "Sí, cancelar",
                cancelButtonText: "No, conservar"
            }).then(function (resultado) {

                if (resultado.isConfirmed) {

                    ruta.classList.remove("ruta-activa");
                    ruta.classList.remove("ruta-espera");

                    ruta.classList.add("ruta-cancelada");


                    Swal.fire({
                        icon: "success",
                        title: "Ruta cancelada",
                        text: `${nombre} fue cancelada correctamente.`,
                        confirmButtonText: "Aceptar"
                    });


                    console.log("Ruta cancelada:", nombre);

                }

            });

        });

    });


    rutas.forEach(function (ruta, index) {

        ruta.addEventListener("click", function () {

            const nombre =
                ruta.querySelector(".nombre-ruta").textContent.trim();

            const horario =
                ruta.querySelector(".hora").textContent.trim();


            console.log("Ruta seleccionada:", nombre);


            Swal.fire({
                icon: "info",
                title: nombre,
                html: `
                    <p><strong>Horario:</strong><br>${horario}</p>
                `,
                confirmButtonText: "Aceptar"
            });

        });

    });


    botonEnviar.addEventListener("click", function () {

        const novedad = campoNovedad.value.trim();


        if (novedad === "") {

            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, escribe la novedad que deseas reportar.",
                confirmButtonText: "Aceptar"
            });

            campoNovedad.focus();

            return;

        }

        Swal.fire({
            icon: "question",
            title: "¿Enviar novedad?",
            text: "Verifica que la información sea correcta.",
            showCancelButton: true,
            confirmButtonText: "Sí, enviar",
            cancelButtonText: "Cancelar"
        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                console.log("Novedad reportada:", novedad);


                Swal.fire({
                    icon: "success",
                    title: "Novedad enviada",
                    text: "La novedad fue reportada correctamente.",
                    confirmButtonText: "Aceptar"
                });


                campoNovedad.value = "";

            }

        });

    });


    botonCerrar.addEventListener("click", function () {

        Swal.fire({
            icon: "warning",
            title: "¿Cerrar sesión?",
            text: "¿Estás seguro de que deseas cerrar tu sesión?",
            showCancelButton: true,
            confirmButtonText: "Sí, cerrar sesión",
            cancelButtonText: "Cancelar"
        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                Swal.fire({
                    icon: "success",
                    title: "Sesión cerrada",
                    text: "Has cerrado sesión correctamente.",
                    confirmButtonText: "Aceptar"
                }).then(function () {


                    console.log("Sesión cerrada.");

                });

            }

        });

    });



    campoNovedad.addEventListener("input", function () {

        console.log(
            "Novedad escrita:",
            campoNovedad.value
        );

    });



    console.log(
        "Página de rutas asignadas cargada correctamente."
    );

});

