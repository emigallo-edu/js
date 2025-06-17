function validarFecha(fecha) {
    const partes = fecha.split("/");
    if (tieneTodasLasPartes(fecha) != '') {
        return tieneTodasLasPartes(fecha);
    }

    if (sonNumericasLasPartes(partes) != '') {
        return sonNumericasLasPartes(partes);
    }

    // 3. Conversión a enteros
    let diaMes = obtenerPartesDiaMes(partes);
    if (!diaMes) {
        return 'No se pudo obtener el día o el mes de las partes';
    }
    const dia = diaMes[0];
    const mes = diaMes[1];
    const anio = parseInt(partes[2]);

    // 4. Análisis semántico: verificar rangos
    if (mes < 1 || mes > 12) {
        return 'El mes está fuera de rango';
    }

    if (anio < 1000 || anio > 9999) {
        return 'El año está fuera de rango';
    }

    const diasPorMes = [31, esBisiesto(anio) ? 29 : 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31];

    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return 'El día está fuera de rango';
    }
    return 'La fecha está correcta';
}

function tieneTodasLasPartes(fecha) {
    // 1. Análisis léxico: obtenemos las partes que componen una fecha
    const partes = fecha.split("/");
    if (partes.length !== 3) {
        return 'La fecha no tiene las 3 partes';
    }
    return '';
}

function sonNumericasLasPartes(partes) {
    // 2. Análisis sintáctico: verificar que cada parte sea numérica
    if (esNumero(partes[0]) == false || esNumero(partes[1]) == false || esNumero(partes[2]) == false) {
        return 'Al menos una de las partes no es numérica';
    }
    return '';
}


// Función auxiliar para validar si un string es numérico
function esNumero(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        const c = cadena[i];
        if (c < '0' || c > '9') return false;
    }
    return cadena.length > 0;
}

// Verifica si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Devuelve un array de 2 posiciones.
// En la posición 1 devuelve el dia
// En la posición 2 devuelve el mes
// Si no puede formatear devuelve undefined
function obtenerPartesDiaMes(partes) {
    let mes, dia;
    if (partes[0] >= 1 && partes[0] <= 12 && partes[1] >= 1 && partes[1] <= 31) {
        mes = parseInt(partes[0]);
        dia = parseInt(partes[1]);
        let diaMes = [dia, mes];
        return diaMes;
    }
    if (partes[1] >= 1 && partes[1] <= 12 && partes[0] >= 1 && partes[0] <= 31) {
        mes = parseInt(partes[1]);
        dia = parseInt(partes[0]);
        let diaMes = [dia, mes];
        return diaMes;
    }
}



// Pruebas
let fechas = ["15/06/2024", "12/01/2023", "01/03/2022", "31/01/2020", "2021/11/05",
    "29/02/2020", "1999/07/15", "14/08/2023", "2024-04-30", "2024/15/06", "31/02/2024", "99/99/9999", "abc-def-ghi", "12-13-2021",
    "2020/00/10"]

for (let fecha of fechas) {
    console.log(fecha + " - " + validarFecha(fecha))
}