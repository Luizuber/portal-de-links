import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Ghost {
  x: number;
  y: number;
  color: string;
  speedX: number;
  speedY: number;
}

interface PacMan {
  x: number;
  y: number;
  direction: number;
  speed: number;
  color: string;
  glowColor: string;
}

export function PacManBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ghostsRef = useRef<Ghost[]>([]);
  const pacMansRef = useRef<PacMan[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /* 👻 GHOSTS */
    const ghostColors = ["#FF69B4", "#00FFFF", "#FF3B3B", "#FFA500"];
    ghostsRef.current = ghostColors.map((color) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      color,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));

    /* 🟡 PAC-MAN */
    const pacManColors = [
      { color: "#FFD700", glow: "rgba(255, 215, 0, 0.8)" },
      { color: "#FF4757", glow: "rgba(255, 71, 87, 0.8)" },
      { color: "#5FE3A1", glow: "rgba(95, 227, 161, 0.8)" },
      { color: "#4F7CEE", glow: "rgba(79, 124, 238, 0.8)" },
      { color: "#FF6B9D", glow: "rgba(255, 107, 157, 0.8)" },
      { color: "#00D9FF", glow: "rgba(0, 217, 255, 0.8)" },
    ];

    pacMansRef.current = pacManColors.map((c, index) => ({
      x: (canvas.width / (pacManColors.length + 1)) * (index + 1),
      y: Math.random() * canvas.height,
      direction: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 0.4,
      color: c.color,
      glowColor: c.glow,
    }));

    /* 🎮 DESENHOS */
    const drawMaze = () => {
      ctx.strokeStyle = "#1E90FF";
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.15;

      const grid = 80;
      for (let y = 0; y < canvas.height; y += grid) {
        for (let x = 0; x < canvas.width; x += grid) {
          if (Math.random() > 0.3) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + grid * 0.7, y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawPellets = () => {
      ctx.fillStyle = "#FFD700";
      ctx.globalAlpha = 0.3;

      for (let y = 0; y < canvas.height; y += 60) {
        for (let x = 0; x < canvas.width; x += 60) {
          if (Math.random() > 0.6) {
            ctx.beginPath();
            ctx.arc(x + 30, y + 30, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawGhost = (g: Ghost) => {
      const size = 20;
      ctx.fillStyle = g.color;
      ctx.globalAlpha = 0.15;

      ctx.beginPath();
      ctx.arc(g.x, g.y - size / 4, size / 2, Math.PI, 0);
      ctx.lineTo(g.x + size / 2, g.y + size / 4);
      ctx.lineTo(g.x - size / 2, g.y + size / 4);
      ctx.closePath();
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    const drawPacMan = (p: PacMan) => {
      const size = 40;
      ctx.shadowBlur = 20;
      ctx.shadowColor = p.glowColor;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(
        p.x,
        p.y,
        size / 2,
        p.direction + 0.3,
        p.direction + Math.PI * 2 - 0.3
      );
      ctx.lineTo(p.x, p.y);
      ctx.fill();

      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawMaze();
      drawPellets();

      ghostsRef.current.forEach((g) => {
        g.x += g.speedX;
        g.y += g.speedY;

        if (g.x <= 0 || g.x >= canvas.width) g.speedX *= -1;
        if (g.y <= 0 || g.y >= canvas.height) g.speedY *= -1;

        drawGhost(g);
      });

      pacMansRef.current.forEach((p) => {
        if (Math.random() < 0.01) {
          p.direction = Math.random() * Math.PI * 2;
        }

        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        drawPacMan(p);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.03) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />
    </>
  );
}
