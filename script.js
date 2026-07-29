tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "deep-onyx": "#1A1A1A",
                "tertiary": "#000000",
                "on-tertiary-container": "#858481",
                "warm-sand": "#968369",
                "on-secondary-fixed": "#251a07",
                "surface-container-low": "#f5f3f3",
                "surface-container-high": "#e9e8e7",
                "outline": "#747878",
                "error": "#ba1a1a",
                "surface-dim": "#dbdad9",
                "linen-surface": "#F4F1EE",
                "secondary-fixed-dim": "#d9c3a6",
                "on-tertiary-fixed": "#1c1c1a",
                "inverse-surface": "#303031",
                "on-secondary": "#ffffff",
                "background": "#fbf9f8",
                "tertiary-fixed": "#e5e2df",
                "on-background": "#1b1c1c",
                "tertiary-container": "#1c1c1a",
                "inverse-on-surface": "#f2f0f0",
                "surface-container": "#efeded",
                "primary-fixed-dim": "#c8c6c5",
                "secondary-container": "#f4dcbe",
                "primary": "#000000",
                "inverse-primary": "#c8c6c5",
                "on-surface-variant": "#444748",
                "error-container": "#ffdad6",
                "on-error-container": "#93000a",
                "on-secondary-fixed-variant": "#54442e",
                "on-tertiary-fixed-variant": "#474745",
                "on-error": "#ffffff",
                "stark-white": "#FFFFFF",
                "surface-variant": "#e4e2e2",
                "surface-bright": "#fbf9f8",
                "on-surface": "#1b1c1c",
                "secondary": "#6d5c44",
                "surface": "#fbf9f8",
                "surface-tint": "#5f5e5e",
                "primary-container": "#1c1b1b",
                "outline-variant": "#c4c7c7",
                "on-primary-fixed-variant": "#474746",
                "surface-container-lowest": "#ffffff",
                "on-primary-container": "#858383",
                "tertiary-fixed-dim": "#c8c6c3",
                "secondary-fixed": "#f6dfc1",
                "on-secondary-container": "#716048",
                "on-primary": "#ffffff",
                "on-primary-fixed": "#1c1b1b",
                "surface-container-highest": "#e4e2e2",
                "primary-fixed": "#e5e2e1",
                "on-tertiary": "#ffffff"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            spacing: {
                "stack-lg": "2rem",
                "stack-sm": "0.5rem",
                "grid-gutter": "2rem",
                "container-max": "1280px",
                "section-gap": "8rem",
                "margin-page": "1.5rem",
                "stack-md": "1rem"
            },
            fontFamily: {
                "headline-lg": ["Manrope"],
                "headline-md": ["Manrope"],
                "label-sm": ["Hanken Grotesk"],
                "display-lg": ["Manrope"],
                "display-lg-mobile": ["Manrope"],
                "body-md": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "cinzel": ["Cinzel", "serif"],
                "cormorant": ["Cormorant Garamond", "serif"]
            },
            fontSize: {
                "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
                "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
                "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
                "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "display-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
            }
        }
    }
};

// Inicialización de EmailJS y manejo del formulario
document.addEventListener('DOMContentLoaded', function() {
    // 1. Reemplaza "TU_PUBLIC_KEY" con la clave pública que te da EmailJS
    emailjs.init("TU_PUBLIC_KEY");

    // Inicialización de EmailJS y manejo del formulario
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerText;
            btn.innerText = 'Enviando...';

            // 2. Reemplaza "TU_SERVICE_ID" y "TU_TEMPLATE_ID" con los datos de tu plantilla en EmailJS
            emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
                .then(function() {
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                    contactForm.reset();
                    btn.innerText = originalText;
                }, function(error) {
                    alert('Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.');
                    console.error('FAILED...', error);
                    btn.innerText = originalText;
                });
        });
    }

    // Manejo del menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">menu</span>';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">close</span>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">menu</span>';
            });
        });
    }

    // Modal de Servicios
    const servicesData = {
        arquitectura: {
            title: "Arquitectura",
            icon: "domain",
            image: "project_office_building_1782501598322.png",
            description: "Desarrollamos proyectos arquitectónicos integrales, anteproyectos, plantas funcionales y documentación técnica detallada adaptada a las necesidades operativas y exigencias de cada cliente e industria.",
            features: [
                "Elaboración de anteproyectos y renders 3D de alta fidelidad.",
                "Planos municipales, de obra y cómputos métricos integrales.",
                "Adaptación a normas de accesibilidad y códigos de edificación vigentes.",
                "Optimización de plantas funcionales para oficinas, industrias y residencias."
            ]
        },
        diseno: {
            title: "Diseño",
            icon: "architecture",
            image: "images/servicios/diseno.png",
            description: "El diseño no es solo una etapa, es donde las ideas y necesidades se convierten en espacios reales, combinando funcionalidad, estética y personalidad corporativa.",
            features: [
                "Diseño conceptual e interiorismo corporativo a medida.",
                "Selección de materiales de alta durabilidad y eficiencia técnica.",
                "Planificación de espacios de trabajo enfocados en la productividad y bienestar.",
                "Integración de la identidad de marca en el diseño arquitectónico interior."
            ]
        },
        direccion: {
            title: "Dirección de Obra",
            icon: "engineering",
            image: "images/servicios/direccion-obra.png",
            description: "Garantizamos que el proyecto se materialice tal como fue concebido. Coordinamos equipos, resolvemos imprevistos y cuidamos cada decisión constructiva según las reglas del buen arte.",
            features: [
                "Control riguroso de calidad de materiales y ejecución en sitio.",
                "Certificación mensual de avances de obra y seguimiento presupuestario.",
                "Coordinación interdisciplinaria de contratistas y especialistas.",
                "Informes periódicos de auditoría y avance técnico para el cliente."
            ]
        },
        construccion: {
            title: "Construcción",
            icon: "construction",
            image: "images/servicios/construccion.png",
            description: "Solidez técnica, gestión eficiente y compromiso total. Nos ocupamos desde la planificación hasta la entrega, optimizando costos y cumpliendo plazos pactados bajo estrictas normas.",
            features: [
                "Ejecución llave en mano de obras comerciales, industriales y residenciales.",
                "Gestión integral de compras y logística de insumos de construcción.",
                "Estricto cumplimiento de normas de higiene y seguridad laboral.",
                "Entrega final en los plazos convenidos con garantía técnica de calidad."
            ]
        },
        habilitaciones: {
            title: "Habilitaciones",
            icon: "fact_check",
            image: "project_industrial_plant_1782501608480.png",
            description: "Gestión integral de tramitaciones, permisos y adecuaciones técnicas ante organismos municipales y reglamentarios para industrias, comercios y empresas.",
            features: [
                "Tramitación de habilitaciones industriales, comerciales y corporativas.",
                "Confección de planos de registro, avisos de obra y finales de obra.",
                "Adecuación a normas de protección contra incendios y seguridad edilicia.",
                "Representación técnica y gestión directa ante entes reguladores."
            ]
        }
    };

    const modal = document.getElementById('service-modal');
    const modalCard = document.getElementById('service-modal-card');
    const closeModalBtn = document.getElementById('close-service-modal');
    const modalImg = document.getElementById('modal-img');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalFeatures = document.getElementById('modal-features');
    const modalContactBtn = document.getElementById('modal-contact-btn');

    function openModal(serviceKey) {
        const data = servicesData[serviceKey];
        if (!data || !modal) return;

        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalIcon.innerText = data.icon;
        modalTitle.innerText = data.title;
        modalDescription.innerText = data.description;

        modalFeatures.innerHTML = data.features
            .map(f => `<li class="flex items-start gap-2.5"><span class="material-symbols-outlined text-[20px] text-warm-sand flex-shrink-0 mt-0.5">check_circle</span><span>${f}</span></li>`)
            .join('');

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        setTimeout(() => {
            modalCard.classList.remove('scale-95', 'opacity-0');
            modalCard.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    function closeModal() {
        if (!modal) return;
        modalCard.classList.remove('scale-100', 'opacity-100');
        modalCard.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }, 200);
    }

    document.querySelectorAll('.open-service-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceKey = btn.getAttribute('data-service');
            openModal(serviceKey);
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (modalContactBtn) {
        modalContactBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
