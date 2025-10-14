$(document).ready(function() {
    // Mostrar solo la sección de inicio por defecto
    $('.content-section').hide();
    $('#inicio').show();

    // Función para manejar los clics en la navegación
    $('.navbar-nav a, .navbar-brand, .hero a').click(function(e) {
        // Prevenir el comportamiento por defecto del enlace
        e.preventDefault();

        // Obtener el href del enlace (ej. #inicio, #producciones)
        var target = $(this).attr('href');

        // Ocultar todas las secciones y luego mostrar la seleccionada
        $('.content-section').hide();
        $(target).fadeIn(400);

        // Actualizar la clase 'active' en la navegación
        $('.navbar-nav .nav-link').removeClass('active');
        // Asegurarse de que el enlace correspondiente en la barra de navegación principal se marque como activo
        $('.navbar-nav a[href="' + target + '"]').addClass('active');
    });

    // Función para mostrar/ocultar detalles de los proyectos
    $('.toggle-details').click(function(e) {
        e.preventDefault();

        // Encuentra el div con los detalles dentro de la misma tarjeta
        var details = $(this).siblings('.project-details');
        
        // Muestra u oculta los detalles con una animación
        details.slideToggle(400);

        // Cambia el texto del botón
        if ($(this).text() == "Leer más") {
            $(this).text("Leer menos");
        } else {
            $(this).text("Leer más");
        }
    });
});
