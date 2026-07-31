// ==========================================
// FERRETERÍA LOS GAUCHOS
// Archivo: script.js
// ==========================================

// Mensaje de bienvenida al cargar la página
window.addEventListener("load", function () {
    console.log("Bienvenido a Ferretería Los Gauchos");
    alert("¡Bienvenido a Ferretería Los Gauchos!");
});

// Desplazamiento suave para el menú
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Formulario de contacto
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.querySelector('input[type="text"]').value;
    const correo = document.querySelector('input[type="email"]').value;
    const mensaje = document.querySelector("textarea").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor complete todos los campos.");
        return;
    }

    alert("¡Gracias, " + nombre + "! Hemos recibido tu consulta.");

    formulario.reset();
});
