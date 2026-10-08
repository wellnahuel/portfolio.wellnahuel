"use client";

import { useEffect, useRef } from "react";

export function AuroraBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // Accessibility: no animation for reduced-motion users
    }

    const EPSILON = 0.0005;
    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      // Smooth interpolation (lerp) for a fluid, subtle drift
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      layer.style.setProperty("--aurora-x", currentX.toFixed(4));
      layer.style.setProperty("--aurora-y", currentY.toFixed(4));

      const settled =
        Math.abs(targetX - currentX) <= EPSILON &&
        Math.abs(targetY - currentY) <= EPSILON;

      if (settled || document.hidden) {
        rafId = 0; // Let the loop die until the next input
        return;
      }

      rafId = requestAnimationFrame(animate);
    };

    const ensureAnimating = () => {
      if (rafId === 0 && !document.hidden) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      ensureAnimating();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      } else if (
        Math.abs(targetX - currentX) > EPSILON ||
        Math.abs(targetY - currentY) > EPSILON
      ) {
        ensureAnimating();
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("visibilitychange", onVisibilityChange);
    ensureAnimating();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafId);
      rafId = 0;
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="aurora-background pointer-events-none fixed inset-0 -z-10"
    >
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
    </div>
  );
}