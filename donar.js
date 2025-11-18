document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-donacion');
    const mensaje = document.getElementById('mensaje-donacion');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const imagen = document.getElementById('imagen-donacion').files[0];
        const nombre = document.getElementById('nombre-donacion').value.trim();
        const descripcion = document.getElementById('descripcion-donacion').value.trim();

        if (!imagen || !nombre || !descripcion) {
            mensaje.textContent = "Por favor completa todos los campos.";
            mensaje.style.color = "red";
            return;
        }

        // Aquí en un futuro podrías enviar a servidor o BD
        mensaje.textContent = "¡Gracias! Tu donación ha sido registrada correctamente (modo demostración).";
        mensaje.style.color = "green";

        form.reset();
    });
});