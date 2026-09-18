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
  visible?: boolean;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText[];
  techStack: string[];
  images: {
    banner: string;
    hero?: string;
    screenshots: { src: string; caption?: LocalizedText }[];
  };
  links: ProjectLink[];
  /** Year the project was built */
  year: number;
}

type ProjectSeed = Omit<Project, "number">;

const projectSeeds: ProjectSeed[] = [
  {
    id: "entienda-y-aprenda",
    title: {
      en: "Entienda y Aprenda",
      es: "Entienda y Aprenda",
      it: "Entienda y Aprenda",
    },
    tagline: {
      en: "Tutoring marketplace connecting students with private tutors",
      es: "Marketplace de clases particulares que conecta estudiantes con tutores",
      it: "Marketplace di lezioni private che collega studenti con tutor",
    },
    description: [
      {
        en: "Full-stack SaaS platform that connects students with private tutors: tutor search by subject and university, pricing with group discounts and packs, class booking with a visual schedule picker and slot holds, real-time chat, and complete dashboards for both tutors and students.",
        es: "Plataforma SaaS full-stack que conecta estudiantes con tutores particulares: búsqueda de tutores por materia y universidad, precios con descuentos por grupo y packs, reserva de clases con selector visual de horarios y bloqueo de slots, chat en tiempo real y dashboards completos para tutores y estudiantes.",
        it: "Piattaforma SaaS full-stack che collega studenti con tutor privati: ricerca tutor per materia e università, prezzi con sconti di gruppo e pacchetti, prenotazione di lezioni con selettore visivo di orari e blocco degli slot, chat in tempo reale e dashboard complete sia per tutor che per studenti.",
      },
      {
        en: "Built with Next.js 16, React 19 and TypeScript on the frontend, and a REST API in Python with Flask, SQLAlchemy, PostgreSQL and Redis on the backend. Deployed with Docker in production.",
        es: "Desarrollado con Next.js 16, React 19 y TypeScript en el frontend, y una API REST en Python con Flask, SQLAlchemy, PostgreSQL y Redis en el backend. Desplegado con Docker en producción.",
        it: "Sviluppato con Next.js 16, React 19 e TypeScript nel frontend, e un'API REST in Python con Flask, SQLAlchemy, PostgreSQL e Redis nel backend. Distribuito con Docker in produzione.",
      },
    ],
    techStack: ["nextjs", "typescript", "react", "python", "flask", "postgresql", "redis", "docker"],
    images: {
      banner: "/assets/images/eya-06.png",
      screenshots: [
        { src: "/assets/images/eya-01.png", caption: { en: "Slot picker to view the tutor's availability", es: "Slot picker para ver la disponibilidad del profesor", it: "Selettore di slot per vedere la disponibilità del tutor" } },
        { src: "/assets/images/eya-02.png", caption: { en: "Tutor profile", es: "Perfil del profesor", it: "Profilo del tutor" } },
        { src: "/assets/images/eya-03.png", caption: { en: "Private chat section between tutors and students", es: "Sección de chats privados entre profesores y alumnos", it: "Sezione di chat private tra tutor e studenti" } },
        { src: "/assets/images/eya-04.png", caption: { en: "Dashboard for managing the tutor's payments, subjects taught and availability", es: "Dashboard para la gestión de los pagos del profesor, las materias que dicta y la disponibilidad", it: "Dashboard per la gestione dei pagamenti del tutor, delle materie insegnate e della disponibilità" } },
        { src: "/assets/images/eya-05.png", caption: { en: "Tutor search section", es: "Sección de búsqueda de profesores", it: "Sezione di ricerca dei tutor" } },
      ],
    },
    links: [
      { label: { en: "Website", es: "Sitio web", it: "Sito web" }, href: "https://entiendayaprenda.com/" },
      { label: { en: "Repository", es: "Repositorio", it: "Repository" }, href: "https://github.com/Entienda-y-Aprenda" },
    ],
    year: 2026,
  },
  {
    id: "torino-city-intelligence",
    title: {
      en: "Torino City Intelligence",
      es: "Torino City Intelligence",
      it: "Torino City Intelligence",
    },
    tagline: {
      en: "Interactive map of Turin to decide where to open a café",
      es: "Mapa interactivo de Turín para decidir dónde abrir un café",
      it: "Mappa interattiva di Torino per decidere dove aprire un caffè",
    },
    description: [
      {
        en: "Interactive map of Turin that scores the city's 94 statistical zones from 0 to 100 on the best place to open a café, with an explainable breakdown per variable.",
        es: "Mapa interactivo de Turín que puntúa las 94 zonas estadísticas de la ciudad de 0 a 100 sobre el mejor lugar para abrir un café, con un desglose explicable por variable.",
        it: "Mappa interattiva di Torino che assegna un punteggio da 0 a 100 alle 94 zone statistiche della città sul miglior posto per aprire un caffè, con una ripartizione spiegabile per variabile.",
      },
      {
        en: "Six toggleable POI layers (cafés, restaurants, transit, schools, services and green areas) over a choropleth basemap, with a fully static export and zero API keys.",
        es: "Seis capas de POI activables (cafés, restaurantes, transporte, escuelas, servicios y áreas verdes) sobre un mapa coroplético, con export estático y cero API keys.",
        it: "Sei layer di POI attivabili (caffè, ristoranti, trasporti, scuole, servizi e aree verdi) su una mappa coropletica, con export statico e zero API key.",
      },
    ],
    techStack: ["nextjs", "typescript", "react", "tailwind", "maplibre", "heroui"],
    images: {
      banner: "/assets/images/torino-03.png",
      screenshots: [
        { src: "/assets/images/torino-01.png", caption: { en: "Interactive map view", es: "Vista del mapa interactivo", it: "Vista della mappa interattiva" } },
        { src: "/assets/images/torino-02.png", caption: { en: "Interactive map view", es: "Vista del mapa interactivo", it: "Vista della mappa interattiva" } },
      ],
    },
    links: [
      { label: { en: "Deploy", es: "Deploy", it: "Deploy" }, href: "https://torino-city-intelligence.vercel.app/" },
      { label: { en: "Repository", es: "Repositorio", it: "Repository" }, href: "https://github.com/wellnahuel/torino-city-intelligence" },
    ],
    year: 2026,
  },
  {
    id: "athenas-club",
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
        en: "Athenas Club is a sportswear e-commerce platform built as a monorepo (api/ + web/). The frontend is built with React 19, TypeScript, and Vite, featuring a custom design system on top of Tailwind CSS v4 (reusable components such as Button, Card, Modal, etc.). Global state is managed with Zustand, including a cart persisted to localStorage that survives page refreshes.",
        es: "Athenas Club es una plataforma de e-commerce de indumentaria deportiva con arquitectura de monorepo (api/ + web/). El frontend está construido con React 19, TypeScript y Vite, con design system propio sobre Tailwind CSS v4 (componentes reutilizables de Button, Card, Modal, etc.). El estado global se maneja con Zustand, incluyendo un carrito persistente en localStorage que sobrevive al refresco de la sesión.",
        it: "Piattaforma e-commerce realizzata come monorepo: frontend SPA con React 19, TypeScript, Vite e Tailwind CSS v4; backend Node.js/Express con PostgreSQL e Sequelize. Carrello persistente con Zustand, checkout integrato con le API di MercadoPago (con modalità demo di riserva), login multi-socio e profilo utente. Deploy del frontend su Vercel.",
      },
      {
        en: "The backend, built with Node.js/Express, exposes a REST API backed by PostgreSQL and Sequelize as the ORM (models for users, products, categories, cart, reviews, purchases, and roles). Checkout is integrated with MercadoPago payment preferences, with a demo fallback mode for development without credentials. Authentication is a multi-member demo login that lets you test different user profiles.",
        es: "El backend, en Node.js/Express, expone una API REST con PostgreSQL y Sequelize como ORM (modelos de usuarios, productos, categorías, carrito, reseñas, compras y roles). El checkout se integra con las preferencias de pago de MercadoPago, con un modo demo de respaldo para desarrollo sin credenciales. La autenticación es un login demo multi-socio que permite probar distintos perfiles de usuario.",
        it: "Il backend, in Node.js/Express, espone un'API REST con PostgreSQL e Sequelize come ORM (modelli di utenti, prodotti, categorie, carrello, recensioni, acquisti e ruoli). Il checkout si integra con le preferenze di pagamento di MercadoPago, con una modalità demo di riserva per lo sviluppo senza credenziali. L'autenticazione è un login demo multi-socio che permette di provare diversi profili utente.",
      },
      {
        en: "It includes data seeding, unified development scripts (dev.sh), a Bun-based toolchain, and frontend deployment as a static SPA on Vercel. The project also represents a successful migration from a legacy stack (Redux/Bootstrap/CRA) to a modern one, which involved redesigning global state management, the styling system, and the build pipeline.",
        es: "Incluye seed de datos, scripts de desarrollo unificados (dev.sh), toolchain con Bun y deploy del frontend como SPA estática en Vercel. El proyecto representa además una migración exitosa de un stack legacy (Redux/Bootstrap/CRA) a uno moderno, lo que implicó rediseñar el estado global, el sistema de estilos y el flujo de build.",
        it: "Include seed dei dati, script di sviluppo unificati (dev.sh), toolchain con Bun e deploy del frontend come SPA statica su Vercel. Il progetto rappresenta inoltre una migrazione di successo da uno stack legacy (Redux/Bootstrap/CRA) a uno moderno, che ha implicato ridisegnare la gestione dello stato globale, il sistema di stili e il flusso di build.",
      },
    ],
    techStack: [
      "typescript",
      "react",
      "vite",
      "tailwind",
      "zustand",
      "express",
      "postgresql",
      "sequelize",
      "mercadopago",
      "vercel",
    ],
    images: {
      banner: "/assets/images/athenas-01.png",
      hero: "/assets/images/athenas-02.png",
      screenshots: [
        {
          src: "/assets/images/athenas-03.png",
          caption: { en: "Shopping cart", es: "Carrito de compras", it: "Carrello acquisti" },
        },
        {
          src: "/assets/images/athenas-04.png",
          caption: { en: "Mercado Pago API for checkout", es: "API de Mercado Pago para checkout", it: "API di Mercado Pago per il checkout" },
        },
        {
          src: "/assets/images/athenas-05.png",
          caption: { en: "Activity enrollment", es: "Inscripción a actividades", it: "Iscrizione alle attività" },
        },
        {
          src: "/assets/images/athenas-06.png",
          caption: { en: "Dev team", es: "Equipo dev", it: "Team di sviluppo" },
        },
      ],
    },
    links: [
      {
        label: { en: "Deploy", es: "Deploy", it: "Deploy" },
        href: "https://athenas-reload-gamma.vercel.app/",
      },
      {
        label: { en: "Repository", es: "Repositorio", it: "Repository" },
        href: "https://github.com/wellnahuel/athenas-reload",
      },
    ],
    year: 2022,
  },
  {
    id: "foodsterr",
    visible: false,
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
      banner: "/assets/images/foodsterr-banner-color.png",
      screenshots: [
        {
          src: "/assets/images/foodsterr-foto1.png",
          caption: { en: "Home", es: "Inicio", it: "Home" },
        },
        {
          src: "/assets/images/foodsterr-foto2-1.png",
          caption: { en: "Recipe details", es: "Detalle de receta", it: "Dettaglio ricetta" },
        },
        {
          src: "/assets/images/foodsterr-foto3.png",
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
];

export const projects: Project[] = projectSeeds
  .filter((project) => project.visible !== false)
  .map((project, index) => ({
    ...project,
    number: String(index + 1).padStart(3, "0"),
  }));

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getTotalProjectCount(): string {
  return String(projects.length).padStart(3, "0");
}
