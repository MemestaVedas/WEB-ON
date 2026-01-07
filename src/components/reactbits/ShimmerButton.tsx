import type { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function ShimmerButton({
  children,
  variant = 'primary',
  className = ''
}: ShimmerButtonProps) {
  const baseClasses = 'relative px-8 py-3 rounded-lg font-medium overflow-hidden group transition-all duration-300';
  const variantClasses = variant === 'primary'
    ? 'bg-[var(--accent-glow-1)] text-black hover:shadow-[0_0_20px_rgba(216,180,254,0.4)]'
    : 'glass text-[var(--accent-glow-1)] hover:bg-white/5 border border-[var(--accent-glow-1)]/20';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
