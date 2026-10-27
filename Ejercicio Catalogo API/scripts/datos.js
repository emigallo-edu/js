const URL_API = "https://6ae0a63fbe3bc8fead97a7c0.mockapi.io/api/plantas";

// Pide el catálogo a la API. response.json() convierte el cuerpo en un array de objetos
async function obtenerPlantas() {
    const response = await fetch(URL_API);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
}
