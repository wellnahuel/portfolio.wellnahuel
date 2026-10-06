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

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Smooth interpolation (lerp) for a fluid, subtle drift
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      layer.style.setProperty("--aurora-x", currentX.toFixed(4));
      layer.style.setProperty("--aurora-y", currentY.toFixed(4));
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
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