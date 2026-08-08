"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("Hero");
  const phrases = t.raw("typed") as string[];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];

    if (!deleting && text === current) {
      // Pause before starting to delete
      const timeout = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      // Move to the next phrase
      const timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden border-b border-border">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/front-landing2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {t("hello")}
          <br />
          <span className="whitespace-pre text-accent">
            {text}
            <span className="animate-blink">▊</span>
          </span>
        </h1>
        <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground">
          React · Next.js · TypeScript · Node.js
        </p>
      </div>
    </section>
  );
}
