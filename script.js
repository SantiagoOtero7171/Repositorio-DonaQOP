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
