function validarCedula() {

    let cedula = document.getElementById("cedula").value;

    cedula = cedula.replace(/[-\s]/g, "");

    const resultado = document.getElementById("resultado");

    if (!/^\d{11}$/.test(cedula)) {
        resultado.textContent =
            "Debe introducir una cédula de 11 dígitos.";
        resultado.className = "invalida";
        return;
    }

    let suma = 0;

    for (let i = 0; i < 10; i++) {

        let numero = parseInt(cedula[i]);

        if (i % 2 === 0) {
            numero = numero * 1;
        } else {
            numero = numero * 2;
        }

        if (numero > 9) {
            numero = Math.floor(numero / 10) +
                     (numero % 10);
        }

        suma += numero;
    }

    let digito = (10 - (suma % 10)) % 10;

    if (digito === parseInt(cedula[10])) {

        resultado.textContent = "CÉDULA VÁLIDA";

        resultado.className = "valida";

    } else {

        resultado.textContent = "CÉDULA INVÁLIDA";

        resultado.className = "invalida";
    }
}