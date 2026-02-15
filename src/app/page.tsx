"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
}

const COLORS = ["#4A00E0", "#00B4D8", "#FF6B35", "#00C853", "#FF006E"];

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 8000), 120);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        baseAlpha: Math.random() * 0.4 + 0.35,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch);
    window.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const mouseRadius = 180;
      const connectDist = 120;
      const particles = particlesRef.current;

      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse repulsion / attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          // Very gentle attraction towards mouse
          p.vx += (dx / dist) * force * 0.02;
          p.vy += (dy / dist) * force * 0.02;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        const alpha = dist < mouseRadius ? Math.min(p.baseAlpha + 0.4, 0.9) : p.baseAlpha;
        const size = dist < mouseRadius ? p.radius * (1 + (mouseRadius - dist) / mouseRadius) : p.radius;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();

        // Glow effect near mouse
        if (dist < mouseRadius) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
          glow.addColorStop(0, p.color + "30");
          glow.addColorStop(1, p.color + "00");
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const midX = (particles[i].x + particles[j].x) / 2;
          const midY = (particles[i].y + particles[j].y) / 2;
          const mouseDx = mouse.x - midX;
          const mouseDy = mouse.y - midY;
          const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

          // Show connections near mouse or between close particles
          const maxDist = mouseDist < mouseRadius * 1.5 ? connectDist * 2 : connectDist;
          if (dist < maxDist) {
            const alpha = mouseDist < mouseRadius ? 0.35 : 0.18;
            const lineAlpha = (1 - dist / maxDist) * alpha;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              mouseDist < mouseRadius
                ? `rgba(74, 0, 224, ${lineAlpha})`
                : `rgba(90, 90, 122, ${lineAlpha})`;
            ctx.lineWidth = mouseDist < mouseRadius ? 1.5 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw lines from mouse to nearby particles
      if (mouse.x > 0 && mouse.y > 0) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.2;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Mouse cursor glow
        ctx.beginPath();
        const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 60);
        cursorGlow.addColorStop(0, "rgba(74, 0, 224, 0.08)");
        cursorGlow.addColorStop(0.5, "rgba(0, 180, 216, 0.04)");
        cursorGlow.addColorStop(1, "rgba(0, 180, 216, 0)");
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: "none" }}
    />
  );
}


function HexGrid() {
  const hexes = Array.from({ length: 12 }).map((_, i) => ({
    x: (i % 4) * 90 + (Math.floor(i / 4) % 2) * 45,
    y: Math.floor(i / 4) * 78,
    delay: i * 0.15,
    color: COLORS[i % COLORS.length],
  }));

  return (
    <div className="relative w-[360px] h-[234px] mx-auto opacity-20">
      {hexes.map((hex, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: hex.x, top: hex.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15], scale: 1 }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: hex.delay },
            scale: { duration: 0.5, delay: 1 + hex.delay },
          }}
        >
          <svg width="80" height="70" viewBox="0 0 80 70">
            <polygon
              points="40,2 76,20 76,50 40,68 4,50 4,20"
              fill="none"
              stroke={hex.color}
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [dots, setDots] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Interactive particle network */}
      {mounted && <ParticleNetwork />}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/50 to-surface/0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl w-full px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 mt-16 md:mt-24"
        >
          <span className="text-3xl md:text-4xl font-bold gradient-text">
            AquaSoft
          </span>
        </motion.div>

        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent-purple/20 text-xs font-mono tracking-widest uppercase text-text-secondary">
            System Initializing
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          We&apos;re{" "}
          <span className="gradient-text">Building</span>
          <br />
          Something Amazing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto"
        >
          Our website is under construction. We&apos;re crafting the future of
          intelligent software{dots}
        </motion.p>

        {/* Hex grid decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mb-10 hidden md:block"
        >
          <HexGrid />
        </motion.div>

        {/* Status indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10 text-xs font-mono tracking-wider"
        >
          {[
            { label: "AI Engine", status: "Online", color: "text-accent-green" },
            { label: "Frontend", status: "Building", color: "text-accent-cyan" },
            { label: "API Layer", status: "Deploying", color: "text-accent-orange" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace("text-", "bg-")}`} />
              <span className="text-text-secondary uppercase">{item.label}:</span>
              <span className={item.color}>{item.status}</span>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  );
}
