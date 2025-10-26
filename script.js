document.addEventListener('DOMContentLoaded', function() {

    const bookElement = document.getElementById('book');
    const pages = document.querySelectorAll('.page');

    // Crear una instancia de PageFlip
    const pageFlip = new St.PageFlip(bookElement, {
        // Ancho y alto de una sola página
        width: 450, 
        height: 600,

        // Mostrar la portada al inicio
        showCover: true,

        // Otros ajustes para una sensación más realista
        maxShadowOpacity: 0.5, // Sombra al pasar la página
        usePortrait: false, // Usar en modo apaisado
        mobileScrollSupport: true // Permitir scroll en móvil
    });

    // Cargar las páginas desde el HTML
    pageFlip.loadFromHTML(pages);

    // Lógica del chat de IA
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');

    sendBtn.addEventListener('click', () => {
        const userMessage = chatInput.value;
        if (userMessage.trim() === '') return;

        // Mostrar el mensaje del usuario
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = `Tú: ${userMessage}`;
        chatBox.appendChild(userMessageElement);

        // Limpiar el input
        chatInput.value = '';

        // Simular respuesta de Gemini (aquí iría la llamada a la API)
        setTimeout(() => {
            const geminiMessageElement = document.createElement('p');
            geminiMessageElement.textContent = 'Gemini: Analizando el video...';
            chatBox.appendChild(geminiMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
        }, 1000);
    });
});