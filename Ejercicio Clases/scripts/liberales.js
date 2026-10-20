// Paso 1: objeto literal
// Un objeto agrupa datos (propiedades) y comportamiento (métodos) en una sola unidad.
// Dentro de un método, "this" es el objeto que recibió la llamada.
// Para crear muchas cuentas usamos una función fábrica: una función común
// que arma un objeto literal y lo devuelve.

function crearCuentaBancaria(titular) {
    // Variable local: sólo la ven las funciones definidas acá adentro (closure).
    // Cumple el papel del campo privado #movimientos de la clase.
    // Montos positivos son ingresos y negativos son egresos.
    const movimientos = [];

    return {
        titular: titular,

        // Getter: devuelve una copia para que no se pueda modificar desde afuera
        get movimientos() {
            return [...movimientos];
        },

        // Getter calculado: el saldo no se guarda, se obtiene sumando los movimientos
        get saldo() {
            return movimientos.reduce((total, monto) => total + monto, 0);
        },

        depositar(monto) {
            if (monto <= 0) {
                return false;
            }
            movimientos.push(monto);
            return true;
        },

        retirar(monto) {
            if (monto <= 0 || monto > this.saldo) {
                return false;
            }
            movimientos.push(-monto);
            return true;
        },

        describir() {
            return this.titular + " tiene $" + this.saldo;
        }
    };
}

const ana = crearCuentaBancaria("Ana");
const luis = crearCuentaBancaria("Luis");

ana.depositar(1000);
ana.depositar(500);
luis.depositar(200);
luis.retirar(50);
console.log(ana.describir());   // Ana tiene $1500
console.log(luis.describir());  // Luis tiene $150
console.log(luis.movimientos);  // [200, -50]

// Cada llamada a la fábrica crea métodos nuevos: cada cuenta tiene su propia copia.
console.log(typeof crearCuentaBancaria); // function
console.log(ana.depositar === luis.depositar);  // false
console.log(Object.getPrototypeOf(ana) === crearCuentaBancaria.prototype);  // false

// El objeto no sabe qué "tipo" es: es un Object más.
console.log(ana instanceof Object);             // true, pero no hay nada más específico que preguntar

// ---------------------------------------------------------------
// Desafío: "herencia" por composición
// La fábrica nueva usa la anterior y le agrega lo que falta.
// ---------------------------------------------------------------
function crearCuentaConInteres(titular, tasa) {
    const cuenta = crearCuentaBancaria(titular);
    cuenta.tasa = tasa;

    cuenta.acreditarInteres = function () {
        // No accede a la variable movimientos (es local de la otra fábrica): usa la interfaz pública
        return this.depositar(this.saldo * this.tasa);
    };

    return cuenta;
}

const plazo = crearCuentaConInteres("Marta", 0.05);
plazo.depositar(10000);
plazo.acreditarInteres();
console.log(plazo.describir()); // Marta tiene $10500
