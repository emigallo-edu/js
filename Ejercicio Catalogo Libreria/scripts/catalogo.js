// Las clases card, btn, etc. vienen de Bootstrap: no escribimos CSS para la tarjeta
function crearTarjeta(planta) {
    return `
        <div class="col">
            <article class="card h-100 shadow-sm">
                <img src="${planta.foto}" class="card-img-top" alt="${planta.nombre}">
                <div class="card-body">
                    <h3 class="card-title h5">${planta.nombre}</h3>
                    <p class="card-text fst-italic text-muted">${planta.nombreCientifico}</p>
                    <p class="card-text fs-5 fw-bold text-success">$ ${planta.precio}</p>
                </div>
                <div class="card-footer bg-white border-0 pb-3">
                    <button class="btn btn-success w-100" data-agregar="${planta.id}">Agregar al carrito</button>
                </div>
            </article>
        </div>`;
}

// Toast es un componente de Bootstrap que se maneja desde JS
function avisar(mensaje) {
    const aviso = document.getElementById("aviso");
    aviso.querySelector(".toast-body").textContent = mensaje;
    bootstrap.Toast.getOrCreateInstance(aviso).show();
}

async function iniciar() {
    const contenedor = document.getElementById("catalogo");
    try {
        const plantas = await obtenerPlantas();
        contenedor.innerHTML = plantas.map(crearTarjeta).join("");

        // dataset siempre devuelve texto y la API manda id numérico: hay que convertir
        contenedor.addEventListener("click", evento => {
            const id = Number(evento.target.dataset.agregar);
            const planta = plantas.find(p => p.id === id);
            if (!planta) return;
            agregarAlCarrito(planta);
            avisar(`${planta.nombre} agregada al carrito`);
        });
    } catch (error) {
        contenedor.innerHTML = `<div class="alert alert-danger">No se pudo cargar el catálogo.</div>`;
    }
}

iniciar();
