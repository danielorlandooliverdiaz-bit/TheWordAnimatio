$(document).ready(function() {
    // Ocultar todas las secciones de contenido excepto la primera
    $('.content-section').not(':first').hide();

    // Función para manejar los clics en la navegación
    $('.navbar-nav a').click(function(e) {
        // Prevenir el comportamiento por defecto del enlace
        e.preventDefault();

        // Obtener el href del enlace (ej. #inicio, #producciones)
        var target = $(this).attr('href');

        // Ocultar la sección actualmente visible
        $('.content-section:visible').fadeOut(400, function() {
            // Cuando la animación de fadeOut se completa, mostrar la nueva sección
            $(target).fadeIn(400);
        });

        // Actualizar la clase 'active' en la navegación
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Asegurarse de que el enlace del logo también funcione
    $('.navbar-brand').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.content-section:visible').fadeOut(400, function() {
            $(target).fadeIn(400);
        });
        $('.navbar-nav .nav-link').removeClass('active');
        $('.navbar-nav a[href="#inicio"]').addClass('active');
    });

    // Manejar el clic en "Explorar Producciones"
    $('.hero a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.content-section:visible').fadeOut(400, function() {
            $(target).fadeIn(400);
        });
        $('.navbar-nav .nav-link').removeClass('active');
        $('.navbar-nav a[href="#producciones"]').addClass('active');
    });
});
