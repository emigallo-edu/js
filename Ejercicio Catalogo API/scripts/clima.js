// Open-Meteo es una API pública y gratuita: no pide registro ni clave
const URL_CLIMA = "https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&current=temperature_2m,wind_speed_10m";
// https://open-meteo.com/

// fetch devuelve una promesa; await espera la respuesta sin bloquear la página
async function mostrarClima() {
    const widget = document.getElementById("clima");
    try {
        const response = await fetch(URL_CLIMA);
        const datos = await response.json();
        widget.textContent = `Buenos Aires: ${datos.current.temperature_2m} °C · viento ${datos.current.wind_speed_10m} km/h`;
        console.log("llamando a la api");
    } catch (error) {
        widget.textContent = "Clima no disponible";
    }
}

console.log("pedimos el clima");
mostrarClima();

console.log("fin pedimos el clima");


//{ "latitude": -34.622143,
//  "longitude": -58.40909,
//  "generationtime_ms": 0.08177757263183594,
//  "utc_offset_seconds": 0,
//  "timezone": "GMT", 
// "timezone_abbreviation": "GMT",
//  "elevation": 37.0, 
// "current_units": { "time": "iso8601", "interval": "seconds", "temperature_2m": "°C", "wind_speed_10m": "km/h" }, 
// "current": { "time": "2026-10-27T22:45", "interval": 900, "temperature_2m": 15.7, "wind_speed_10m": 7.9 } }