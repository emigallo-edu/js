// 1. En memoria: la variable vive mientras la página esté abierta. F5 la reinicia
let clicksMemoria = 0;

document.getElementById("sumar-memoria").addEventListener("click", () => {
    clicksMemoria++;
    document.getElementById("valor-memoria").textContent = clicksMemoria;
});

// 2. Con localStorage: el valor queda guardado en el navegador y sobrevive a F5
const CLAVE_CLICKS = "clicks";
let clicksStorage = Number(localStorage.getItem(CLAVE_CLICKS)) || 0;
document.getElementById("valor-storage").textContent = clicksStorage;

document.getElementById("sumar-storage").addEventListener("click", () => {
    clicksStorage++;
    localStorage.setItem(CLAVE_CLICKS, clicksStorage);
    document.getElementById("valor-storage").textContent = clicksStorage;
});
