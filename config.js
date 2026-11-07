/**
 * ALMENDROS COFFEE CO. — BLENDED ONES
 * Archivo central de configuración del producto y contacto.
 *
 * INSTRUCCIONES RÁPIDAS PARA EDITAR:
 * 1. Cambiá únicamente los valores entre comillas ("...") o true / false.
 * 2. Para ocultar el precio promocional temporalmente, cambiá `mostrarPrecio: true` a `mostrarPrecio: false`.
 * 3. Para marcar el café como agotado temporalmente, cambiá `disponible: true` a `disponible: false`.
 * 4. Guardá el archivo y subí el cambio a GitHub; el sitio se actualizará automáticamente.
 */

window.BLENDED_ONES_CONFIG = {
  // 1. DISPONIBILIDAD DEL PRODUCTO
  disponibilidad: {
    disponible: true,
    etiquetaDisponible: "Edición disponible · Cosecha 2026",
    etiquetaAgotado: "Lote agotado temporalmente · Consultá próximo tueste"
  },

  // 2. PRECIO Y MENSAJE PROMOCIONAL
  precio: {
    mostrarPrecio: true,
    moneda: "L",
    monto: "245",
    presentacion: "250 g",
    etiquetaPromocional: "Precio promocional temporal",
    distribucion: "Envíos disponibles a todo el país en Honduras."
  },

  // 3. INFORMACIÓN OFICIAL DE CONTACTO
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

  // 4. IDENTIDAD Y ESPECIFICACIONES DEL PRODUCTO
  producto: {
    marca: "Almendros Coffee Co.",
    nombre: "BLENDED ONES",
    edicion: "Geisha Honey × Catimor Natural",
    categoria: "Café de especialidad hondureño",
    pesoNeto: "250 g",
    perfilTueste: "Tueste medio",
    tuesteCorto: "Medio",
    lemaPrincipal: "Desde las montañas de Comayagua hasta las calles de Tegucigalpa.",
    introduccionHero:
      "Dos variedades cultivadas en una misma finca de altura se encuentran en una edición coleccionable que celebra el carácter cafetalero de Comayagua y el pulso urbano del centro histórico de Tegucigalpa."
  },

  // 5. COMPOSICIÓN DE LA MEZCLA (SECCIÓN: DOS ORÍGENES, UNA MEZCLA)
  mezcla: {
    subtitulo:
      "Una proporción exacta en partes iguales donde dos procesos contrastantes logran equilibrio, claridad y expresión aromática en cada taza.",
    componenteA: {
      etiqueta: "Componente A",
      variedad: "Geisha",
      titulo: "Geisha Honey",
      porcentaje: "50%",
      cantidad: "125 g",
      proceso: "Honey tradicional",
      detalleProceso:
        "Secado conservando el mucílago natural de la cereza sobre el grano, lo que aporta un dulzor melado suave y resalta el carácter aromático delicado propio de la variedad Geisha."
    },
    componenteB: {
      etiqueta: "Componente B",
      variedad: "Catimor",
      titulo: "Catimor Natural",
      porcentaje: "50%",
      cantidad: "125 g",
      proceso: "Fermentación natural anaeróbica",
      duracionFermentacion: "120 horas",
      detalleProceso:
        "Cerezas enteras fermentadas en ambiente sin oxígeno durante 120 horas antes del secado natural. En la mezcla, el Catimor juega un papel clave aportando sabores intensos en sus notas frutales, que suman carácter y jugosidad frente a la sutileza del Geisha."
    }
  },

  // 6. PERFIL SENSORIAL DE TAZA (SECCIÓN: PERFIL DE TAZA)
  perfilDeTaza: {
    descripcionPrincipal:
      "Una combinación que une el dulzor melado y las fragancias delicadas de Geisha Honey con la intensidad y jugosidad de las notas frutales del Catimor Natural. El resultado es una taza aromática, expresiva y con una acidez agradable, clara y ligera al paladar.",
    notaEquilibrio:
      "Tostado en punto medio para respetar la limpidez de ambos procesos y ofrecer una experiencia equilibrada, amable y fácil de disfrutar todos los días.",
    atributos: [
      {
        titulo: "Dulzor melado",
        detalle: "Suavidad envolvente aportada por el proceso Honey tradicional."
      },
      {
        titulo: "Carácter aromático",
        detalle: "Fragancias delicadas y limpias propias de la variedad Geisha."
      },
      {
        titulo: "Notas frutales intensas",
        detalle: "El Catimor natural anaeróbico de 120 horas juega un papel decisivo con sabores intensos y jugosos en sus notas frutales."
      },
      {
        titulo: "Acidez clara y ligera",
        detalle: "Sensación fresca, agradable y equilibrada de principio a fin."
      }
    ]
  },

  // 7. ORIGEN AGRÍCOLA (SECCIÓN: NUESTRA FINCA)
  origen: {
    finca: "Finca Los Almendros",
    region: "San Luis, Comayagua, Honduras",
    productor: "Fernando Padilla",
    altitud: "1,250–1,300 msnm",
    cosecha: "2026",
    declaracionOrigen: "Ambas variedades provienen de Finca Los Almendros.",
    selloTrazabilidad: "Producido en San Luis, transformado en Tegucigalpa",
    historiaFinca:
      "En las montañas de San Luis, Comayagua, Finca Los Almendros cultiva tanto el Geisha como el Catimor que dan vida a BLENDED ONES. Bajo el cuidado del productor Fernando Padilla, entre los 1,250 y 1,300 metros sobre el nivel del mar, la cosecha 2026 reúne trabajo de campo, selección cuidadosa y trazabilidad de principio a fin en una misma tierra."
  },

  // 8. INVITACIÓN COMERCIAL (SECCIÓN: LLEVÁTE UN PEDACITO DE TEGUS)
  invitacionComercial: {
    titulo: "Lleváte un pedacito de Tegus",
    descripcion:
      "BLENDED ONES nace en las montañas de Comayagua e inspira su arte en el corazón de la capital. Ya sea para tu ritual diario de café o para compartir una bolsa con identidad hondureña, realizamos envíos a todo el país.",
    textoBotonPrimario: "Consultar por WhatsApp",
    textoBotonSecundario: "Conocer Almendros Coffee Co."
  }
};
