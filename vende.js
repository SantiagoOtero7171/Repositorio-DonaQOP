document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-publicacion');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const imagenInput = document.getElementById('imagen');
            const nombre = document.getElementById('nombre').value;
            const descripcion = document.getElementById('descripcion').value;
            const precio = document.getElementById('precio').value;

            const reader = new FileReader();

            reader.onload = function (e) {
                const urlImagen = e.target.result;

                const nuevaPublicacion = {
                    nombre,
                    descripcion,
                    precio,
                    imagen: urlImagen
                };

                // Guardar en localStorage (acumulando)
                const publicacionesGuardadas = JSON.parse(localStorage.getItem('publicaciones')) || [];
                publicacionesGuardadas.push(nuevaPublicacion);
                localStorage.setItem('publicaciones', JSON.stringify(publicacionesGuardadas));

                // Redirigir a index.html
                window.location.href = 'index.html';
            };

            if (imagenInput.files[0]) {
                reader.readAsDataURL(imagenInput.files[0]);
            } else {
                alert("Por favor selecciona una imagen.");
            }
        });
    }
});