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

    if (username && password) {
        message.textContent = "Registro exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor completa todos los campos.";
        message.style.color = "red";
    }
}

// ✅ Mostrar login o registro según el parámetro en la URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view");

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm && registerForm) {
        if (view === "register") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else if (view === "login") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    }
});
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

    if (username === "usuario" && password === "contraseña") {
        // ✅ Guardar usuario en localStorage
        localStorage.setItem("usuario", username);

        message.textContent = "Inicio de sesión exitoso!";
        message.style.color = "green";

        // 🔄 Redirigir a inicio
        setTimeout(() => window.location.href = "index.html", 1000);
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    if (username && password) {
        // ✅ Guardar usuario en localStorage
        localStorage.setItem("usuario", username);

        message.textContent = "Registro exitoso!";
        message.style.color = "green";

        // 🔄 Redirigir a inicio
        setTimeout(() => window.location.href = "index.html", 1000);
    } else {
        message.textContent = "Por favor completa todos los campos.";
        message.style.color = "red";
    }
}

// ✅ Mostrar login o registro según el parámetro en la URL
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const view = params.get("view");

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm && registerForm) {
        if (view === "register") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else if (view === "login") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    }
});