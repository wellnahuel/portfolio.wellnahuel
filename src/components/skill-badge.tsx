import Image from "next/image";

const SKILL_ICONS: Record<string, string> = {
  javascript: "/assets/icons/icons8-javascript-logo.svg",
  react: "/assets/icons/icons8-react.svg",
  redux: "/assets/icons/icons8-redux.svg",
  postgresql: "/assets/icons/icons8-postgresql.svg",
  express: "/assets/icons/icons8-express-js.svg",
  sequelize: "/assets/icons/sequelize.svg",
  mercadopago: "/assets/icons/MercadoPagoIcon.png",
  bootstrap: "/assets/icons/icons8-bootstrap-48.png",
  css3: "/assets/icons/icons8-css3.svg",
  tailwind: "/assets/icons/tailwind-svgrepo-com.svg",
  chakra: "/assets/icons/chakraui-svgrepo-com.svg",
  sass: "/assets/icons/sass-svgrepo-com.svg",
  git: "/assets/icons/icons8-git.svg",
  typescript: "/assets/icons/icons8-typescript.svg",
  mui: "/assets/icons/icons8-material-ui.svg",
  postman: "/assets/icons/postman-svgrepo-com.svg",
  zustand: "/assets/icons/zustand.svg",
  vercel: "/assets/icons/vercel.svg",
  vite: "/assets/icons/vite.svg",
};

// PNG icons already carry their brand colors; SVG icons are monochrome
// black, so they need inverting in dark mode to stay visible.
const COLORED_PNGS = new Set([
  "mercadopago",
  "bootstrap",
]);

export function SkillBadge({ skill }: { skill: string }) {
  const src = SKILL_ICONS[skill];
  if (!src) return null;

  const needsInvert = src.endsWith(".svg") && !COLORED_PNGS.has(skill);

  return (
    <span
      title={skill}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-transform hover:scale-110"
    >
      <Image
        src={src}
        alt={skill}
        width={22}
        height={22}
        className={`h-[22px] w-[22px] object-contain ${needsInvert ? "dark:invert" : ""}`}
      />
    </span>
  );
}
