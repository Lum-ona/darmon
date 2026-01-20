import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function SmokeCursor() {
  const canvasRef = useRef(null);
  const isPointerRef = useRef(false);

  // Cursor springs (tuned for natural cursor motion)
  const mouseX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.3 });
  const scale = useSpring(1, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let lastX = 0;
    let lastY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 12 + 6;
        this.speedX = (Math.random() - 0.5) * velocity * 0.15;
        this.speedY = -Math.random() * velocity * 0.2;
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += 0.25;
        this.opacity -= 0.015;
      }
      draw() {
        ctx.fillStyle = `rgba(119, 0, 255, ${this.opacity * 0.12})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;

      mouseX.set(clientX);
      mouseY.set(clientY);

      // Velocity-based smoke emission
      const dx = clientX - lastX;
      const dy = clientY - lastY;
      const velocity = Math.min(Math.hypot(dx, dy), 40);

      if (velocity > 1) {
        particles.push(new Particle(clientX, clientY, velocity));
      }

      lastX = clientX;
      lastY = clientY;

      // Pointer detection without React re-render
      const isPointer = window.getComputedStyle(target).cursor === "pointer";
      if (isPointer !== isPointerRef.current) {
        isPointerRef.current = isPointer;
        scale.set(isPointer ? 2.4 : 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "screen",
        }}
      />

      {/* Cursor */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 26,
          height: 26,
          scale,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(6px) brightness(1.2)",
          boxShadow: "0 0 18px rgba(255, 157, 0, 0.25)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
