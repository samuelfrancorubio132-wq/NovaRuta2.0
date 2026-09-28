document.addEventListener("DOMContentLoaded", function () {
    const cedula = document.getElementById("Cedula");
    const placa = document.getElementById("placa");
    const password = document.getElementById("password");
    const boton = document.getElementById("btnguardar");

    // Validar que los elementos existan
    if (!cedula || !placa || !password || !boton) {
        console.error("Faltan elementos en el HTML");
        return;
    }

    boton.addEventListener("click", function (event) { 
        event.preventDefault();

        const valorCedula = cedula.value.trim();
        const valorPlaca = placa.value.trim();
        const valorPassword = password.value.trim();

        if (valorCedula === "") {
            cedula.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese un número de cédula válido"
            });
            return;
        }

        if (!/^\d+$/.test(valorCedula)) {
            cedula.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La cédula solo debe contener números"
            });
            return;
        }

        if (valorPlaca === "") {
            placa.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese la placa del vehículo"
            });
            return;
        }

        if (!/^[A-Za-z0-9-]+$/.test(valorPlaca)) {
            placa.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La placa ingresada no es válida"
            });
            return;
        }

        if (valorPassword === "") {
            password.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese una contraseña"
            });
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(valorPassword)) {
            password.focus();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
            });
            return;
        }

        placa.value = valorPlaca.toUpperCase();

        Swal.fire({
            title: "¡Buen trabajo!",
            text: "Ingresaste todos los datos correctamente.",
            icon: "success",
            confirmButtonText: "Continuar"
        }).then(function () {
            window.location.href = "rutas_asignadas.html";
        });

        console.log("Cédula:", valorCedula);
        console.log("Placa:", valorPlaca.toUpperCase());
        console.log("Contraseña:", valorPassword);
    });
});
