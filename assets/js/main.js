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
});
