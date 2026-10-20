// De objeto literal a objeto de clase con map

class CuentaBancaria {
    #movimientos = [];

    constructor(titular) {
        this.titular = titular;
    }

    get movimientos() {
        return [...this.#movimientos];
    }

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

// Literales planos: sólo datos, sin métodos (como los que llegan de un JSON)
const datos = [
    { titular: "Ana", movimientos: [1000, -200] },
    { titular: "Luis", movimientos: [200, -500] }   // -500 no alcanza: se rechaza
];

// map devuelve un array nuevo: entra un literal, sale una cuenta.
// Los movimientos se cargan con depositar/retirar, así pasan por las validaciones.
const cuentas = datos.map(dato => {
    const cuenta = new CuentaBancaria(dato.titular);
    dato.movimientos.forEach(monto => monto > 0 ? cuenta.depositar(monto) : cuenta.retirar(-monto));
    return cuenta;
});

console.log(cuentas.map(cuenta => cuenta.describir()));  // ["Ana tiene $800", "Luis tiene $200"]

// Camino inverso: de cuenta a literal
const literales = cuentas.map(cuenta => ({ titular: cuenta.titular, movimientos: cuenta.movimientos }));
console.log(literales);                                  // [{titular: "Ana", movimientos: [1000, -200]}, ...]
