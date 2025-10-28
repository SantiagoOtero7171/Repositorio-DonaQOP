// script.js
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    // Simulación de validación
    if (username === "usuario" && password === "contraseña") {
        message.textContent = "Inicio de sesión exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    // Simulación de validación
    if (username && password) {
        message.textContent = "Registro exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor completa todos los campos.";
        message.style.color = "red";
    }
}


// 🟢 Mostrar publicaciones en index.html
document.addEventListener('DOMContentLoaded', () => {
    const publicacionesInicio = document.getElementById('publicaciones-inicio');

    if (publicacionesInicio) {
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
        publicaciones.forEach(pub => {
            mostrarPublicacion(pub, publicacionesInicio);
        });
    }
});

// 🔧 Función para mostrar una publicación
function mostrarPublicacion(data, contenedor) {
    const publicacion = document.createElement('div');
    publicacion.classList.add('publicacion');

    publicacion.innerHTML = `
        <img src="${data.imagen}" alt="Imagen del útil" style="width:100px; height:auto; border-radius:5px; margin-right:15px;">
        <div>
            <h3>${data.nombre}</h3>
            <p>${data.descripcion}</p>
            <p><strong>Precio:</strong> $${data.precio} COP</p>
        </div>
    `;

    contenedor.appendChild(publicacion);
}
document.addEventListener('DOMContentLoaded', () => {
    const publicacionesInicio = document.getElementById('publicaciones-inicio');
    const authContainer = document.querySelector('.auth-buttons');

    // 🟢 Verificar si hay usuario logueado
    const usuario = localStorage.getItem("usuario");

    if (authContainer) {
        if (usuario) {
            // Si hay usuario logueado
            authContainer.innerHTML = `
                <span class="welcome">Bienvenido, <strong>${usuario}</strong></span>
                <button id="logout-btn" class="btn btn-secondary">Cerrar Sesión</button>
            `;

            // Agregar evento de logout
            document.getElementById("logout-btn").addEventListener("click", () => {
                localStorage.removeItem("usuario");
                window.location.reload();
            });
        } else {
            // Si no hay usuario logueado (mostrar botones originales)
            authContainer.innerHTML = `
                <a href="registro.html?view=login" class="btn">Iniciar Sesión</a>
                <a href="registro.html?view=register" class="btn btn-secondary">Registrarse</a>
            `;
        }
    }

    // 🟢 Mostrar publicaciones en index.html
    if (publicacionesInicio) {
        const publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];
        publicaciones.forEach(pub => {
            mostrarPublicacion(pub, publicacionesInicio);
        });
    }
});

// 🔧 Función para mostrar una publicación
function mostrarPublicacion(data, contenedor) {
    const publicacion = document.createElement('div');
    publicacion.classList.add('publicacion');

    publicacion.innerHTML = `
        <img src="${data.imagen}" alt="Imagen del útil" style="width:100px; height:auto; border-radius:5px; margin-right:15px;">
        <div>
            <h3>${data.nombre}</h3>
            <p>${data.descripcion}</p>
            <p><strong>Precio:</strong> $${data.precio} COP</p>
        </div>
    `;

    contenedor.appendChild(publicacion);
}
