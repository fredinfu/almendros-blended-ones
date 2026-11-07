/**
 * ALMENDROS COFFEE CO. — BLENDED ONES
 * Interactividad ligera, accesible y vinculación dinámica con config.js
 */

(function () {
  "use strict";

  const cfg = window.BLENDED_ONES_CONFIG;

  /**
   * Construye el enlace oficial de WhatsApp (wa.me) a partir del número y mensaje configurados.
   */
  function buildWhatsAppUrl(phone, message) {
    const cleanDigits = String(phone || "").replace(/[^\d]/g, "");
    if (!cleanDigits) return "https://almendroscoffee.com/";
    const query = message ? "?text=" + encodeURIComponent(message) : "";
    return "https://wa.me/" + cleanDigits + query;
  }

  /**
   * Aplica todos los datos editables desde config.js al documento.
   */
  function applyConfiguration(config) {
    if (!config) return;

    const p = config.producto || {};
    const m = config.mezcla || {};
    const compA = m.componenteA || {};
    const compB = m.componenteB || {};
    const taza = config.perfilDeTaza || {};
    const orig = config.origen || {};
    const disp = config.disponibilidad || {};
    const precio = config.precio || {};
    const contacto = config.contacto || {};
    const inv = config.invitacionComercial || {};

    const textBindings = {
      marcaUpper: p.marca ? String(p.marca).toUpperCase() : null,
      estadoDisponibilidad: disp.disponible ? disp.etiquetaDisponible : disp.etiquetaAgotado,
      nombreProducto: p.nombre,
      edicionProducto: p.edicion,
      pesoNeto: p.pesoNeto,
      categoriaProducto: p.categoria,
      lemaPrincipal: p.lemaPrincipal ? "“" + p.lemaPrincipal + "”" : null,
      introduccionHero: p.introduccionHero,

      subtituloMezcla: m.subtitulo,
      compAEtiqueta: compA.etiqueta,
      compATitulo: compA.titulo,
      compAVariedad: compA.variedad,
      compAPorcentaje: compA.porcentaje,
      compACantidad: compA.cantidad,
      compAProceso: compA.proceso,
      compADetalle: compA.detalleProceso,

      compBEtiqueta: compB.etiqueta,
      compBTitulo: compB.titulo,
      compBVariedad: compB.variedad,
      compBPorcentaje: compB.porcentaje,
      compBCantidad: compB.cantidad,
      compBProceso: compB.proceso,
      compBFermentacion: compB.duracionFermentacion,
      compBDetalle: compB.detalleProceso,

      descripcionSensorial: taza.descripcionPrincipal ? "“" + taza.descripcionPrincipal + "”" : null,
      tuesteCorto: p.tuesteCorto,
      notaEquilibrio: taza.notaEquilibrio,

      historiaFinca: orig.historiaFinca,
      declaracionOrigen: orig.declaracionOrigen,
      origenFinca: orig.finca,
      origenRegion: orig.region,
      origenProductor: orig.productor,
      origenAltitud: orig.altitud,
      origenCosecha: orig.cosecha,

      tituloInvitacion: inv.titulo,
      descripcionInvitacion: inv.descripcion,
      etiquetaPromocional: precio.etiquetaPromocional,
      precioPresentacion: precio.presentacion || p.pesoNeto,
      textoDistribucion: precio.distribucion,
      botonPrimario: inv.textoBotonPrimario,
      botonSecundario: inv.textoBotonSecundario,

      instagramUsuario: contacto.instagramUsuario,
      whatsappNumero: contacto.whatsappNumero,
      sitioWebEtiqueta: contacto.sitioWebEtiqueta,
      ubicacionPais: contacto.ubicacion
    };

    Object.keys(textBindings).forEach(function (key) {
      const value = textBindings[key];
      if (value === null || value === undefined || value === "") return;
      const elements = document.querySelectorAll('[data-config="' + key + '"]');
      elements.forEach(function (el) {
        el.textContent = value;
      });
    });

    // Estado visual de disponibilidad
    const availabilityPill = document.getElementById("heroAvailability");
    if (availabilityPill && disp.disponible === false) {
      availabilityPill.classList.add("is-soldout");
    }

    // Configuración de precio promocional (fácil de ocultar o actualizar)
    const priceValueGroup = document.getElementById("priceValueGroup");
    const offerPriceDisplay = document.getElementById("offerPriceDisplay");
    const offerShippingGroup = document.querySelector(".offer-shipping-group");

    if (precio.mostrarPrecio === false) {
      if (priceValueGroup) priceValueGroup.hidden = true;
      if (offerShippingGroup) {
        offerShippingGroup.style.borderLeft = "none";
        offerShippingGroup.style.borderTop = "none";
        offerShippingGroup.style.paddingLeft = "0";
        offerShippingGroup.style.paddingTop = "0";
      }
    } else if (offerPriceDisplay && precio.monto) {
      offerPriceDisplay.textContent = (precio.moneda || "L") + precio.monto;
    }

    // Pilares sensoriales dinámicos si fueron editados en config.js
    const pillarsContainer = document.getElementById("sensoryPillars");
    const numerals = ["I", "II", "III", "IV", "V", "VI"];
    if (pillarsContainer && Array.isArray(taza.atributos) && taza.atributos.length > 0) {
      pillarsContainer.innerHTML = "";
      taza.atributos.forEach(function (attr, idx) {
        const card = document.createElement("div");
        card.className = "sensory-pillar";

        const num = document.createElement("span");
        num.className = "pillar-num";
        num.setAttribute("aria-hidden", "true");
        num.textContent = numerals[idx] || String(idx + 1);

        const title = document.createElement("h3");
        title.className = "pillar-title";
        title.textContent = attr.titulo || "";

        const detail = document.createElement("p");
        detail.className = "pillar-text";
        detail.textContent = attr.detalle || "";

        card.appendChild(num);
        card.appendChild(title);
        card.appendChild(detail);
        pillarsContainer.appendChild(card);
      });
    }

    // Enlaces externos dinámicos (WhatsApp, Instagram, Sitio Web)
    if (contacto.whatsappNumero) {
      const waUrl = buildWhatsAppUrl(contacto.whatsappNumero, contacto.whatsappMensaje);
      document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
        link.setAttribute("href", waUrl);
      });
    }

    if (contacto.instagramUrl) {
      document.querySelectorAll("[data-instagram-link]").forEach(function (link) {
        link.setAttribute("href", contacto.instagramUrl);
      });
    }

    if (contacto.sitioWebUrl) {
      document.querySelectorAll("[data-website-link]").forEach(function (link) {
        link.setAttribute("href", contacto.sitioWebUrl);
      });
    }
  }

  /**
   * Menú de navegación móvil accesible.
   */
  function initNavigation() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("primaryNav");
    if (!toggle || !nav) return;

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
      nav.classList.remove("is-open");
    }

    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Cerrar menú de navegación");
        nav.classList.add("is-open");
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /**
   * Explorador interactivo y discreto de la carta ilustrada (Sección 5).
   * Preserva íntegramente la obra original y permite ocultar los marcadores.
   */
  function initLandmarkExplorer() {
    const pins = Array.from(document.querySelectorAll(".landmark-pin"));
    const items = Array.from(document.querySelectorAll(".landmark-item"));
    const pinsLayer = document.getElementById("landmarkPinsLayer");
    const togglePinsBtn = document.getElementById("togglePinsBtn");

    if (!pins.length || !items.length) return;

    function setActiveLandmark(indexStr) {
      pins.forEach(function (pin) {
        const match = pin.getAttribute("data-landmark") === String(indexStr);
        pin.classList.toggle("is-active", match);
        pin.setAttribute("aria-pressed", match ? "true" : "false");
      });

      items.forEach(function (item) {
        const match = item.getAttribute("data-landmark") === String(indexStr);
        item.classList.toggle("is-active", match);
        item.setAttribute("aria-expanded", match ? "true" : "false");
      });

      // Si los marcadores estaban ocultos y el visitante selecciona un lugar, volver a mostrarlos
      if (pinsLayer && pinsLayer.classList.contains("is-hidden")) {
        pinsLayer.classList.remove("is-hidden");
        if (togglePinsBtn) {
          togglePinsBtn.setAttribute("aria-pressed", "false");
          togglePinsBtn.textContent = "Ver arte sin marcadores";
        }
      }
    }

    pins.forEach(function (pin) {
      pin.addEventListener("click", function () {
        const idx = pin.getAttribute("data-landmark");
        setActiveLandmark(idx);
      });
    });

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        const idx = item.getAttribute("data-landmark");
        setActiveLandmark(idx);
      });
    });

    if (togglePinsBtn && pinsLayer) {
      togglePinsBtn.addEventListener("click", function () {
        const hidden = pinsLayer.classList.toggle("is-hidden");
        togglePinsBtn.setAttribute("aria-pressed", hidden ? "true" : "false");
        togglePinsBtn.textContent = hidden
          ? "Mostrar marcadores"
          : "Ver arte sin marcadores";
      });
    }
  }

  /**
   * Aparición suave de secciones respetando prefers-reduced-motion.
   */
  function initScrollReveal() {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || !("IntersectionObserver" in window)) return;

    const sections = document.querySelectorAll(".reveal-section");
    if (!sections.length) return;

    document.documentElement.classList.add("js-ready");

    sections.forEach(function (sec) {
      const rect = sec.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        sec.classList.add("is-pending");
      }
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    sections.forEach(function (sec) {
      if (sec.classList.contains("is-pending")) {
        observer.observe(sec);
      }
    });
  }

  // Inicialización
  applyConfiguration(cfg);
  initNavigation();
  initLandmarkExplorer();
  initScrollReveal();
})();
