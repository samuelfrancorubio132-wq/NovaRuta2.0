document.addEventListener("DOMContentLoaded", function () {

    const botonEnviar = document.querySelector(".enviar");

    botonEnviar.addEventListener("click", function (e) {

        e.preventDefault();

        alert("El botón funciona");

    });

});
