import Marquee from './Marquee';

export default function Header() {
  return (
    <header className="text-center py-4 relative overflow-hidden">
      {/* Decorative elements */}
      <svg 
        className="absolute top-2 left-5 animate-rotate" 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
      </svg>
      
      <svg 
        className="absolute top-2 right-5 animate-float" 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
          fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5" transform="rotate(45 12 12)"/>
        <circle cx="12" cy="12" r="5" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
      </svg>
      
      <h1 className="font-pixel text-hot-pink text-4xl md:text-6xl mb-2 animate-rainbow">✿ My Kawaii Portfolio ✿</h1>
      
      <Marquee text="★☆★ Welcome to my super cute portfolio website! Check out my amazing projects! ★☆★ Under construction! More cuteness coming soon! ★☆★" />
    </header>
  );
}
