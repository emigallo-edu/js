// 1. Buscar un elemento que ya existe en el HTML
const aviso = document.getElementById("aviso");

// 2. Cambiarle propiedades
aviso.textContent = "¡Esta semana, 10% de descuento en suculentas!";
aviso.className = "destacado";

// 3. Agregarle contenido a otro elemento
const categorias = document.getElementById("categorias");
categorias.innerHTML += "<li>exterior</li>";

const item = document.createElement("li");
item.textContent = "suculenta";
categorias.appendChild(item);
