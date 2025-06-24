function cambiarTexto(id) {
    const p = document.getElementById(id);
    p.innerText = "Texto cambiado con JavaScript";
}

function cambiarColor(id) {
    const texto = document.getElementById(id);
    texto.style.color = "red";
    texto.style.fontWeight = "bold";
}

function toggle(id) {
    const info = document.getElementById(id);
    info.style.display = (info.style.display === "none") ? "block" : "none";
}

function agregarItem(id) {
    const lista = document.getElementById(id);
    const nuevoItem = document.createElement("li");
    nuevoItem.innerText = "Nuevo ítem";
    lista.appendChild(nuevoItem);
}

let count = 0;

function incrementar(id) {
    count++;
    document.getElementById(id).innerText = count;
}

function reiniciar(id) {
    count = 0;
    document.getElementById(id).innerText = count;
}

function saludar(id, id1) {
    const nombre = document.getElementById(id).value;
    document.getElementById(id1).innerText = "Hola " + nombre + " 👋";
}

function cambiarColor() {
    const botones = document.getElementsByTagName('button');
    for (const btn of botones) {
        btn.style.color = "green";
    }
}

function crearTabla() {
    const personas = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Luis", edad: 30 },
        { nombre: "María", edad: 22 },
    ];

    const tabla = document.createElement("table");
    tabla.border = "1";

    // Crear encabezados
    const encabezado = tabla.insertRow();
    const celdaNombre = encabezado.insertCell();
    celdaNombre.innerText = "Nombre";
    const celdaEdad = encabezado.insertCell();
    celdaEdad.innerText = "Edad";

    // Agregar filas con datos
    personas.forEach(persona => {
        const fila = tabla.insertRow();
        const celdaNombre = fila.insertCell();
        celdaNombre.innerText = persona.nombre;
        const celdaEdad = fila.insertCell();
        celdaEdad.innerText = persona.edad;
    });

    // Insertar tabla al body
    document.body.appendChild(tabla);
}


crearTabla();