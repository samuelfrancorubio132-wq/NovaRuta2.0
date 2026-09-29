document.addEventListener("DOMContentLoaded", function () {


    const botones = document.querySelectorAll(".titulo-desplegable");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const desplegable = boton.parentElement;

            desplegable.classList.toggle("activo");

        });

    });



    const fecha = new Date();

    const opciones = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const fechaActual = fecha.toLocaleDateString(
        "es-CO",
        opciones
    );

    document.getElementById("fecha-actual").textContent = fechaActual;

});