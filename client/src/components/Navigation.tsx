import { useState } from 'react';
import { Link } from 'wouter';
import Secret from './Secret';

export default function Navigation() {
  const [secretVisible, setSecretVisible] = useState(false);
  
  const handleSecretClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSecretVisible(true);
  };
  
  return (
    <div className="container mx-auto px-4 mb-8">
      <table className="nav-table y2k-table w-[90%] mx-auto">
        <tbody>
          <tr>
            <td className="text-center w-1/5 glitter-border">
              <svg
                className="mx-auto mb-2"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="#33CCFF" stroke="#FFFFFF" strokeWidth="0.5"/>
              </svg>
              <Link href="#home" className="font-pixel-body text-xl text-neon-green hover:text-bright-yellow">Home</Link>
            </td>
            
            <td className="text-center w-1/5 glitter-border">
              <svg
                className="mx-auto mb-2"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
              </svg>
              <Link href="#about" className="font-pixel-body text-xl text-neon-green hover:text-bright-yellow">About Me</Link>
            </td>
            
            <td className="text-center w-1/5 glitter-border">
              <svg
                className="mx-auto mb-2"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
              </svg>
              <Link href="#projects" className="font-pixel-body text-xl text-neon-green hover:text-bright-yellow">Projects</Link>
            </td>
            
            <td className="text-center w-1/5 glitter-border">
              <svg
                className="mx-auto mb-2"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#CC99FF" stroke="#FFFFFF" strokeWidth="0.5"/>
              </svg>
              <Link href="#contact" className="font-pixel-body text-xl text-neon-green hover:text-bright-yellow">Contact</Link>
            </td>
            
            <td className="text-center w-1/5 glitter-border">
              <svg
                className="mx-auto mb-2"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFFF66" stroke="#FFFFFF" strokeWidth="0.5"/>
              </svg>
              <a href="#" id="secret-link" onClick={handleSecretClick} className="font-pixel-body text-xl text-neon-green hover:text-bright-yellow">Secret!</a>
            </td>
          </tr>
        </tbody>
      </table>
      
      {secretVisible && <Secret onClose={() => setSecretVisible(false)} />}
    </div>
  );
}
