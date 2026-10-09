/* =========================================================
   NOVARUTA
   CARRUSEL EMPRESAS DE TRANSPORTE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       OBTENER ELEMENTOS
    ====================================================== */

    const slides = document.querySelectorAll(".slide");

    const indicadores =
        document.querySelectorAll(".indicador");

    const botonAnterior =
        document.querySelector(".anterior");

    const botonSiguiente =
        document.querySelector(".siguiente");

    const carrusel =
        document.querySelector(".carrusel-contenedor");


    /* =====================================================
       VARIABLES
    ====================================================== */

    let indiceActual = 0;

    let intervalo;


    /*
        Tiempo entre imágenes.

        5000 = 5 segundos
    */

    const tiempoCambio = 5000;



    /* =====================================================
       MOSTRAR SLIDE
    ====================================================== */

    function mostrarSlide(indice) {


        /* Quitar activo de todas las imágenes */

        slides.forEach(function (slide) {

            slide.classList.remove("activo");

        });


        /* Quitar activo de todos los indicadores */

        indicadores.forEach(function (indicador) {

            indicador.classList.remove("activo");

        });


        /* Activar imagen */

        slides[indice].classList.add("activo");


        /* Activar indicador */

        indicadores[indice].classList.add("activo");

    }



    /* =====================================================
       SIGUIENTE
    ====================================================== */

    function siguienteSlide() {


        indiceActual++;


        if (indiceActual >= slides.length) {

            indiceActual = 0;

        }


        mostrarSlide(indiceActual);

    }



    /* =====================================================
       ANTERIOR
    ====================================================== */

    function anteriorSlide() {


        indiceActual--;


        if (indiceActual < 0) {

            indiceActual = slides.length - 1;

        }


        mostrarSlide(indiceActual);

    }



    /* =====================================================
       INICIAR AUTOMÁTICAMENTE
    ====================================================== */

    function iniciarCarrusel() {


        intervalo = setInterval(
            siguienteSlide,
            tiempoCambio
        );

    }



    /* =====================================================
       DETENER CARRUSEL
    ====================================================== */

    function detenerCarrusel() {


        clearInterval(intervalo);

    }



    /* =====================================================
       REINICIAR CARRUSEL
    ====================================================== */

    function reiniciarCarrusel() {


        detenerCarrusel();

        iniciarCarrusel();

    }



    /* =====================================================
       BOTÓN SIGUIENTE
    ====================================================== */

    botonSiguiente.addEventListener(
        "click",
        function () {


            siguienteSlide();

            reiniciarCarrusel();


        }
    );



    /* =====================================================
       BOTÓN ANTERIOR
    ====================================================== */

    botonAnterior.addEventListener(
        "click",
        function () {


            anteriorSlide();

            reiniciarCarrusel();


        }
    );



    /* =====================================================
       INDICADORES
    ====================================================== */

    indicadores.forEach(
        function (indicador, index) {


            indicador.addEventListener(
                "click",
                function () {


                    indiceActual = index;

                    mostrarSlide(indiceActual);

                    reiniciarCarrusel();


                }
            );


        }
    );



    /* =====================================================
       PAUSAR AL PASAR EL MOUSE
    ====================================================== */

    carrusel.addEventListener(
        "mouseenter",
        function () {

            detenerCarrusel();

        }
    );



    /* =====================================================
       CONTINUAR AL SACAR EL MOUSE
    ====================================================== */

    carrusel.addEventListener(
        "mouseleave",
        function () {

            iniciarCarrusel();

        }
    );



    /* =====================================================
       TECLADO
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            if (event.key === "ArrowRight") {

                siguienteSlide();

                reiniciarCarrusel();

            }


            if (event.key === "ArrowLeft") {

                anteriorSlide();

                reiniciarCarrusel();

            }


        }
    );



    /* =====================================================
       SOPORTE PARA TOUCH / MÓVIL
    ====================================================== */

    let inicioTouch = 0;

    let finalTouch = 0;


    carrusel.addEventListener(
        "touchstart",
        function (event) {


            inicioTouch =
                event.touches[0].clientX;


            detenerCarrusel();


        },
        {
            passive: true
        }
    );



    carrusel.addEventListener(
        "touchend",
        function (event) {


            finalTouch =
                event.changedTouches[0].clientX;


            const diferencia =
                inicioTouch - finalTouch;


            /*
                Deslizar hacia la izquierda
                = siguiente
            */

            if (diferencia > 50) {

                siguienteSlide();

            }


            /*
                Deslizar hacia la derecha
                = anterior
            */

            if (diferencia < -50) {

                anteriorSlide();

            }


            iniciarCarrusel();


        },
        {
            passive: true
        }
    );



    /* =====================================================
       INICIAR
    ====================================================== */

    mostrarSlide(indiceActual);

    iniciarCarrusel();


    console.log(
        "NovaRuta: carrusel cargado correctamente."
    );


});