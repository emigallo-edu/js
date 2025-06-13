// La importancia de la variable
// const edadMinimaParaIngresar = 18;

// const dia = prompt("Ingresá el día del mes en el que naciste");
// const mes = prompt("Ingresá el mes del año en el que naciste");
// const anio = prompt("Ingresá el año en el que naciste");

// // Restamos 1 al mes porque los meses en JavaScript van de 0 a 11
// const fechaNacimiento = new Date(anio, mes - 1, dia);
// const hoy = new Date();
// const edadEnMilisegundos = hoy - fechaNacimiento;
// const edadEnAnios = edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);


// if (edadEnAnios >= edadMinimaParaIngresar) {
//     alert("Puedes ingresar al sitio web.");
// } else {
//     alert("Lo siento, no puedes ingresar al sitio web.");
// }


// La importancia de la función
function pedirDatosNacimiento() {
    const dia = prompt("Ingresá el día del mes en el que naciste");
    const mes = prompt("Ingresá el mes del año en el que naciste");
    const anio = prompt("Ingresá el año en el que naciste");

    // Restamos 1 al mes porque los meses en JavaScript van de 0 a 11
    return new Date(anio, mes - 1, dia);
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const edadEnMilisegundos = hoy - fechaNacimiento;
    return edadEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
}

function verificarEdad(edadEnAnios) {
    const edadMinimaParaIngresar = 18;
    if (edadEnAnios >= edadMinimaParaIngresar) {
        alert("Puedes ingresar al sitio web.");
    } else {
        alert("Lo siento, no puedes ingresar al sitio web.");
    }
}

// verificarEdad(
//     calcularEdad(
//         pedirDatosNacimiento()
//     )
// );