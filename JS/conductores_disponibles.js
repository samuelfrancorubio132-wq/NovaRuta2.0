document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // LISTAS DESPLEGABLES
    // =========================================

    const botones = document.querySelectorAll(".titulo-desplegable");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const desplegable = boton.parentElement;

            desplegable.classList.toggle("activo");

        });

    });


    // =========================================
    // FECHA ACTUAL
    // =========================================

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