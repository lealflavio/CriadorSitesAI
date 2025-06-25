import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-gradient-to-r from-blue-accent to-neon-green rounded-full opacity-60";
      
      // Random starting position
      particle.style.left = "-10px";
      particle.style.top = Math.random() * window.innerHeight + "px";
      
      container.appendChild(particle);
      
      // Animate particle
      let position = -10;
      let verticalOffset = 0;
      const speed = 0.5 + Math.random() * 1;
      const amplitude = 50 + Math.random() * 50;
      const frequency = 0.01 + Math.random() * 0.02;
      
      const animate = () => {
        position += speed;
        verticalOffset = Math.sin(position * frequency) * amplitude;
        
        particle.style.left = position + "px";
        particle.style.transform = `translateY(${verticalOffset}px)`;
        
        if (position < window.innerWidth + 100) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Create particles at intervals
    const interval = setInterval(createParticle, 3000);
    
    // Create initial particles
    for (let i = 0; i < 4; i++) {
      setTimeout(createParticle, i * 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
