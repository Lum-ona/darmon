import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function SmokeCursor() {
  const canvasRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);

  // Smooth movement for the droplet
  const mouseX = useSpring(0, { damping: 15, stiffness: 250 });
  const mouseY = useSpring(0, { damping: 15, stiffness: 250 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;

      // Update droplet position
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Check if hovering over a clickable element
      const isClickable = window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);

      // Smoke particles (using your logic)
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(clientX, clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * -0.8 - 0.2;
        this.color = "rgba(119, 0, 255, 0.15)"; // Back to purple to match hero image
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size += 0.3;
        this.opacity -= 0.012;
      }
      draw() {
        ctx.fillStyle = this.color.replace("0.15", this.opacity * 0.1);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "screen",
        }}
      />

      {/* THE WATER DROPLET / MAGNIFYING CIRCLE */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 60 : 25, // Expands when hovering over links
          height: isPointer ? 60 : 25,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          backdropFilter: !isPointer ? "blur(4px) brightness(1.2)" : "none", // Droplet magnification effect
          boxShadow: "0 0 15px rgba(255, 157, 0, 0.2)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.3s, height 0.3s, background-color 0.3s",
        }}
      />
    </>
  );
}
