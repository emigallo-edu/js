// Arma el elemento de una sola planta con los métodos de document
function crearTarjeta(planta) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const foto = document.createElement("img");
    foto.src = planta.foto;
    foto.alt = planta.nombre;

    const nombre = document.createElement("h3");
    nombre.textContent = planta.nombre;

    const cientifico = document.createElement("p");
    cientifico.className = "cientifico";
    cientifico.textContent = planta.nombreCientifico;

    const precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = "$ " + planta.precio;

    const enlace = document.createElement("a");
    enlace.href = "planta.html?id=" + planta.id;
    enlace.textContent = "Ver ficha";

    tarjeta.append(foto, nombre, cientifico, precio, enlace);
    return tarjeta;
}

// Arma la misma tarjeta como texto, con un template string
function crearTarjetaTexto(planta) {
    return `
        <article class="tarjeta">
            <img src="${planta.foto}" alt="${planta.nombre}">
            <h3>${planta.nombre}</h3>
            <p class="cientifico">${planta.nombreCientifico}</p>
            <p class="precio">$ ${planta.precio}</p>
            <a href="planta.html?id=${planta.id}">Ver ficha</a>
        </article>`;
}

// Recorre el array y agrega una tarjeta por planta
function renderizarCatalogo(plantas, contenedor) {
    plantas.forEach(planta => contenedor.appendChild(crearTarjeta(planta)));
}

// Junta todos los textos y el navegador los convierte en elementos
function renderizarCatalogoTexto(plantas, contenedor) {
    contenedor.innerHTML = plantas.map(crearTarjetaTexto).join("");
}

// JSON.parse convierte el texto en un array de objetos
const plantas = JSON.parse(obtenerPlantas());
renderizarCatalogo(plantas, document.getElementById("catalogo"));
renderizarCatalogoTexto(plantas, document.getElementById("catalogo-texto"));
