# 📌 Asyncterest

Aplicación web inspirada en Pinterest, desarrollada con Vite, HTML, CSS y JavaScript, que consume la API de Unsplash para mostrar imágenes dinámicas.
Incluye buscador avanzado por autor y metadatos de las imágenes, interacción con likes animados, botones de descarga y redirección a los portfolios de los autores.

🌐 Demo desplegada en: [Asyncterest](https://asyncterest.netlify.app)

A web application inspired by Pinterest, built with Vite, HTML, CSS, and JavaScript, that consumes the Unsplash API to display dynamic images in a Pinterest-like grid.
It features an advanced search by author and image metadata, interactive like animations, download buttons, and links to authors’ portfolios.

🌐 Demo deployed in: [Asyncterest](https://asyncterest.netlify.app)


## 📑 Tabla de Contenidos / Table of Contents:

[🚀 Tecnologías utilizadas / Built With](#tecnologias)

[🎨 Diseño / Design](#diseno)

[🧩 Funcionalidades principales / Main Features](#funcionalidades)

[📑 SEO y Open Graph / SEO & Open Graph](#seo)

[📥 Instalación y uso / Installation & Usage](#instalacion)

[📸 Capturas / Screenshots](#capturas)

[👩‍💻 Autora / Author](#autora)

<a name="tecnologias"></a>

## 🚀 Tecnologías utilizadas / Built With

**Vite**

- Bundler rápido y ligero.

- Fast and lightweight bundler.

**HTML5**

- Estructura del proyecto.

- Project structure.

**CSS3**

- Estilos y animaciones.

- Styles and animations.

**JavaScript (ES6+)**

- Funcionalidad y lógica del proyecto.

- Functionality and project logic.

**Unsplash API**

- Proveedor de imágenes dinámicas.

- Provider of dynamic images.

<a name="diseno"></a>

## 🎨 Diseño / Design

El proyecto recrea la interfaz de Pinterest, adaptado de un diseño en Figma.
Se han creado logos e íconos personalizados (favicon, Apple Touch Icon, logo principal) en distintos tamaños:

The project recreates the Pinterest interface, adapted from a Figma design.
Custom logos and icons were created (favicon, Apple Touch Icon, main logo) in various sizes:

- 16x16 px

- 32x32 px

- 180x180 px

<a name="funcionalidades"></a>

## 🧩 Funcionalidades principales / Main Features
## #🔹 Header

- Logo Asyncterest → Recarga la página y restablece la galería.

- Menú de navegación (ul > li):

  - Inicio → Recarga Asyncterest.

  - Explorar → Abre Pinterest Explore en nueva pestaña.

  - Crear → Abre Pinterest Create en nueva pestaña.

- Buscador con lupa + input → búsqueda avanzada por:

  - Nombre completo, nombre, apellido o username del autor.

  - Ubicación del autor.

  - Instagram del autor.

  - Descripción alt o descripción de la imagen.

  - Topic submissions.
➡️ Funciona con Enter o clic en la lupa.

- Íconos (ul > li) con menús desplegables:

  - 🔔 Notificaciones → “No hay notificaciones”.

  - ✉️ Mensajes → “La bandeja de entrada está vacía”.

  - 👤 Usuario → “¡Eres tú! 😀”.

## #🔹 Galería de imágenes / Image Gallery

Cada card (article) incluye / Each card (article) includes:

- Imagen principal (figure) con efectos en hover:

-  Overlay que oscurece la imagen.

  - 📷 Cantidad de fotos del autor.

  - ❤️ Likes interactivos:

    - Hover → cursor: pointer + scale(1.1).

    - Clic 1 → suma un like + animación (gris → rojizo → rojo → gris).

    - Clic 2 → resta el like (sin animación).

  - Botón rojo Visitar → abre la página original de la imagen.

- Información adicional debajo:

- Nombre del autor.

- Botón de descarga.

- Fecha de subida.

- Imagen de perfil circular con color de borde aleatorio (5 colores posibles).

  - Enlace al portfolio o perfil de Unsplash del autor.

## #🔹 Layout responsivo / Responsive Layout

- El main usa CSS Grid.

- Número de columnas se adapta al tamaño de pantalla.

- Cards con tamaños aleatorios para simular Pinterest.

<a name="seo"></a>

## 📑 SEO y Open Graph / SEO & Open Graph

En el <head> se añadieron etiquetas para SEO y redes sociales / In the <head>, key SEO and social sharing tags were included:

- Metadatos SEO / SEO Metadata:

- meta description, meta keywords, meta author, meta robots, canonical.

- Open Graph (para redes sociales / for social media):

  - og:title, og:description, og:image, og:url, og:type.

- Favicons & Apple Touch Icons en varios tamaños / in multiple sizes.

<a name="instalacion"></a>

## 📥 Instalación y uso / Installation & Usage


Clona el repositorio y ejecútalo con Vite / Clone the repo and run it with Vite:

1.  Clonar repositorio / Clone repository
```bash
git clone https://github.com/tuusuario/asyncterest.git
 ```

2. Entrar al directorio / Enter directory
```bash
cd asyncterest
 ```

3. Instalar dependencias / Install dependencies
```bash
npm install
 ```

4. Ejecutar en desarrollo / Run in development
```bash
npm run dev
 ```

5. Generar build de producción / Build for production
```bash
npm run build
 ```
---

<a name="capturas"></a>

## 📸 Capturas / Screenshots
### 🖥️ Ordenador / Desktop:
- Sin foco en card:
<img width="1899" height="900" alt="image" src="https://github.com/user-attachments/assets/40d46774-81ea-4a2d-aad5-b710eafbf5ab" />

- Con foco en card:
<img width="1902" height="906" alt="image" src="https://github.com/user-attachments/assets/0f8e7a32-fa41-44c5-a122-1e536b39f26c" />


###📱 Móvil / Mobile:
- Sin foco en card:
<img width="383" height="834" alt="image" src="https://github.com/user-attachments/assets/df4a4741-0c6f-4426-8c21-8762eab06759" />

- Con foco en card:
<img width="385" height="834" alt="image" src="https://github.com/user-attachments/assets/d2d02d34-e84f-4afc-a09a-9d47dd5f06a2" />

  
---
<a name="autora"></a>

## 👩‍💻 Autora / Author

Proyecto desarrollado por **Lucía Carrera** ✨  
Project developed by **Lucía Carrera** ✨  

<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/25c6a90f-c9e1-4c9b-9083-b351d83c26e2" />  GitHub: [@Luccargui](https://github.com/Luccargui)  
<img width="32" height="32" alt="image" src="https://github.com/user-attachments/assets/7d6cf970-cb61-4a08-8bf8-75ed27d3b9a1" /> LinkedIn: [Lucía Carrera Guillén](https://www.linkedin.com/in/lucia-carrera-guillen/)  

- Async / Await con API REST.

- Creación de componentes reutilizables en JS.

- Diseño responsivo con CSS Grid.
