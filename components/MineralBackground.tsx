
import React, { useEffect, useRef } from 'react';

const MineralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let w = window.innerWidth;
    let h = window.innerHeight;
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > w) this.x = 0; if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0; if (this.y < 0) this.y = h;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#e56417';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);
          if (distance < (w / 9) * (h / 9)) {
            const opacity = 1 - (distance / 15000);
            ctx!.strokeStyle = `rgba(229, 100, 23, ${opacity * 0.15})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const init = () => {
      particles = [];
      const density = (w * h) / 15000;
      for (let i = 0; i < density; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen" />;
};

export default MineralBackground;
