import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "dot" | "ring" | "cross" | "diamond";
  rotation: number;
  rotationSpeed: number;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const types: Particle["type"][] = ["dot", "ring", "cross", "diamond"];
    particles.current = Array.from({ length: 45 }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      size: Math.random() * 4 + 1.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
      type: types[Math.floor(Math.random() * types.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
    }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const cyan = [0, 255, 209];
    const pink = [255, 51, 153];

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      const pts = particles.current;

      for (const p of pts) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.x < -20) p.x = w() + 20;
        if (p.x > w() + 20) p.x = -20;
        if (p.y < -20) p.y = h() + 20;
        if (p.y > h() + 20) p.y = -20;

        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        const col = p.type === "ring" || p.type === "diamond" ? pink : cyan;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${p.opacity})`;
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${p.opacity})`;
        ctx.lineWidth = 0.8;

        const s = p.size;
        switch (p.type) {
          case "dot":
            ctx.beginPath();
            ctx.arc(0, 0, s, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "ring":
            ctx.beginPath();
            ctx.arc(0, 0, s * 1.5, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case "cross":
            ctx.beginPath();
            ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
            ctx.moveTo(0, -s); ctx.lineTo(0, s);
            ctx.stroke();
            break;
          case "diamond":
            ctx.beginPath();
            ctx.moveTo(0, -s * 1.5);
            ctx.lineTo(s, 0);
            ctx.lineTo(0, s * 1.5);
            ctx.lineTo(-s, 0);
            ctx.closePath();
            ctx.stroke();
            break;
        }
        ctx.restore();
      }

      // Draw connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.strokeStyle = `rgba(0,255,209,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleField;
