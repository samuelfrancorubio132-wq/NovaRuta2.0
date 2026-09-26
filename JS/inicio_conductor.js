
document.addEventListener("DOMContentLoaded", function () {


    const cedula = document.getElementById("cedula");
    const placa = document.getElementById("placa");
    const password = document.getElementById("password");
    const boton = document.querySelector("button");

    boton.addEventListener("click", function (event) {

        event.preventDefault();


        const valorCedula = cedula.value.trim();
        const valorPlaca = placa.value.trim();
        const valorPassword = password.value.trim();


        if (valorCedula === "") {
           
            cedula.focus();
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el valor de la cedula ingresada es incorrecta, por favor ingrese un valor valido",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

        if (valorPlaca === "") {
        
            placa.focus();
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el valor de la placa ingresado no existe en la base de dartos, por favor ingrese un valor valido",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

        if (valorPassword === "") {
        
            password.focus();
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el valor de la contraseña ingresada es incorrecta, por favor ingrese una contraseña correcta",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });


        if (!/^\d+$/.test(valorCedula)) {
          
            cedula.focus();
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el valor de la cedula ingresada es incorrecta, por favor ingrese un valor valido",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

        if (!/^[A-Za-z0-9-]+$/.test(valorPlaca)) {
           
            placa.focus();
            return;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El valor de la placa ingresada es incorrecto. Por favor ingrese un valor valido",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(valorPassword)) {
            password.focus();
            return;
        }

        placa.value = valorPlaca.toUpperCase();


        Swal.fire({
  title: "Good job!",
  text: "ingresaste todos los datos correctamente",
  icon: "success"
});

        console.log("Cédula:", valorCedula);
        console.log("Placa:", valorPlaca.toUpperCase());
        console.log("Contraseña:", valorPassword);

    });



});