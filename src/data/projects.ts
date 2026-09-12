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
    id: "agoosto",
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
      banner: "/assets/images/agoosto-banner-color.png",
      screenshots: [
        {
          src: "/assets/images/agoosto-foto-1.png",
          caption: { en: "About section", es: "Sección about", it: "Sezione about" },
        },
        {
          src: "/assets/images/agoosto-foto-2.png",
          caption: { en: "Projects section", es: "Sección de proyectos", it: "Sezione progetti" },
        },
        {
          src: "/assets/images/agoosto-foto-3.png",
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
