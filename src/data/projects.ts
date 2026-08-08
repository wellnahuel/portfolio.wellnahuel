export type Locale = "en" | "es" | "it";

export interface LocalizedText {
  en: string;
  es: string;
  it: string;
}

export interface ProjectLink {
  label: LocalizedText;
  href: string;
}

export interface Project {
  id: string;
  number: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText[];
  techStack: string[];
  images: {
    banner: string;
    screenshots: { src: string; caption?: LocalizedText }[];
  };
  links: ProjectLink[];
  /** Year the project was built */
  year: number;
}

export const projects: Project[] = [
  {
    id: "foodsterr",
    number: "001",
    title: {
      en: "Food App - Foodsterr",
      es: "App de Recetas - Foodsterr",
      it: "App di Ricette - Foodsterr",
    },
    tagline: {
      en: "Single Page Application",
      es: "Single Page Application",
      it: "Single Page Application",
    },
    description: [
      {
        en: "Design and development of a recipe App with searches by name and ID, filtering, ordering and creation of new recipes.",
        es: "Diseño y desarrollo de una app de recetas con búsquedas por nombre e ID, filtrado, ordenamiento y creación de nuevas recetas.",
        it: "Progettazione e sviluppo di un'app di ricette con ricerca per nome e ID, filtri, ordinamento e creazione di nuove ricette.",
      },
      {
        en: "Developed with React, Redux and pure CSS on the frontend; Node.js with Express, PostgreSQL and Sequelize on the backend.",
        es: "Desarrollada con React, Redux y CSS puro en el frontend; Node.js con Express, PostgreSQL y Sequelize en el backend.",
        it: "Sviluppata con React, Redux e CSS puro nel frontend; Node.js con Express, PostgreSQL e Sequelize nel backend.",
      },
    ],
    techStack: [
      "javascript",
      "react",
      "redux",
      "postgresql",
      "express",
      "sequelize",
      "css3",
      "postman",
    ],
    images: {
      banner: "/assets/images/foodsterr-banner-color.webp",
      screenshots: [
        {
          src: "/assets/images/foodsterr-foto1.webp",
          caption: { en: "Home", es: "Inicio", it: "Home" },
        },
        {
          src: "/assets/images/foodsterr-foto2-1.webp",
          caption: { en: "Recipe details", es: "Detalle de receta", it: "Dettaglio ricetta" },
        },
        {
          src: "/assets/images/foodsterr-foto3.webp",
          caption: { en: "Create recipe", es: "Crear receta", it: "Crea ricetta" },
        },
      ],
    },
    links: [
      {
        label: { en: "Deploy", es: "Deploy", it: "Deploy" },
        href: "https://foodsterr.netlify.app/",
      },
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/wellnahuel/PI.Food.PT07",
      },
    ],
    year: 2022,
  },
  {
    id: "athenas-club",
    number: "002",
    title: {
      en: "Ecommerce - Athenas Club",
      es: "Ecommerce - Athenas Club",
      it: "Ecommerce - Athenas Club",
    },
    tagline: {
      en: "Sportswear ecommerce",
      es: "Ecommerce de indumentaria deportiva",
      it: "Ecommerce di abbigliamento sportivo",
    },
    description: [
      {
        en: "Design and development of a sportswear ecommerce with payment gateway (MercadoPago API), authentication, notifications, user and admin dashboards, persistent cart, product reviews and Q&A, product creation and image upload to Cloudinary.",
        es: "Diseño y desarrollo de un ecommerce de indumentaria deportiva con pasarela de pagos (API de MercadoPago), autenticación, notificaciones, paneles de usuario y administrador, carrito persistente, reseñas de productos y preguntas y respuestas, creación de productos y subida de imágenes a Cloudinary.",
        it: "Progettazione e sviluppo di un ecommerce di abbigliamento sportivo con gateway di pagamento (API MercadoPago), autenticazione, notifiche, dashboard utente e admin, carrello persistente, recensioni e domande sui prodotti, creazione di prodotti e upload di immagini su Cloudinary.",
      },
      {
        en: "Developed with React, Redux and Bootstrap on the frontend; Node.js with Express and Auth0 on the backend; PostgreSQL and Sequelize as database.",
        es: "Desarrollado con React, Redux y Bootstrap en el frontend; Node.js con Express y Auth0 en el backend; PostgreSQL y Sequelize como base de datos.",
        it: "Sviluppato con React, Redux e Bootstrap nel frontend; Node.js con Express e Auth0 nel backend; PostgreSQL e Sequelize come database.",
      },
    ],
    techStack: [
      "javascript",
      "react",
      "redux",
      "postgresql",
      "express",
      "sequelize",
      "auth0",
      "mercadopago",
      "bootstrap",
      "css3",
      "postman",
    ],
    images: {
      banner: "/assets/images/banner-athenas.webp",
      screenshots: [
        {
          src: "/assets/images/athenas1.webp",
          caption: { en: "Edit profile", es: "Editar perfil", it: "Modifica profilo" },
        },
        {
          src: "/assets/images/athena2.webp",
          caption: {
            en: "Payment gateway with MercadoPago API",
            es: "Pasarela de pagos con API de MercadoPago",
            it: "Gateway di pagamento con API MercadoPago",
          },
        },
        {
          src: "/assets/images/athenas3.webp",
          caption: { en: "Ecommerce", es: "Ecommerce", it: "Ecommerce" },
        },
      ],
    },
    links: [
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/MATarg81/proyecto-final",
      },
    ],
    year: 2022,
  },
  {
    id: "weather-app",
    number: "003",
    title: {
      en: "Weather App",
      es: "App del Clima",
      it: "App Meteo",
    },
    tagline: {
      en: "Simple weather application",
      es: "Aplicación simple del clima",
      it: "Semplice applicazione meteo",
    },
    description: [
      {
        en: "Design and development of a simple responsive weather app built with the OpenWeatherMap API.",
        es: "Diseño y desarrollo de una app del clima simple y responsive construida con la API de OpenWeatherMap.",
        it: "Progettazione e sviluppo di una semplice app meteo responsive realizzata con l'API OpenWeatherMap.",
      },
      {
        en: "Developed with React and CSS.",
        es: "Desarrollada con React y CSS.",
        it: "Sviluppata con React e CSS.",
      },
    ],
    techStack: ["javascript", "react", "css3"],
    images: {
      banner: "/assets/images/banner-weather-app.webp",
      screenshots: [
        { src: "/assets/images/wellweather.webp" },
        { src: "/assets/images/weather-app2.webp" },
      ],
    },
    links: [
      {
        label: { en: "Deploy", es: "Deploy", it: "Deploy" },
        href: "https://wellweatherapp.netlify.app/",
      },
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/wellnahuel/weatherApp-Responsive",
      },
    ],
    year: 2022,
  },
  {
    id: "agoosto",
    number: "004",
    title: {
      en: "Agustín Orihuela's Portfolio",
      es: "Portfolio de Agustín Orihuela",
      it: "Portfolio di Agustín Orihuela",
    },
    tagline: {
      en: "Portfolio for a graphic designer",
      es: "Portfolio para un diseñador gráfico",
      it: "Portfolio per un graphic designer",
    },
    description: [
      {
        en: "Development of a portfolio for a talented graphic designer, using React and libraries like framer-motion. The site is responsive.",
        es: "Desarrollo de un portfolio para un talentoso diseñador gráfico, usando React y librerías como framer-motion. El sitio es responsive.",
        it: "Sviluppo di un portfolio per un talentuoso graphic designer, usando React e librerie come framer-motion. Il sito è responsive.",
      },
      {
        en: "Styles designed with TailwindCSS. The site has a blog format showing Agustín's projects, services and contact channels.",
        es: "Estilos diseñados con TailwindCSS. El sitio tiene formato blog, donde se muestran los proyectos, servicios y canales de contacto de Agustín.",
        it: "Stili progettati con TailwindCSS. Il sito ha un formato blog, dove vengono mostrati i progetti, i servizi e i canali di contatto di Agustín.",
      },
    ],
    techStack: ["javascript", "react", "tailwind"],
    images: {
      banner: "/assets/images/agoosto-banner-color.webp",
      screenshots: [
        {
          src: "/assets/images/agoosto-foto-1.webp",
          caption: { en: "About section", es: "Sección about", it: "Sezione about" },
        },
        {
          src: "/assets/images/agoosto-foto-2.webp",
          caption: { en: "Projects section", es: "Sección de proyectos", it: "Sezione progetti" },
        },
        {
          src: "/assets/images/agoosto-foto-3.webp",
          caption: { en: "Contact section", es: "Sección de contacto", it: "Sezione contatti" },
        },
      ],
    },
    links: [
      {
        label: { en: "Deploy", es: "Deploy", it: "Deploy" },
        href: "https://agoosto.netlify.app/",
      },
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/wellnahuel/Portfolio-Agoosto-2",
      },
    ],
    year: 2023,
  },
  {
    id: "calculator",
    number: "005",
    title: {
      en: "Calculator",
      es: "Calculadora",
      it: "Calcolatrice",
    },
    tagline: {
      en: "Classic calculator with TypeScript and MaterialUI",
      es: "Calculadora clásica con TypeScript y MaterialUI",
      it: "Calcolatrice classica con TypeScript e MaterialUI",
    },
    description: [
      {
        en: "Classic calculator. A simple app to put TypeScript and MaterialUI concepts into practice. The site is responsive.",
        es: "Calculadora clásica. Una app simple para poner en práctica conceptos de TypeScript y MaterialUI. El sitio es responsive.",
        it: "Calcolatrice classica. Un'app semplice per mettere in pratica i concetti di TypeScript e MaterialUI. Il sito è responsive.",
      },
    ],
    techStack: ["typescript", "mui"],
    images: {
      banner: "/assets/images/calculatorts-banner-color.webp",
      screenshots: [{ src: "/assets/images/calculatorts-foto-1.webp" }],
    },
    links: [
      {
        label: { en: "Deploy", es: "Deploy", it: "Deploy" },
        href: "https://calculatortsmui.netlify.app/",
      },
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/wellnahuel/TS_MaterialUI_Calculator",
      },
    ],
    year: 2023,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
