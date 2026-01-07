import { useRef, useState, useEffect, type ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function AnimatedCard({ children, className = '', glow = false }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${(mousePosition.y - 150) / 30}deg) rotateY(${(mousePosition.x - 150) / 30}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      }}
    >
      {glow && isHovered && (
        <div
          className="absolute inset-0 rounded-2xl opacity-40 blur-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--accent-glow-1), transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
