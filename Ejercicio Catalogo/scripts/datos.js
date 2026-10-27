// Simula la respuesta de una API: devuelve el catálogo como texto JSON.
// Más adelante se reemplaza por un fetch al servidor.
function obtenerPlantas() {
    return `[
        { "id": 1, "nombre": "Costilla de Adán", "nombreCientifico": "Monstera deliciosa", "categoria": "interior", "luz": "media sombra", "riego": "medio", "precio": 18500, "stock": 12, "fechaIngreso": "2026-03-10", "aptaMascotas": false, "etiquetas": ["purificadora"], "foto": "img/monstera.jpg", "notas": "Limpiar las hojas con un paño húmedo." },
        { "id": 2, "nombre": "Lavanda", "nombreCientifico": "Lavandula angustifolia", "categoria": "aromática", "luz": "sol pleno", "riego": "bajo", "precio": 6200, "stock": 30, "fechaIngreso": "2026-04-02", "aptaMascotas": true, "etiquetas": ["floración", "resistente"], "foto": "img/lavanda.jpg", "notas": "Podar después de la floración." },
        { "id": 3, "nombre": "Echeveria", "nombreCientifico": "Echeveria elegans", "categoria": "suculenta", "luz": "sol pleno", "riego": "bajo", "precio": 3900, "stock": 45, "fechaIngreso": "2026-02-18", "aptaMascotas": true, "etiquetas": ["resistente"], "foto": "img/echeveria.png", "notas": "Regar sólo con el sustrato seco." },
        { "id": 4, "nombre": "Potus", "nombreCientifico": "Epipremnum aureum", "categoria": "interior", "luz": "sombra", "riego": "medio", "precio": 5400, "stock": 0, "fechaIngreso": "2026-01-25", "aptaMascotas": false, "etiquetas": ["colgante", "purificadora"], "foto": "img/potus.jpg", "notas": "" },
        { "id": 5, "nombre": "Jazmín", "nombreCientifico": "Jasminum officinale", "categoria": "exterior", "luz": "sol pleno", "riego": "alto", "precio": 9800, "stock": 8, "fechaIngreso": "2026-05-14", "aptaMascotas": true, "etiquetas": ["floración"], "foto": "img/jazmin.jpg", "notas": "Necesita guía para trepar." },
        { "id": 6, "nombre": "Helecho", "nombreCientifico": "Nephrolepis exaltata", "categoria": "interior", "luz": "media sombra", "riego": "alto", "precio": 7300, "stock": 15, "fechaIngreso": "2026-06-01", "aptaMascotas": true, "etiquetas": ["colgante", "purificadora"], "foto": "img/helecho.png", "notas": "Pulverizar en verano." }
    ]`;
}
1