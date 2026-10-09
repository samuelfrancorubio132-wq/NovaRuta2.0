document.addEventListener("DOMContentLoaded", function () {

const rutas = document.querySelectorAll(".ruta");
const botonesEditar = document.querySelectorAll(".editar");
const botonesConfig = document.querySelectorAll(".config");
const botonRegresar = document.querySelector(".flecha");
const iconoEditar = document.querySelector(".icono-editar");


botonesEditar.forEach(function (boton, index) {

    boton.addEventListener("click", function (event) {

        event.stopPropagation();

        const ruta = rutas[index];
        const informacion = ruta.querySelector(".ruta-info");
        const nombre = informacion.querySelector("strong");
        const datos = informacion.querySelectorAll("span");

        const nombreRuta = nombre.textContent;
        const ciudad = datos[0].textContent;
        const recorrido = datos[1].textContent;


        Swal.fire({
            title: "Modificar ruta",

            html: `
                <input 
                    id="nombreRuta" 
                    class="swal2-input" 
                    placeholder="Nombre de la ruta"
                    value="${nombreRuta}"
                >

                <input 
                    id="ciudadRuta" 
                    class="swal2-input" 
                    placeholder="Ciudad"
                    value="${ciudad}"
                >

                <input 
                    id="recorridoRuta" 
                    class="swal2-input" 
                    placeholder="Recorrido"
                    value="${recorrido}"
                >
            `,

            confirmButtonText: "Guardar cambios",
            cancelButtonText: "Cancelar",
            showCancelButton: true,

            focusConfirm: false,

            preConfirm: function () {

                const nuevoNombre =
                    document.getElementById("nombreRuta").value;

                const nuevaCiudad =
                    document.getElementById("ciudadRuta").value;

                const nuevoRecorrido =
                    document.getElementById("recorridoRuta").value;


                if (!nuevoNombre || nuevoNombre.trim() === "") {

                    Swal.showValidationMessage(
                        "El nombre de la ruta no puede estar vacío."
                    );

                    return false;
                }


                if (!nuevaCiudad || nuevaCiudad.trim() === "") {

                    Swal.showValidationMessage(
                        "La ciudad no puede estar vacía."
                    );

                    return false;
                }


                if (!nuevoRecorrido || nuevoRecorrido.trim() === "") {

                    Swal.showValidationMessage(
                        "El recorrido no puede estar vacío."
                    );

                    return false;
                }


                return {
                    nuevoNombre: nuevoNombre,
                    nuevaCiudad: nuevaCiudad,
                    nuevoRecorrido: nuevoRecorrido
                };
            }

        }).then(function (resultado) {

            if (resultado.isConfirmed) {

                const nuevoNombre =
                    resultado.value.nuevoNombre;

                const nuevaCiudad =
                    resultado.value.nuevaCiudad;

                const nuevoRecorrido =
                    resultado.value.nuevoRecorrido;


                nombre.textContent =
                    nuevoNombre.toUpperCase();

                datos[0].textContent =
                    nuevaCiudad.toUpperCase();

                datos[1].textContent =
                    nuevoRecorrido.toUpperCase();


                Swal.fire({
                    icon: "success",
                    title: "Ruta modificada",
                    text: "La ruta se modificó correctamente.",
                    confirmButtonText: "Aceptar"
                });


                console.log(
                    "Ruta:",
                    nuevoNombre.toUpperCase()
                );

                console.log(
                    "Ciudad:",
                    nuevaCiudad.toUpperCase()
                );

                console.log(
                    "Recorrido:",
                    nuevoRecorrido.toUpperCase()
                );
            }

        });

    });

});



botonesConfig.forEach(function (boton, index) {

    boton.addEventListener("click", function (event) {

        event.stopPropagation();

        const ruta = rutas[index];
        const informacion = ruta.querySelector(".ruta-info");

        const nombre =
            informacion.querySelector("strong").textContent;

        const ciudad =
            informacion.querySelectorAll("span")[0].textContent;

        const recorrido =
            informacion.querySelectorAll("span")[1].textContent;


        Swal.fire({

            title: "Información de la ruta",

            html: `
                <div style="text-align: left; font-size: 16px;">

                    <p>
                        <strong>Ruta:</strong>
                        ${nombre}
                    </p>

                    <p>
                        <strong>Ciudad:</strong>
                        ${ciudad}
                    </p>

                    <p>
                        <strong>Recorrido:</strong>
                        ${recorrido}
                    </p>

                </div>
            `,

            icon: "info",

            confirmButtonText: "Cerrar"

        });

    });

});



rutas.forEach(function (ruta) {

    ruta.addEventListener("click", function () {

        rutas.forEach(function (otraRuta) {

            otraRuta.classList.remove("seleccionada");

        });


        ruta.classList.add("seleccionada");


        const nombre =
            ruta.querySelector("b").textContent;


        console.log(
            "Ruta seleccionada:",
            nombre
        );

    });

});



botonRegresar.addEventListener("click", function () {

    Swal.fire({

        title: "¿Deseas regresar?",

        text: "Se volverá a la página anterior.",

        icon: "question",

        showCancelButton: true,

        confirmButtonText: "Sí, regresar",

        cancelButtonText: "Cancelar"

    }).then(function (resultado) {

        if (resultado.isConfirmed) {

            window.history.back();

        }

    });

});


iconoEditar.addEventListener("click", function () {

    Swal.fire({

        icon: "info",

        title: "Modificar ruta",

        text: "Selecciona una ruta y presiona el botón ✎ para modificarla.",

        confirmButtonText: "Entendido"

    });

});


console.log(
    "Página de modificar ruta cargada correctamente."
);

});