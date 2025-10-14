$(document).ready(function() {
    // Mostrar solo la sección de inicio por defecto
    $('.content-section').hide();
    $('#inicio').show();

    // Función para manejar los clics en la navegación
    $('.navbar-nav a, .navbar-brand, .hero a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.content-section').hide();
        $(target).fadeIn(400);
        $('.navbar-nav .nav-link').removeClass('active');
        $('.navbar-nav a[href="' + target + '"]').addClass('active');
    });

    // Función para mostrar/ocultar detalles de los proyectos
    $('.toggle-details').click(function(e) {
        e.preventDefault();
        var details = $(this).siblings('.project-details');
        details.slideToggle(400);
        if ($(this).text() == "Leer más") {
            $(this).text("Leer menos");
        } else {
            $(this).text("Leer más");
        }
    });

    // Validación del formulario de contacto y modal
    $('#contact-form').submit(function(e) {
        e.preventDefault(); // Prevenir el envío real del formulario

        var email = $('#contact-email').val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (emailRegex.test(email)) {
            // Si el email es válido, mostrar el modal
            var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
            confirmationModal.show();

            // Limpiar el formulario
            $(this)[0].reset();
        } else {
            // Si el email no es válido, mostrar una alerta
            alert('Por favor, introduce una dirección de correo electrónico válida.');
        }
    });
});
