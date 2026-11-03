const CLAVE_CARRITO = "carrito";

// localStorage sólo guarda texto: JSON convierte el array de ida y de vuelta
function leerCarrito() {
    return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) ?? [];
}

function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    renderizarCarrito();
}

function agregarAlCarrito(planta) {
    const carrito = leerCarrito();
    const item = carrito.find(i => i.id === planta.id);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ id: planta.id, nombre: planta.nombre, precio: Number(planta.precio), cantidad: 1 });
    }
    guardarCarrito(carrito);
}

function quitarDelCarrito(id) {
    guardarCarrito(leerCarrito().filter(i => i.id !== id));
}

function vaciarCarrito() {
    localStorage.removeItem(CLAVE_CARRITO);
    renderizarCarrito();
}

function renderizarCarrito() {
    const carrito = leerCarrito();
    const unidades = carrito.reduce((suma, i) => suma + i.cantidad, 0);
    const total = carrito.reduce((suma, i) => suma + i.precio * i.cantidad, 0);

    document.getElementById("contador").textContent = unidades;
    document.getElementById("total").textContent = "$ " + total;
    document.getElementById("items-carrito").innerHTML = carrito.length === 0
        ? `<li class="list-group-item text-muted">El carrito está vacío</li>`
        : carrito.map(i => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${i.nombre} <span class="badge text-bg-secondary">x${i.cantidad}</span></span>
                <button class="btn btn-sm btn-outline-danger" data-quitar="${i.id}">Quitar</button>
            </li>`).join("");
}

document.getElementById("items-carrito").addEventListener("click", evento => {
    const id = evento.target.dataset.quitar;
    if (id) quitarDelCarrito(Number(id));
});
document.getElementById("vaciar").addEventListener("click", vaciarCarrito);

renderizarCarrito();
