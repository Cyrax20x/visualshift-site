/**
 * Visual Shift — ES / EN
 * Persistencia: localStorage key "vs-lang"
 */
(function () {
  const STORAGE_KEY = "vs-lang";

  const dict = {
    es: {
      "meta.title.index": "Visual Shift | Agencia de Edición de Video",
      "meta.desc.index":
        "Visual Shift — Agencia de editores de video. Reels, YouTube, VSL y más.",
      "meta.title.cortos": "Videos Cortos | Visual Shift",
      "meta.desc.cortos":
        "Reels y videos verticales editados por Visual Shift. Estilo profesional para redes sociales.",
      "meta.title.largos": "Videos Largos | Visual Shift",
      "meta.desc.largos":
        "Videos horizontales, YouTube, VSL y decks editados por Visual Shift.",
      "meta.title.contacto": "Contacto | Visual Shift",
      "meta.desc.contacto":
        "Contactá a Visual Shift por WhatsApp. Agencia de edición de video.",
      "meta.title.privacidad": "Políticas de privacidad | Visual Shift",
      "meta.desc.privacidad":
        "Políticas de privacidad de Visual Shift y de la herramienta canal-yt para YouTube.",

      "nav.home": "Inicio",
      "nav.shorts": "Videos cortos",
      "nav.shortsShort": "Cortos",
      "nav.longs": "Videos largos",
      "nav.longsShort": "Largos",
      "nav.contact": "Contacto",
      "nav.menu": "Abrir menú",
      "nav.lang": "Idioma",
      "nav.lang.es": "Español",
      "nav.lang.en": "English",

      "hero.badge": "Agencia audiovisual",
      "hero.lead":
        'Agencia de <strong>delegación y edición de video</strong>. Con los <strong>mejores editores</strong> para no complicarte la postproducción.',
      "hero.cta": "Iniciar proyecto",
      "hero.work": "Ver trabajos",
      "hero.scroll": "Seguir scrolleando",
      "hero.who": "Quiénes somos",
      "hero.whoLine": "Agencia de editores para",
      "hero.fast": "Entregas rápidas",
      "hero.cine": "Resultados de cine",
      "hero.delegate": "Delegá y listo",
      "hero.delegateLine": "<span>Vos creás.</span><span>Nosotros editamos.</span>",

      "exp.eyebrow": "Experiencia",
      "exp.line1": "Años llevando el contenido",
      "exp.line2": "al siguiente nivel.",
      "exp.views": "Vistas generadas",
      "exp.years": "5 años",
      "exp.yearsLabel": "De experiencia",
      "exp.brands": "Marcas satisfechas",
      "exp.videos": "Videos realizados",
      "exp.editors": "Editores a disposición",

      "process.eyebrow": "Cómo lo hacemos",
      "process.line1": "Un sistema ágil pensado para",
      "process.line2": "creadores exigentes.",
      "process.sequence": "Secuencia de trabajo",
      "process.clip.edit": "Montaje",
      "process.clip.cine": "Cinematográfico",
      "process.clip.color": "Colorización",
      "process.clip.audio": "Audio · SFX",
      "process.styles": "Estos son los estilos que manejamos",
      "process.pill.edit": "Montaje",
      "process.pill.cine": "Cinematográfico",
      "process.pill.color": "Colorización",
      "process.pill.vlogs": "Vlogs",
      "process.pill.multicam": "Multi cámara",
      "process.pill.doc": "Documental",
      "process.pill.volume": "Volumen",
      "process.pill.thumbs": "Miniaturas",
      "process.pill.events": "Eventos",
      "process.pill.captions": "Subtítulos",
      "process.project": "Proyecto",

      "folder.1.title": "01 · Envíanos el material",
      "folder.1.sub": "Dropbox · Drive · WeTransfer",
      "folder.2.title": "02 · Asignación de editores",
      "folder.2.sub": "Match por estilo y carga",
      "folder.3.title": "03 · Edición",
      "folder.3.sub": "Premiere · AE · DaVinci",
      "folder.4.title": "04 · Feedback",
      "folder.4.sub": "Revisiones claras y rápidas",
      "folder.5.title": "05 · Entrega",
      "folder.5.sub": "Archivos listos para publicar",

      "step.1.title": "Envíanos el material",
      "step.1.copy":
        "Subí tus clips por Drive, Dropbox o WeTransfer. Nosotros organizamos todo y arrancamos sin fricción.",
      "step.2.title": "Asignación de editores",
      "step.2.copy":
        "Matcheamos tu proyecto con editores según estilo, formato y carga de trabajo para maximizar calidad.",
      "step.3.title": "Edición",
      "step.3.copy":
        "Montaje, color, motion y audio con herramientas pro. Ritmo de plataforma y look cinematográfico.",
      "step.4.title": "Feedback",
      "step.4.copy":
        "Comentarios claros, revisiones ágiles y versiones ordenadas. Sin idas y vueltas eternas.",
      "step.5.title": "Entrega",
      "step.5.copy":
        "Exportes listos para publicar en cada red, con naming limpio y archivos master si los necesitás.",
      "step.4.chip1": "Revisión",
      "step.4.chip2": "Notas",
      "step.4.chip3": "Ajustes",
      "step.5.chip1": "Export",
      "step.5.chip2": "Master",
      "step.5.chip3": "Publicar",

      "test.eyebrow": "Testimonios",
      "test.line1": "Lo que dicen",
      "test.line2": "nuestros clientes.",
      "video.play": "Reproducir",
      "video.pause": "Pausar",
      "video.mute": "Silenciar audio",
      "video.unmute": "Activar audio",
      "video.volume": "Volumen",

      "cta.eyebrow": "Contacto",
      "cta.line1": "Tu proyecto,",
      "cta.line2": "en manos",
      "cta.line3": "profesionales.",
      "cta.f1": "Respuesta en menos de 24h",
      "cta.f2": "Editores especializados",
      "cta.f3": "Cotizaciones a medida",
      "cta.btn": "Contactar Ahora",

      "footer.social": "Redes sociales",
      "footer.privacy": "Políticas de privacidad",

      "privacy.eyebrow": "Legal",
      "privacy.title": "Políticas de privacidad",
      "privacy.updated": "Última actualización: 23 de noviembre de 2026",
      "privacy.s1.title": "Qué es canal-yt",
      "privacy.s1.body":
        "canal-yt es una herramienta interna de Visual Shift. Con el permiso del propietario de cada canal, sube videos y lee las estadísticas de los canales de YouTube que administra Visual Shift. No es una aplicación pública ni se ofrece a terceros.",
      "privacy.s2.title": "Qué datos usa",
      "privacy.s2.intro":
        "Solo a través de los Servicios de API de YouTube, y solo del canal que dio el permiso:",
      "privacy.s2.li1":
        "Datos del canal: nombre, identificador, videos, listas de reproducción, títulos, descripciones y miniaturas.",
      "privacy.s2.li2":
        "Estadísticas de YouTube Analytics: vistas, tiempo de reproducción, retención, suscriptores, impresiones y, si el canal está monetizado, ingresos estimados.",
      "privacy.s2.note":
        "canal-yt no accede al correo, a los contactos ni a ningún otro servicio de la cuenta de Google.",
      "privacy.s3.title": "Para qué los usa",
      "privacy.s3.body":
        "Para subir y editar los videos del canal, cargar la información del canal y armar informes internos sobre su rendimiento. Para nada más.",
      "privacy.s4.title": "Dónde se guardan y con quién se comparten",
      "privacy.s4.li1":
        "El permiso y las estadísticas se guardan en el equipo de trabajo de Visual Shift. No se suben a servidores de terceros.",
      "privacy.s4.li2": "No se venden, no se comparten y no se usan para publicidad.",
      "privacy.s4.li3": "Los informes se comparten solo con el propietario del canal.",
      "privacy.s5.title": "Cuánto tiempo se guardan",
      "privacy.s5.body":
        "Mientras el permiso esté vigente. Si el propietario quita el permiso, los datos guardados se borran dentro de los 30 días, o antes si lo pide.",
      "privacy.s6.title": "Cómo quitar el permiso",
      "privacy.s6.body":
        'El propietario puede quitar el acceso de canal-yt en cualquier momento desde la configuración de seguridad de su cuenta de Google: <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">security.google.com/settings/security/permissions</a>.',
      "privacy.s7.title": "YouTube y Google",
      "privacy.s7.li1":
        'canal-yt usa los Servicios de API de YouTube. Al autorizarlo, el propietario acepta las <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">Condiciones del Servicio de YouTube</a>.',
      "privacy.s7.li2":
        'El uso que hace Google de los datos se rige por la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a>.',
      "privacy.s7.li3":
        'El uso que canal-yt hace de la información recibida de las APIs de Google cumple con la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Política de Datos del Usuario de los Servicios de las APIs de Google</a>, incluidos los requisitos de Uso Limitado.',
      "privacy.s8.title": "Contacto",
      "privacy.s8.body": '<a href="contacto.html">visualshift.site/contacto</a>',

      "cookies.open": "Preferencias de cookies",
      "cookies.title": "Consentimiento de cookies",
      "cookies.lead":
        "Nosotros y nuestros socios, incluido Meta, usamos cookies y otras tecnologías para personalizar tu experiencia, mostrar anuncios y medir resultados. No las usamos con esos fines a menos que las aceptes. Podés cambiarlo cuando quieras desde Preferencias de cookies en el pie.",
      "cookies.prefsTitle": "Preferencias de cookies",
      "cookies.prefsLead":
        "Elegí qué cookies querés permitir. Las necesarias siempre están activas.",
      "cookies.essential.title": "Necesarias",
      "cookies.essential.desc":
        "Idioma y recordar tu elección de privacidad. La web no funciona bien sin esto.",
      "cookies.marketing.title": "Marketing (Meta)",
      "cookies.marketing.desc":
        "Píxel de Meta para medir visitas y clics a WhatsApp desde anuncios.",
      "cookies.reject": "Rechazar",
      "cookies.accept": "Aceptar",
      "cookies.save": "Guardar mis cambios",
      "lightbox.close": "Cerrar",

      "port.eyebrow": "Portfolio",
      "port.shorts.title": "Videos cortos",
      "port.shorts.lead":
        "Reels y contenido vertical pensado para captar atención en segundos.",
      "port.longs.title": "Videos largos",
      "port.longs.lead":
        "YouTube, VSL y contenido horizontal con narrativa y ritmo profesional.",
      "label.ads": "Anuncios",
      "label.clinic": "Clínica",
      "label.realty": "Inmobiliaria",
      "label.ad": "Publicitario",
      "label.travel": "Viajes",
      "label.docPodcast": "Documental · Podcast",

      "contact.eyebrow": "WhatsApp",
      "contact.lead":
        "Escribinos y empecemos a crear algo cinematográfico juntos.",
      "contact.btn": "Hablá con nosotros",
    },

    en: {
      "meta.title.index": "Visual Shift | Video Editing Agency",
      "meta.desc.index":
        "Visual Shift — Video editing agency. Reels, YouTube, VSL and more.",
      "meta.title.cortos": "Short Videos | Visual Shift",
      "meta.desc.cortos":
        "Reels and vertical videos edited by Visual Shift. Pro style for social media.",
      "meta.title.largos": "Long-form Videos | Visual Shift",
      "meta.desc.largos":
        "Horizontal videos, YouTube, VSL and decks edited by Visual Shift.",
      "meta.title.contacto": "Contact | Visual Shift",
      "meta.desc.contacto":
        "Reach Visual Shift on WhatsApp. Video editing agency.",
      "meta.title.privacidad": "Privacy policy | Visual Shift",
      "meta.desc.privacidad":
        "Visual Shift privacy policy and the canal-yt tool for YouTube.",

      "nav.home": "Home",
      "nav.shorts": "Short videos",
      "nav.shortsShort": "Shorts",
      "nav.longs": "Long videos",
      "nav.longsShort": "Long",
      "nav.contact": "Contact",
      "nav.menu": "Open menu",
      "nav.lang": "Language",
      "nav.lang.es": "Español",
      "nav.lang.en": "English",

      "hero.badge": "Audiovisual agency",
      "hero.lead":
        'Video <strong>delegation and editing agency</strong>. With the <strong>best editors</strong> so post-production is never a hassle.',
      "hero.cta": "Start a project",
      "hero.work": "View work",
      "hero.scroll": "Keep scrolling",
      "hero.who": "Who we are",
      "hero.whoLine": "Editors agency for",
      "hero.fast": "Fast delivery",
      "hero.cine": "Cinematic results",
      "hero.delegate": "Hand it off",
      "hero.delegateLine": "<span>You create.</span><span>We edit.</span>",

      "exp.eyebrow": "Experience",
      "exp.line1": "Years taking content",
      "exp.line2": "to the next level.",
      "exp.views": "Views generated",
      "exp.years": "5 years",
      "exp.yearsLabel": "Of experience",
      "exp.brands": "Happy brands",
      "exp.videos": "Videos delivered",
      "exp.editors": "Editors available",

      "process.eyebrow": "How we work",
      "process.line1": "An agile system built for",
      "process.line2": "demanding creators.",
      "process.sequence": "Work sequence",
      "process.clip.edit": "Assembly",
      "process.clip.cine": "Cinematic",
      "process.clip.color": "Color grade",
      "process.clip.audio": "Audio · SFX",
      "process.styles": "These are the styles we handle",
      "process.pill.edit": "Assembly",
      "process.pill.cine": "Cinematic",
      "process.pill.color": "Color grade",
      "process.pill.vlogs": "Vlogs",
      "process.pill.multicam": "Multi-cam",
      "process.pill.doc": "Documentary",
      "process.pill.volume": "Volume",
      "process.pill.thumbs": "Thumbnails",
      "process.pill.events": "Events",
      "process.pill.captions": "Captions",
      "process.project": "Project",

      "folder.1.title": "01 · Send us the footage",
      "folder.1.sub": "Dropbox · Drive · WeTransfer",
      "folder.2.title": "02 · Editor matching",
      "folder.2.sub": "Match by style and workload",
      "folder.3.title": "03 · Editing",
      "folder.3.sub": "Premiere · AE · DaVinci",
      "folder.4.title": "04 · Feedback",
      "folder.4.sub": "Clear, fast revisions",
      "folder.5.title": "05 · Delivery",
      "folder.5.sub": "Files ready to publish",

      "step.1.title": "Send us the footage",
      "step.1.copy":
        "Upload your clips via Drive, Dropbox or WeTransfer. We organize everything and get started with zero friction.",
      "step.2.title": "Editor matching",
      "step.2.copy":
        "We match your project with editors by style, format and workload to maximize quality.",
      "step.3.title": "Editing",
      "step.3.copy":
        "Cut, color, motion and audio with pro tools. Platform pacing and a cinematic look.",
      "step.4.title": "Feedback",
      "step.4.copy":
        "Clear notes, fast revisions and tidy versions. No endless back-and-forth.",
      "step.5.title": "Delivery",
      "step.5.copy":
        "Exports ready to post on every platform, clean naming and master files if you need them.",
      "step.4.chip1": "Review",
      "step.4.chip2": "Notes",
      "step.4.chip3": "Tweaks",
      "step.5.chip1": "Export",
      "step.5.chip2": "Master",
      "step.5.chip3": "Publish",

      "test.eyebrow": "Testimonials",
      "test.line1": "What our",
      "test.line2": "clients say.",
      "video.play": "Play",
      "video.pause": "Pause",
      "video.mute": "Mute audio",
      "video.unmute": "Unmute audio",
      "video.volume": "Volume",

      "cta.eyebrow": "Contact",
      "cta.line1": "Your project,",
      "cta.line2": "in professional",
      "cta.line3": "hands.",
      "cta.f1": "Reply within 24h",
      "cta.f2": "Specialized editors",
      "cta.f3": "Custom quotes",
      "cta.btn": "Contact Now",

      "footer.social": "Social networks",
      "footer.privacy": "Privacy policy",

      "privacy.eyebrow": "Legal",
      "privacy.title": "Privacy policy",
      "privacy.updated": "Last updated: November 23, 2026",
      "privacy.s1.title": "What is canal-yt",
      "privacy.s1.body":
        "canal-yt is an internal Visual Shift tool. With each channel owner's permission, it uploads videos and reads statistics for the YouTube channels Visual Shift manages. It is not a public application and is not offered to third parties.",
      "privacy.s2.title": "What data it uses",
      "privacy.s2.intro":
        "Only through the YouTube API Services, and only for the channel that granted permission:",
      "privacy.s2.li1":
        "Channel data: name, ID, videos, playlists, titles, descriptions and thumbnails.",
      "privacy.s2.li2":
        "YouTube Analytics statistics: views, watch time, retention, subscribers, impressions and, if the channel is monetized, estimated revenue.",
      "privacy.s2.note":
        "canal-yt does not access email, contacts or any other Google account services.",
      "privacy.s3.title": "How the data is used",
      "privacy.s3.body":
        "To upload and edit the channel's videos, set up channel information and prepare internal performance reports. Nothing else.",
      "privacy.s4.title": "Where it is stored and who it is shared with",
      "privacy.s4.li1":
        "The authorization and statistics are stored on Visual Shift's work computer. They are not uploaded to third-party servers.",
      "privacy.s4.li2": "They are not sold, shared or used for advertising.",
      "privacy.s4.li3": "Reports are shared only with the channel owner.",
      "privacy.s5.title": "How long it is kept",
      "privacy.s5.body":
        "While the authorization remains active. If the owner revokes permission, stored data is deleted within 30 days, or sooner on request.",
      "privacy.s6.title": "How to revoke access",
      "privacy.s6.body":
        'The owner can revoke canal-yt access at any time from their Google account security settings: <a href="https://security.google.com/settings/security/permissions" target="_blank" rel="noopener noreferrer">security.google.com/settings/security/permissions</a>.',
      "privacy.s7.title": "YouTube and Google",
      "privacy.s7.li1":
        'canal-yt uses the YouTube API Services. By authorizing it, the owner agrees to the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.',
      "privacy.s7.li2":
        "Google's use of data is governed by the <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google Privacy Policy</a>.",
      "privacy.s7.li3":
        "canal-yt's use of information received from Google APIs adheres to the <a href=\"https://developers.google.com/terms/api-services-user-data-policy\" target=\"_blank\" rel=\"noopener noreferrer\">Google API Services User Data Policy</a>, including the Limited Use requirements.",
      "privacy.s8.title": "Contact",
      "privacy.s8.body": '<a href="contacto.html">visualshift.site/contacto</a>',

      "cookies.open": "Cookie preferences",
      "cookies.title": "Cookie consent",
      "cookies.lead":
        "We and our partners, including Meta, use cookies and other technologies to personalize your experience, show ads, and measure results. We will not use them for these purposes unless you accept. You can change this anytime from Cookie preferences in the footer.",
      "cookies.prefsTitle": "Cookie preferences",
      "cookies.prefsLead":
        "Choose which cookies you want to allow. Essential cookies stay on.",
      "cookies.essential.title": "Essential",
      "cookies.essential.desc":
        "Language and remembering your privacy choice. The site needs these to work properly.",
      "cookies.marketing.title": "Marketing (Meta)",
      "cookies.marketing.desc":
        "Meta pixel to measure visits and WhatsApp clicks from ads.",
      "cookies.reject": "Decline",
      "cookies.accept": "Accept",
      "cookies.save": "Save my changes",
      "lightbox.close": "Close",

      "port.eyebrow": "Portfolio",
      "port.shorts.title": "Short videos",
      "port.shorts.lead":
        "Reels and vertical content built to grab attention in seconds.",
      "port.longs.title": "Long-form videos",
      "port.longs.lead":
        "YouTube, VSL and horizontal content with pro narrative and pacing.",
      "label.ads": "Ads / Performance",
      "label.clinic": "Clinic",
      "label.realty": "Real Estate",
      "label.ad": "Commercial",
      "label.travel": "Travel",
      "label.docPodcast": "Documentary · Podcast",

      "contact.eyebrow": "WhatsApp",
      "contact.lead":
        "Message us and let's create something cinematic together.",
      "contact.btn": "Talk to us",
    },
  };

  function detectBrowserLang() {
    const candidates = [];
    if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
    if (navigator.language) candidates.push(navigator.language);
    for (const raw of candidates) {
      const code = String(raw || "").toLowerCase().split("-")[0];
      if (code === "en") return "en";
      if (code === "es") return "es";
    }
    return "es";
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
    return detectBrowserLang();
  }

  function t(key, lang) {
    const L = lang || getLang();
    return (dict[L] && dict[L][key]) || (dict.es && dict.es[key]) || "";
  }

  function applyMeta(lang) {
    const page = document.body?.dataset?.page || "index";
    const map = {
      index: "index",
      cortos: "cortos",
      largos: "largos",
      contacto: "contacto",
      privacidad: "privacidad",
    };
    const id = map[page] || "index";
    const title = t(`meta.title.${id}`, lang);
    const desc = t(`meta.desc.${id}`, lang);
    if (title) document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);
    document.documentElement.lang = lang;
  }

  function applyDom(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key, lang);
      if (val) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = t(key, lang);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const val = t(key, lang);
      if (val) el.setAttribute("aria-label", val);
    });

    document.querySelectorAll(".nav__lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (lang !== "es" && lang !== "en") return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyMeta(lang);
    applyDom(lang);
    window.dispatchEvent(new CustomEvent("vs:lang", { detail: { lang } }));
  }

  function initSwitcher() {
    document.querySelectorAll(".nav__lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang) setLang(lang);
      });
    });
  }

  window.VisualShiftI18n = {
    t,
    getLang,
    setLang,
    apply: () => {
      const lang = getLang();
      applyMeta(lang);
      applyDom(lang);
    },
    dict,
  };

  document.addEventListener("DOMContentLoaded", () => {
    initSwitcher();
    window.VisualShiftI18n.apply();
  });
})();
