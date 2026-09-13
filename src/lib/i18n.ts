export type Lang = "es" | "en";

export const dict = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      experiencia: "Experiencia",
      servicios: "Servicios",
      proyectos: "Proyectos",
      habilidades: "Habilidades",
      contacto: "Contacto",
      contact: "Contacto",
    },
    hero: {
      badge: "Trabajando actualmente en MiConamat",
      role: "Desarrollador de software multiplataforma",
      tagline:
        "Construyo experiencias web y móviles rápidas, limpias y centradas en las personas.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver proyectos",
      location: "Dolores Hidalgo, Guanajuato, México",
    },
    stats: {
      years: "Años desarrollando",
      techs: "Tecnologías",
      projects: "Proyectos destacados",
      apps: "App en App Store",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Diseño y construyo con propósito",
      description:
        "Aprendizaje constante, atención al detalle y foco en resolver problemas reales.",
      summary:
        "Estudiante de Ingeniería en Desarrollo de Software con formación en programación y desarrollo de soluciones tecnológicas multiplataforma. Interesado en la creación de aplicaciones eficientes y robustas, con capacidad de adaptación y aprendizaje rápido para dominar nuevas tecnologías.",
      summaryExtra:
        "Destaco por habilidades en trabajo en equipo, comunicación efectiva, iniciativa y proactividad en proyectos, así como paciencia y perseverancia para la resolución de problemas. Busco aplicar mis conocimientos técnicos en el desarrollo de software mientras continúo fortaleciendo mis competencias profesionales.",
      languagesTitle: "Idiomas",
      spanish: "Español",
      english: "Inglés",
      native: "Nativo",
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      description:
        "Dónde he aplicado mis conocimientos y qué estoy construyendo.",
      role: "Practicante",
      period: "Abril 2025 – Actualidad",
      current: "Actual",
      points: [
        "Desarrollo una aplicación móvil para CONAMAT utilizando React, participando en el diseño de la interfaz y en la construcción y soporte del backend para el consumo de APIs.",
        "Implemento la lógica de servidor e integración de servicios, asegurando la comunicación eficiente entre la arquitectura backend y la aplicación móvil.",
        "Gestiono el proceso completo de preparación, empaquetado y publicación en iOS (App Store) utilizando Xcode.",
        "Aplico buenas prácticas de desarrollo Full Stack para garantizar estabilidad, rendimiento y escalabilidad en la plataforma.",
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Lo que puedo hacer por ti",
      description:
        "Del diseño a la publicación: construyo productos digitales completos.",
      items: [
        {
          title: "Desarrollo web",
          description:
            "Sitios y aplicaciones web rápidas, responsivas y accesibles con React, Next.js y Tailwind CSS.",
        },
        {
          title: "Apps móviles",
          description:
            "Aplicaciones multiplataforma con Flutter y React Native, incluyendo empaquetado y publicación en tiendas.",
        },
        {
          title: "Backend & APIs",
          description:
            "Servicios y APIs eficientes con Node.js, Java y Spring Boot, integradas con bases de datos SQL.",
        },
        {
          title: "UI/UX",
          description:
            "Interfaces limpias, con buen contraste y microinteracciones cuidadas, centradas en el usuario.",
        },
      ],
    },
    projects: {
      eyebrow: "Trabajo",
      title: "Proyectos",
      description: "Aplicaciones y soluciones que he desarrollado de principio a fin.",
      items: [
        {
          title: "Aplicación móvil CONAMAT",
          context: "MiConamat – KERYS",
          period: "2025 – 2026",
          description:
            "Aplicación móvil desarrollada en React con backend para el consumo de APIs. Participé en el diseño de interfaz, la lógica de servidor y la publicación en App Store con Xcode.",
          tags: ["React", "APIs", "Backend", "Xcode", "iOS"],
        },
        {
          title: "Digitalización de comercios locales",
          context: "Proyecto personal",
          period: "Septiembre 2025 – Actualidad",
          description:
            "Plataforma móvil que ayuda a negocios minoristas sin presencia digital a promocionar sus productos y servicios, mostrando ubicación, servicios y contacto a los clientes.",
          tags: ["Desarrollo móvil", "UX", "Investigación de mercado"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Habilidades",
      description: "Tecnologías y herramientas con las que trabajo a diario.",
      groups: ["Frontend", "Backend & Datos", "Móvil & Herramientas"],
      barsTitle: "Nivel por tecnología",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      description:
        "¿Tienes un proyecto o una oportunidad? Estaré encantado de escucharte.",
      emailLabel: "Correo",
      copy: "Copiar correo",
      copied: "Copiado",
      sendEmail: "Enviar correo",
      location: "Dolores Hidalgo, Guanajuato, México",
    },
    footer: {
      navigation: "Navegación",
      contact: "Contacto",
      email: "Correo",
      credit: "Hecho con Next.js, Tailwind CSS y Framer Motion",
      backToTop: "Volver arriba",
    },
    toggles: {
      language: "Idioma",
      theme: "Tema",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About",
      experiencia: "Experience",
      servicios: "Services",
      proyectos: "Projects",
      habilidades: "Skills",
      contacto: "Contact",
      contact: "Contact",
    },
    hero: {
      badge: "Currently working at MiConamat",
      role: "Cross-platform software developer",
      tagline:
        "I build fast, clean and people-centered web and mobile experiences.",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View projects",
      location: "Dolores Hidalgo, Guanajuato, Mexico",
    },
    stats: {
      years: "Years building",
      techs: "Technologies",
      projects: "Featured projects",
      apps: "App on the App Store",
    },
    about: {
      eyebrow: "About me",
      title: "I design and build with purpose",
      description:
        "Constant learning, attention to detail and a focus on solving real problems.",
      summary:
        "Software Engineering student with training in programming and cross-platform technology solutions. Interested in building efficient and robust applications, with strong adaptability and a fast learning curve to master new technologies.",
      summaryExtra:
        "I stand out for teamwork, effective communication, initiative and proactivity, as well as patience and perseverance when solving problems. I aim to apply my technical knowledge to software development while continuing to grow professionally.",
      languagesTitle: "Languages",
      spanish: "Spanish",
      english: "English",
      native: "Native",
    },
    experience: {
      eyebrow: "Journey",
      title: "Experience",
      description: "Where I have applied my knowledge and what I am building.",
      role: "Intern",
      period: "April 2025 – Present",
      current: "Current",
      points: [
        "I am building a mobile application for CONAMAT using React, taking part in UI design and in building and supporting the backend for API consumption.",
        "I implement the server logic and service integration, ensuring efficient communication between the backend architecture and the mobile app.",
        "I manage the full preparation, packaging and iOS (App Store) publishing process using Xcode.",
        "I apply Full Stack best practices to ensure stability, performance and scalability of the platform.",
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What I can do for you",
      description:
        "From design to publishing: I build complete digital products.",
      items: [
        {
          title: "Web development",
          description:
            "Fast, responsive and accessible websites and web apps with React, Next.js and Tailwind CSS.",
        },
        {
          title: "Mobile apps",
          description:
            "Cross-platform apps with Flutter and React Native, including packaging and store publishing.",
        },
        {
          title: "Backend & APIs",
          description:
            "Efficient services and APIs with Node.js, Java and Spring Boot, integrated with SQL databases.",
        },
        {
          title: "UI/UX",
          description:
            "Clean interfaces with good contrast and thoughtful microinteractions, focused on the user.",
        },
      ],
    },
    projects: {
      eyebrow: "Work",
      title: "Projects",
      description: "Applications and solutions I have built end to end.",
      items: [
        {
          title: "CONAMAT mobile app",
          context: "MiConamat – KERYS",
          period: "2025 – 2026",
          description:
            "Mobile application built with React and a backend for API consumption. I took part in UI design, server logic and publishing to the App Store with Xcode.",
          tags: ["React", "APIs", "Backend", "Xcode", "iOS"],
        },
        {
          title: "Local commerce digitalization",
          context: "Personal project",
          period: "September 2025 – Present",
          description:
            "Mobile platform that helps small retailers without a digital presence promote their products and services, showing location, services and contact details to customers.",
          tags: ["Mobile development", "UX", "Market research"],
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Skills",
      description: "Technologies and tools I work with every day.",
      groups: ["Frontend", "Backend & Data", "Mobile & Tools"],
      barsTitle: "Proficiency by technology",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description:
        "Do you have a project or an opportunity? I would love to hear from you.",
      emailLabel: "Email",
      copy: "Copy email",
      copied: "Copied",
      sendEmail: "Send email",
      location: "Dolores Hidalgo, Guanajuato, Mexico",
    },
    footer: {
      navigation: "Navigation",
      contact: "Contact",
      email: "Email",
      credit: "Built with Next.js, Tailwind CSS and Framer Motion",
      backToTop: "Back to top",
    },
    toggles: {
      language: "Language",
      theme: "Theme",
    },
  },
} as const;

export type Dict = (typeof dict)[Lang];
