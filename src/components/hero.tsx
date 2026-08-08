"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("Hero");
  const phrases = t.raw("typed") as string[];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Mouse parallax for the background
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    // Only enable on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let currentX = 0;
    let currentY = 0;
    let rafId = 0;

    const onMouseMove = (event: MouseEvent) => {
      const xFactor = window.innerWidth / 5;
      const yFactor = window.innerHeight / 5;
      targetX.current = event.clientX / xFactor;
      targetY.current = event.clientY / yFactor;
    };

    const animate = () => {
      // Smoothly interpolate towards the target for a fluid feel
      currentX += (targetX.current - currentX) * 0.08;
      currentY += (targetY.current - currentY) * 0.08;
      bg.style.transform = `translate3d(-${1.5 * currentX}px, -${1.5 * currentY}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    // Listen on the SECTION so any mousemove over the hero is captured,
    // then translate the background layer.
    section.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      bg.style.transform = "";
    };
  }, []);

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
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden border-b border-border"
    >
      {/* Background image with mouse parallax */}
      <div ref={bgRef} className="absolute -inset-8 will-change-transform">
        <Image
          src="/assets/images/front-landing2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block">{t("hello")}</span>
          <span className="mt-1 block break-words text-accent">
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
