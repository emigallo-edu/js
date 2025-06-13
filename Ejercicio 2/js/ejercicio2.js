// Una profesora guarda las notas de sus alumnos en un arreglo. Cada nota es un número entre 0 y 10. Necesitás escribir un programa que:
// Calcule el promedio de las notas.
// Cuente cuántos alumnos aprobaron (nota mayor o igual a 6).
// Encuentre la nota más alta y la más baja.

const notas = [7, 4, 10, 6, 5, 8, 3];

// 1. Promedio
function calcularPromedio(notas) {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

// 2. Aprobados
function contarAprobados(notas) {
  let contador = 0;
  for (let nota of notas) {
    if (nota >= 6) {
      contador++;
    }
  }
  return contador;
}

// 3. Nota máxima y mínima
function obtenerMaximo(notas) {
  let max = notas[0];
  for (let nota of notas) {
    if (nota > max) max = nota;
  }
  return max;
}

function obtenerMinimo(notas) {
  let min = notas[0];
  for (let nota of notas) {
    if (nota < min) min = nota;
  }
  return min;
}

// Mostrar resultados
console.log("Promedio:", calcularPromedio(notas));
console.log("Aprobados:", contarAprobados(notas));
console.log("Nota más alta:", obtenerMaximo(notas));
console.log("Nota más baja:", obtenerMinimo(notas));
