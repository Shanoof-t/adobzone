"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  tw: number;
  sparkle: number;
}

interface StarsGalaxyProps {
  stars?: number;
  speed?: number;
  spread?: number;
  focal?: number;
  twinkle?: number;
  trail?: number;
  size?: number;
  fadeInRange?: number;
  reverseFly?: boolean;
  followCursor?: boolean;
  background?: string;
  starColor?: string;
  className?: string;
}

export function StarsGalaxy({
  stars = 450,
  speed = 1.2,
  spread = 5,
  focal = 2,
  twinkle = 0.7,
  trail = 0.85,
  size = 1.8,
  fadeInRange = 5,
  reverseFly = true,
  followCursor = false,
  background = "transparent",
  starColor = "#ffffff",
  className = "",
}: StarsGalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mouse = useRef({
    x: 0.5,
    y: 0.5,
  });

  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const DPR = window.devicePixelRatio || 1;

    const clamp = (
      value: number,
      min: number,
      max: number
    ) => {
      return Math.max(min, Math.min(max, value));
    };

    const createStar = (): Star => ({
      x: (Math.random() - 0.5) * spread,
      y: (Math.random() - 0.5) * spread,
      z: Math.random(),
      tw: Math.random() * Math.PI * 2,

      // Only a small percentage become sparkle stars
      sparkle: Math.random() > 0.94 ? 1 : 0,
    });

    const resize = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * DPR;
      canvas.height = rect.height * DPR;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    starsRef.current = Array.from(
      { length: stars },
      createStar
    );

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.current.x = clamp(
        (event.clientX - rect.left) / rect.width,
        0,
        1
      );

      mouse.current.y = clamp(
        (event.clientY - rect.top) / rect.height,
        0,
        1
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    let raf = 0;

    const animate = () => {
      const w = canvas.width / DPR;
      const h = canvas.height / DPR;

      /*
       * Background
       */
      ctx.globalAlpha = 1;

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.clearRect(0, 0, w, h);
      }

      /*
       * Optional motion trail
       */
      if (trail < 1 && background !== "transparent") {
        ctx.globalAlpha = 1 - trail;
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, w, h);
      }

      /*
       * Galaxy center
       */
      const cx = followCursor
        ? mouse.current.x * w
        : w / 2;

      const cy = followCursor
        ? mouse.current.y * h
        : h / 2;

      for (const s of starsRef.current) {
        /*
         * Depth
         */
        const depth =
          s.z * clamp(focal, 0.01, 10) + 0.001;

        /*
         * Position
         */
        const px =
          cx + (s.x / depth) * w;

        const py =
          cy + (s.y / depth) * h;

        /*
         * Move star through space
         */
        s.z += reverseFly
          ? clamp(speed, 0, 10) * 0.002
          : -clamp(speed, 0, 10) * 0.002;

        /*
         * Reset star
         */
        if (s.z <= 0 || s.z > 1) {
          Object.assign(s, createStar());
          continue;
        }

        /*
         * Twinkle animation
         */
        s.tw +=
          clamp(twinkle, 0, 1) * 0.05;

        const twinkleAmount =
          0.7 +
          Math.sin(s.tw) *
            clamp(twinkle, 0, 1) *
            0.3;

        /*
         * Fade based on depth
         */
        const alpha = Math.max(
          0,
          1 -
            s.z /
              clamp(
                fadeInRange,
                0.1,
                10
              )
        );

        /*
         * Star size
         */
        const radius =
          clamp(size, 0.1, 5) *
          (1 - s.z) *
          twinkleAmount;

        if (radius <= 0) continue;

        /*
         * ------------------------------------------------
         * SOFT OUTER GLOW
         * ------------------------------------------------
         */
        const glowRadius =
          Math.max(radius * 6, 3);

        const glowGradient =
          ctx.createRadialGradient(
            px,
            py,
            0,
            px,
            py,
            glowRadius
          );

        glowGradient.addColorStop(
          0,
          `rgba(255,255,255,${
            alpha * 0.55
          })`
        );

        glowGradient.addColorStop(
          0.15,
          `rgba(255,255,255,${
            alpha * 0.28
          })`
        );

        glowGradient.addColorStop(
          0.4,
          `rgba(255,255,255,${
            alpha * 0.1
          })`
        );

        glowGradient.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );

        ctx.globalAlpha = 1;
        ctx.fillStyle = glowGradient;

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          glowRadius,
          0,
          Math.PI * 2
        );

        ctx.fill();

        /*
         * ------------------------------------------------
         * BRIGHT CORE
         * ------------------------------------------------
         */
        ctx.globalAlpha =
          alpha * twinkleAmount;

        const coreGradient =
          ctx.createRadialGradient(
            px,
            py,
            0,
            px,
            py,
            Math.max(radius * 2, 1)
          );

        coreGradient.addColorStop(
          0,
          "#ffffff"
        );

        coreGradient.addColorStop(
          0.35,
          starColor
        );

        coreGradient.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );

        ctx.fillStyle = coreGradient;

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          Math.max(radius * 2, 1),
          0,
          Math.PI * 2
        );

        ctx.fill();

        /*
         * ------------------------------------------------
         * WHITE HOT CENTER
         * ------------------------------------------------
         */
        ctx.globalAlpha =
          alpha *
          Math.min(
            twinkleAmount * 1.15,
            1
          );

        ctx.fillStyle = "#ffffff";

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          Math.max(radius * 0.45, 0.35),
          0,
          Math.PI * 2
        );

        ctx.fill();

        /*
         * ------------------------------------------------
         * OCCASIONAL 4-POINT SPARKLE
         * ------------------------------------------------
         */
        if (s.sparkle === 1) {
          const sparkleStrength =
            (0.55 +
              Math.sin(s.tw * 1.5) *
                0.45) *
            alpha;

          const sparkleSize =
            Math.max(radius * 7, 4);

          ctx.globalAlpha =
            sparkleStrength * 0.5;

          ctx.strokeStyle = starColor;

          ctx.lineWidth = 0.5;

          /*
           * Vertical ray
           */
          ctx.beginPath();

          ctx.moveTo(
            px,
            py - sparkleSize
          );

          ctx.lineTo(
            px,
            py + sparkleSize
          );

          ctx.stroke();

          /*
           * Horizontal ray
           */
          ctx.beginPath();

          ctx.moveTo(
            px - sparkleSize,
            py
          );

          ctx.lineTo(
            px + sparkleSize,
            py
          );

          ctx.stroke();

          /*
           * Small diagonal rays
           */
          ctx.globalAlpha =
            sparkleStrength * 0.18;

          const diagonal =
            sparkleSize * 0.55;

          ctx.beginPath();

          ctx.moveTo(
            px - diagonal,
            py - diagonal
          );

          ctx.lineTo(
            px + diagonal,
            py + diagonal
          );

          ctx.stroke();

          ctx.beginPath();

          ctx.moveTo(
            px + diagonal,
            py - diagonal
          );

          ctx.lineTo(
            px - diagonal,
            py + diagonal
          );

          ctx.stroke();

          /*
           * Sparkle center
           */
          ctx.globalAlpha =
            sparkleStrength;

          ctx.fillStyle = "#ffffff";

          ctx.beginPath();

          ctx.arc(
            px,
            py,
            Math.max(radius, 0.7),
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );
    };
  }, [
    stars,
    speed,
    spread,
    focal,
    twinkle,
    trail,
    size,
    fadeInRange,
    reverseFly,
    followCursor,
    background,
    starColor,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}