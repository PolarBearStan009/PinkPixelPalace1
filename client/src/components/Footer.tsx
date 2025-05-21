import Marquee from './Marquee';

export default function Footer() {
  return (
    <footer className="bg-hot-pink text-black py-4">
      <div className="container mx-auto px-4">
        <Marquee 
          text="★☆★ Thank you for visiting my cute portfolio website! Made with lots of love and glitter! ★☆★ Come back soon! ★☆★" 
          backgroundColor="bg-hot-pink"
          textColor="text-black"
          borderColor="border-black"
        />
        
        <div className="flex justify-center items-center mt-4 gap-3">
          {/* Y2K aesthetic elements */}
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FF66B2" stroke="#000000" strokeWidth="0.5"/>
          </svg>
          
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#66FF99" stroke="#000000" strokeWidth="0.5"/>
          </svg>
          
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#33CCFF" stroke="#000000" strokeWidth="0.5"/>
            <path d="M12 7L14.5 12L12 17L9.5 12L12 7Z" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5"/>
          </svg>
        </div>
        
        <p className="text-center mt-3 font-comic">
          © 2023 My Super Cute Portfolio | Last updated with cuteness on {new Date().toLocaleDateString()}
        </p>
        
        <p className="text-center text-xs mt-1 font-pixel-body">
          Best viewed with Internet Explorer 6.0 or Netscape Navigator (jk lol)
        </p>
      </div>
    </footer>
  );
}
