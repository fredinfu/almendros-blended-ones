# BLENDED ONES — Experiencia Digital de Café

Sitio web oficial de producto para **BLENDED ONES** (*Geisha Honey × Catimor Natural · 250 g*), una edición de café de especialidad hondureño producida por **Almendros Coffee Co.** en **Finca Los Almendros** (San Luis, Comayagua, Honduras).

- **URL pública (GitHub Pages):** https://fredinfu.github.io/almendros-blended-ones/
- **Marca:** [Almendros Coffee Co.](https://almendroscoffee.com/) · [@almendroscoffeeco](https://www.instagram.com/almendroscoffeeco/)

---

## Cómo actualizar la información del producto (sin editar el código del sitio)

Toda la información editable del café, precios y canales de contacto se encuentra centralizada en un único archivo:

👉 **[`config.js`](./config.js)**

Podés editar este archivo directamente desde la interfaz web de GitHub (haciendo clic en `config.js` → ícono de lápiz **Edit this file** → **Commit changes**) o desde tu computadora. Al guardar los cambios en la rama `main`, GitHub Pages actualiza el sitio público automáticamente en ~1 minuto.

### 1. Cambiar o desactivar el precio promocional
En la sección `precio` de `config.js`:

```js
precio: {
  mostrarPrecio: true, // Cambiá a false para ocultar por completo el precio en la página
  moneda: "L",
  monto: "245",        // Cambiá el valor numérico aquí (ej. "265")
  presentacion: "250 g",
  etiquetaPromocional: "Precio promocional temporal",
  distribucion: "Envíos disponibles a todo el país en Honduras."
},
```

### 2. Cambiar el estado de disponibilidad (Disponible / Agotado)
En la sección `disponibilidad` de `config.js`:

```js
disponibilidad: {
  disponible: true, // Cambiá a false si el lote se agota temporalmente
  etiquetaDisponible: "Edición disponible · Cosecha 2026",
  etiquetaAgotado: "Lote agotado temporalmente · Consultá próximo tueste"
},
```

### 3. Actualizar número o mensaje predeterminado de WhatsApp e Instagram
En la sección `contacto` de `config.js`:

```js
contacto: {
  whatsappNumero: "+504 8879-3266",
  whatsappMensaje:
    "Hola, escaneé el QR de BLENDED ONES y me gustaría conocer más sobre este café de 250 g. ¿Tienen disponibilidad y realizan envíos a mi ciudad?",
  instagramUrl: "https://www.instagram.com/almendroscoffeeco/",
  instagramUsuario: "@almendroscoffeeco",
  sitioWebUrl: "https://almendroscoffee.com/",
  sitioWebEtiqueta: "almendroscoffee.com",
  ubicacion: "Honduras"
},
```
*(El sistema convierte automáticamente el número de WhatsApp al formato `https://wa.me/...` sin importar espacios o guiones).*

### 4. Editar descripciones, especificaciones o mensajes comerciales
Dentro del mismo archivo `config.js` también podés modificar:
- **`producto`**: nombre, edición, peso neto, tipo de tueste, lema principal e introducción.
- **`mezcla`**: porcentajes, gramos y explicaciones de proceso de `componenteA` (Geisha Honey) y `componenteB` (Catimor Natural).
- **`perfilDeTaza`**: descripción sensorial principal, nota de tueste y los cuatro pilares de sabor.
- **`origen`**: datos de finca, región, productor, altitud y año de cosecha.
- **`invitacionComercial`**: título, texto comercial y etiquetas de los botones de acción.

---

## Estructura del proyecto

```text
├── index.html                    # Estructura semántica HTML5 (es-HN) y metadatos SEO / Open Graph
├── styles.css                    # Diseño editorial responsivo (mobile-first) inspirado en la carta ilustrada
├── config.js                     # Configuración centralizada editable por el propietario
├── app.js                        # Vinculación de configuración e interactividad ligera sin dependencias
├── .nojekyll                     # Publicación directa en GitHub Pages
├── assets/
│   ├── blended-ones-card.jpg     # Ilustración original íntegra (sin recortes ni alteraciones)
│   ├── almendros-logo.png        # Logotipo oficial de Almendros Coffee Co.
│   ├── skeleton-sticker.png      # Ilustración secundaria (sticker oficial)
│   ├── coffee-branch.png         # Grabado botánico de rama de cafeto de la marca
│   ├── og-blended-ones.jpg       # Tarjeta de vista previa Open Graph (1200×630)
│   └── favicon.svg               # Ícono de pestaña inspirado en el naipe
└── qr/                           # Código QR listo para etiquetas térmicas e importación en Canva
    ├── blended-ones-qr.svg       # Vectorial escalable en blanco y negro puro
    ├── blended-ones-qr-print.png # Alta resolución (2400×2400 px) alto contraste sin suavizado gris
    └── blended-ones-qr-preview.png # Vista previa sobre fondo blanco con referencia de destino
```
