import { ReactNode } from 'react';

interface GlitterBorderProps {
  children: ReactNode;
  className?: string;
}

export default function GlitterBorder({ children, className = '' }: GlitterBorderProps) {
  return (
    <div className={`glitter-border ${className}`}>
      {children}
    </div>
  );
}
