document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos de las rutas
    const rutas = document.querySelectorAll(".ruta");
    const botonesEditar = document.querySelectorAll(".editar");
    const botonesConfig = document.querySelectorAll(".config");
    const botonRegresar = document.querySelector(".flecha");
    const iconoEditar = document.querySelector(".icono-editar");

    // --- Botón Editar ---
    botonesEditar.forEach(function (boton, index) {
        boton.addEventListener("click", function (event) {
            event.stopPropagation();

            const ruta = rutas[index];
            const informacion = ruta.querySelector(".ruta-info"); // ✅ correcto
            const nombre = informacion.querySelector("strong");   // nodo <strong>
            const datos = informacion.querySelectorAll("span");

            const nombreRuta = nombre.textContent;
            const ciudad = datos[0].textContent;
            const recorrido = datos[1].textContent;

            const nuevoNombre = prompt("Ingresa el nombre de la ruta:", nombreRuta);
            if (!nuevoNombre || nuevoNombre.trim() === "") {
                alert("El nombre de la ruta no puede estar vacío.");
                return;
            }

            const nuevaCiudad = prompt("Ingresa la ciudad:", ciudad);
            if (!nuevaCiudad || nuevaCiudad.trim() === "") {
                alert("La ciudad no puede estar vacía.");
                return;
            }

            const nuevoRecorrido = prompt("Ingresa el recorrido:", recorrido);
            if (!nuevoRecorrido || nuevoRecorrido.trim() === "") {
                alert("El recorrido no puede estar vacío.");
                return;
            }

            // ✅ Actualizar la información de la ruta
            nombre.textContent = nuevoNombre.toUpperCase();
            datos[0].textContent = nuevaCiudad.toUpperCase();
            datos[1].textContent = nuevoRecorrido.toUpperCase();

            // Confirmación
            alert("La ruta se modificó correctamente.");
            console.log("Ruta:", nuevoNombre.toUpperCase());
            console.log("Ciudad:", nuevaCiudad.toUpperCase());
            console.log("Recorrido:", nuevoRecorrido);
        });
    });

    // --- Botón Configuración ---
    botonesConfig.forEach(function (boton, index) {
        boton.addEventListener("click", function (event) {
            event.stopPropagation();

            const ruta = rutas[index];
            const informacion = ruta.querySelector(".ruta-info");

            const nombre = informacion.querySelector("strong").textContent;
            const ciudad = informacion.querySelectorAll("span")[0].textContent;
            const recorrido = informacion.querySelectorAll("span")[1].textContent;

            alert(
                "INFORMACIÓN DE LA RUTA\n\n" +
                "Ruta: " + nombre + "\n" +
                "Ciudad: " + ciudad + "\n" +
                "Recorrido: " + recorrido
            );
        });
    });

    // --- Selección de rutas ---
    rutas.forEach(function (ruta) {
        ruta.addEventListener("click", function () {
            rutas.forEach(function (otraRuta) {
                otraRuta.classList.remove("seleccionada");
            });

            ruta.classList.add("seleccionada");

            const nombre = ruta.querySelector("b").textContent;
            console.log("Ruta seleccionada:", nombre);
        });
    });

    // --- Botón regresar ---
    botonRegresar.addEventListener("click", function () {
        const confirmar = confirm("¿Deseas regresar a la página anterior?");
        if (confirmar) {
            window.history.back();
        }
    });

    // --- Icono editar ---
    iconoEditar.addEventListener("click", function () {
        alert("Selecciona una ruta y presiona el botón ✎ para modificarla.");
    });

    console.log("Página de modificar ruta cargada correctamente.");
});
