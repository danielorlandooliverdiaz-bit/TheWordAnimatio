# Proyecto: TheWordAnimatio

Este proyecto es el sitio web oficial de TheWordAnimatio, un estudio de animación dedicado a producir series y largometrajes basados en las historias más importantes de la humanidad. El objetivo es llevar estas narrativas a una nueva generación a través de la belleza y el poder de la animación moderna.

## Estructura del Sitio (SPA)

Este proyecto está construido como una **Aplicación de Página Única (Single Page Application - SPA)**. Todo el contenido reside en un único archivo `index.html` y la navegación se gestiona con JavaScript (jQuery) para mostrar y ocultar las diferentes secciones dinámicamente sin recargar la página.

Las secciones principales son:

- **`#inicio`**: La página de bienvenida que presenta la misión del estudio.
- **`#producciones`**: Muestra a modo de tarjetas los diferentes proyectos y series del estudio.
- **`#contacto`**: Contiene un formulario para que los visitantes puedan enviar consultas.
- **`#registro`**: Permite a los usuarios registrarse.

## Entorno de Desarrollo
- Github / VSCode

## Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica del contenido.
- **CSS3:** Para el diseño y la presentación visual, incluyendo el uso de Bootstrap.
- **JavaScript (jQuery):** Para la interactividad y la navegación dinámica de la SPA.

## Guía de Estilos

A continuación se detallan los elementos de diseño clave utilizados en el proyecto.

### Tipografía

- **Títulos y Marca (`navbar-brand`):** Se utiliza la fuente `'Cinzel'`, serif, para dar un toque clásico y épico.
- **Cuerpo del texto:** Se utiliza una fuente serif estándar para la legibilidad.

### Colores

La paleta de colores está diseñada para evocar una sensación de epicidad y elegancia.

- **Primario (Acentos):** `#D4AC0D` ![#D4AC0D](https://placehold.co/100x100/#D4AC0D/#D4AC0D.png) (un dorado/amarillo oscuro)
- **Primario Hover:** `#b9950b` ![#b9950b](https://via.placeholder.com/15/b9950b/000000?text=+) (un dorado ligeramente más oscuro para interacciones)
- **Fondo Oscuro (Héroe):** `#1B2631` ![#1B2631](https://via.placeholder.com/15/1B2631/000000?text=+) (un azul oscuro y profundo)
- **Superposición de Fondo:** `rgba(27, 38, 49, 0.7)` (una versión semitransparente del fondo oscuro para superponer sobre imágenes)

### Medidas y Estilos Clave

- **Sección Héroe (`.hero`):**
    - Ocupa el `80%` de la altura de la ventana gráfica (`80vh`).
    - Utiliza una imagen de fondo a tamaño completo (`background-size: cover`) con una superposición de gradiente lineal para garantizar la legibilidad del texto.
- **Botones (`.btn-primary`):**
    - Tienen un color de fondo y borde definidos por el color primario (`#D4AC0D`).
