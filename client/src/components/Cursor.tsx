import { useEffect, useRef } from 'react';
import { createSparkle } from '@/lib/utils';

export default function Cursor() {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);
  const sparkleCountRef = useRef(0);
  const MAX_SPARKLES = 15;
  
  useEffect(() => {
    if (!sparkleContainerRef.current) return;
    
    const container = sparkleContainerRef.current;
    
    function handleMouseMove(e: MouseEvent) {
      if (sparkleCountRef.current > MAX_SPARKLES) {
        const firstSparkle = container.querySelector('.sparkle-trail');
        if (firstSparkle) {
          container.removeChild(firstSparkle);
          sparkleCountRef.current--;
        }
      }
      
      createSparkle(e, container);
      sparkleCountRef.current++;
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <div id="sparkleContainer" ref={sparkleContainerRef} className="fixed inset-0 pointer-events-none z-50"></div>;
}
