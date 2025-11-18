document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chat-form");
    const input = document.getElementById("mensaje");
    const messagesDiv = document.getElementById("chat-messages");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const texto = input.value.trim();
        if (texto === "") return;

        // Crear mensaje propio
        const msg = document.createElement("div");
        msg.classList.add("message", "me");
        msg.textContent = texto;

        messagesDiv.appendChild(msg);
        input.value = "";

        // Scroll hacia abajo
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
});
