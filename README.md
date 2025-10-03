📌 Asyncterest

Proyecto desarrollado con Vite, HTML, CSS y JavaScript, que recrea un diseño de Pinterest (basado en un mockup de Figma
) e integra la API de Unsplash para mostrar imágenes dinámicas.

🌐 Demo desplegada en: Asyncterest

🚀 Tecnologías utilizadas

Vite
 - Bundler rápido y ligero.

HTML5 - Estructura del proyecto.

CSS3 - Estilos y animaciones.

JavaScript (ES6+) - Funcionalidad y lógica del proyecto.

Unsplash API
 - Proveedor de imágenes dinámicas.

🎨 Diseño

El proyecto recrea la interfaz de Pinterest, adaptado del diseño en Figma.
Se han creado logos e íconos personalizados (favicon, Apple Touch Icon, logo principal) en distintos tamaños para un branding consistente:

16x16 px

32x32 px

180x180 px

🧩 Funcionalidades principales
🔹 Header

Logo Asyncterest → Recarga la página y restablece la galería.

Menú de navegación (ul > li):

Inicio → Recarga la página de Asyncterest.

Explorar → Abre la página de explorar de Pinterest en nueva pestaña.

Crear → Abre la página de crear de Pinterest en nueva pestaña.

Buscador con lupa + input: permite buscar imágenes por:

Nombre completo, nombre, apellido o username del autor.

Ubicación del autor.

Instagram del autor.

Descripción alt o descripción de la imagen.

"Topic submissions" asociados.
➡️ Búsqueda con Enter o clic en la lupa.

Iconos de usuario (ul > li) con menús desplegables al hacer clic:

🔔 Notificaciones → “No hay notificaciones”.

✉️ Mensajes → “La bandeja de entrada está vacía”.

👤 Usuario → “¡Eres tú! 😀”.

🔹 Galería de imágenes

Cada card (article) incluye:

Imagen principal (figure) con efectos en hover:

overlay que oscurece la imagen.

Icono de 📷 con cantidad de fotos del autor.

Icono de ❤️ con cantidad de likes:

cursor: pointer + scale(1.1) al pasar encima.

Si haces clic:

👍 Se suma un like + animación de cambio de color (gris → rojizo → rojo logo → rojizo → gris).

👎 Si lo clicas otra vez, se resta el like (sin animación).

Botón rojo Visitar → lleva a la página original de la imagen.

Información adicional bajo la imagen:

Nombre del autor.

Botón de descarga de la imagen.

Fecha de subida.

Imagen de perfil del autor:

border-radius: 50% (circular).

Borde exterior con un color aleatorio (5 opciones).

Enlace al portfolio del autor o su perfil en Unsplash.

🔹 Layout responsivo

El main utiliza CSS Grid.

El número de columnas se ajusta automáticamente al ancho del dispositivo.

Las cards tienen tamaños aleatorios para simular el estilo de Pinterest.

📑 SEO y Open Graph

En el <head> se han añadido las principales etiquetas para SEO y redes sociales:

Metadatos SEO:

meta description

meta keywords

meta author

meta robots

canonical

Open Graph (para compartir en redes sociales):

og:title, og:description, og:image, og:url, og:type

Favicons & Apple Touch Icons incluidos en varios tamaños.

📥 Instalación y uso

Clona el repositorio y ejecuta localmente con Vite:

# Clonar repositorio
git clone https://github.com/tuusuario/asyncterest.git

# Entrar al directorio
cd asyncterest

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Generar build para producción
npm run build

📸 Capturas

(Agrega aquí screenshots del proyecto para mostrar la galería y el header.)

👩‍💻 Autora

Lucía Carrera Guillén
Proyecto personal para practicar:

Async / Await con API REST.

Creación de componentes reutilizables en JS.

Diseño responsivo con Grid y CSS avanzado.
