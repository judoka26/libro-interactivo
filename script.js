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

});