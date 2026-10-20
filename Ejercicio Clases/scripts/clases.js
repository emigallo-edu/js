// Paso 3: clase
// "class" es una sintaxis más clara para lo mismo que el paso 2:
// el constructor inicializa el objeto y los métodos van al prototipo.
// Además agrega cosas que la función constructora no tenía, como campos privados.

class CuentaBancaria {
    // Campo privado: sólo se puede leer o escribir desde adentro de la clase.
    // Montos positivos son ingresos y negativos son egresos.
    #movimientos;

    constructor(titular) {
        this.titular = titular;
        this.#movimientos = [];
    }

    // Getter: devuelve una copia para que no se pueda modificar desde afuera
    get movimientos() {
        return [...this.#movimientos];
    }

    // Getter calculado: el saldo no se guarda, se obtiene sumando los movimientos
    get saldo() {
        return this.#movimientos.reduce((total, monto) => total + monto, 0);
    }

    depositar(monto) {
        if (monto <= 0) {
            return false;
        }
        this.#movimientos.push(monto);
        return true;
    }

    retirar(monto) {
        if (monto <= 0 || monto > this.saldo) {
            return false;
        }
        this.#movimientos.push(-monto);
        return true;
    }

    describir() {
        return this.titular + " tiene $" + this.saldo;
    }
}

const ana = new CuentaBancaria("Ana");
const luis = new CuentaBancaria("Luis");

ana.depositar(1000);
ana.depositar(500);
luis.depositar(200);
luis.retirar(50);
console.log(ana.describir());   // Ana tiene $1500
console.log(luis.describir());  // Luis tiene $150
console.log(luis.movimientos);  // [200, -50]

// Es la misma maquinaria que el paso 2
console.log(typeof CuentaBancaria);                                     // function
console.log(ana.depositar === luis.depositar);                          // true
console.log(Object.getPrototypeOf(ana) === CuentaBancaria.prototype);   // true

// Olvidarse el "new" ya no pasa en silencio
// CuentaBancaria("Pepe", 10);  // TypeError: Class constructor cannot be invoked without 'new'

// ---------------------------------------------------------------
// Desafío: herencia
// Una cuenta que acredita intereses ES UNA cuenta bancaria:
// reutiliza todo y sólo agrega lo nuevo.
// ---------------------------------------------------------------
class CuentaConInteres extends CuentaBancaria {
    constructor(titular, tasa) {
        super(titular);
        this.tasa = tasa;
    }

    acreditarInteres() {
        // No accede a #movimientos (es privado de CuentaBancaria): usa la interfaz pública
        return this.depositar(this.saldo * this.tasa);
    }
}

const plazo = new CuentaConInteres("Marta", 0.05);
plazo.depositar(10000);
plazo.acreditarInteres();
console.log(plazo.describir());                 // Marta tiene $10500
console.log(plazo instanceof CuentaConInteres); // true
console.log(plazo instanceof CuentaBancaria);   // true
