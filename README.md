# Proyecto: Arte Épico Digital

Este proyecto es un sitio web responsivo dedicado a la exhibición de arte digital con una temática épica. El objetivo es proporcionar una plataforma para que los artistas muestren su trabajo y para que los entusiastas del arte descubran nuevas piezas.

## Páginas del Sitio

El sitio se compone de las siguientes secciones:

- **Página Principal (`index.html`):** La página de bienvenida que presenta una introducción visual al mundo del arte épico digital.
- **Página de Series/Eventos (`series.html`):** Muestra una colección de series de arte o eventos, organizados en un formato de tabla para una fácil visualización.
- **Página de Contacto (`contact.html`):** Un formulario para que los visitantes puedan enviar consultas o comentarios.
- **Página de Registro (`register.html`):** Permite a los usuarios crear una cuenta para obtener acceso a funciones adicionales.

## Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica del contenido.
- **CSS3:** Para el diseño y la presentación visual.
- **JavaScript:** Para la interactividad y la funcionalidad dinámica.

## Guía de Estilos

A continuación se detallan los elementos de diseño clave utilizados en el proyecto.

### Tipografía

- **Títulos y Marca (`navbar-brand`):** Se utiliza la fuente `'Cinzel'`, serif, para dar un toque clásico y épico.
- **Cuerpo del texto:** Se utiliza una fuente serif estándar para la legibilidad.

### Colores

La paleta de colores está diseñada para evocar una sensación de epicidad y elegancia.

- **Primario (Acentos):** `#D4AC0D` (un dorado/amarillo oscuro)
- **Primario Hover:** `#b9950b` (un dorado ligeramente más oscuro para interacciones)
- **Fondo Oscuro (Héroe):** `#1B2631` (un azul oscuro y profundo)
- **Superposición de Fondo:** `rgba(27, 38, 49, 0.7)` (una versión semitransparente del fondo oscuro para superponer sobre imágenes)

### Medidas y Estilos Clave

- **Sección Héroe (`.hero`):**
    - Ocupa el `80%` de la altura de la ventana gráfica (`80vh`).
    - Utiliza una imagen de fondo a tamaño completo (`background-size: cover`) con una superposición de gradiente lineal para garantizar la legibilidad del texto.
- **Botones (`.btn-primary`):**
    - Tienen un color de fondo y borde definidos por el color primario (`#D4AC0D`).
