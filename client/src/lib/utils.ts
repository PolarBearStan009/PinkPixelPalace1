import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For konami code easter egg
export const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Function to create a sparkle at a position on the screen
export function createSparkle(
  e: MouseEvent,
  container: HTMLElement,
  colors: string[] = ['#FF66B2', '#33CCFF', '#66FF99', '#CC99FF', '#FFFF66']
) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-trail';
  sparkle.style.left = (e.clientX - 10) + 'px';
  sparkle.style.top = (e.clientY - 10) + 'px';
  sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  sparkle.style.opacity = '0.7';
  sparkle.innerHTML = '✨';
  container.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.style.opacity = '0';
    setTimeout(() => {
      if (sparkle.parentNode === container) {
        container.removeChild(sparkle);
      }
    }, 200);
  }, 500);
  
  return sparkle;
}

// Get random item from an array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
