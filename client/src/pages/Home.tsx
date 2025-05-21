import { useEffect, useRef, useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useQuery } from '@tanstack/react-query';
import { Project } from '@/types/project';
import { konamiCode } from '@/lib/utils';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

export default function Home() {
  const [konamiPosition, setKonamiPosition] = useState(0);
  const [konamiActive, setKonamiActive] = useState(false);
  
  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });
  
  // Konami code easter egg
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === konamiCode[konamiPosition]) {
        const newPosition = konamiPosition + 1;
        setKonamiPosition(newPosition);
        
        if (newPosition === konamiCode.length) {
          setKonamiActive(true);
          document.body.style.backgroundImage = "url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"%3E%3Cpath d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\" fill=\"%23FF66B2\"%2F%3E%3C%2Fsvg%3E')";
          document.body.style.backgroundSize = "100px 100px";
          
          setTimeout(() => {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "black";
            setKonamiActive(false);
            setKonamiPosition(0);
          }, 3000);
        }
      } else {
        setKonamiPosition(0);
      }
    }
    
    document.addEventListener('keydown', handleKeydown);
    
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [konamiPosition]);
  
  function getProjectRows() {
    const rows = [];
    for (let i = 0; i < projects.length; i += 2) {
      rows.push(
        <tr key={i}>
          <ProjectCard project={projects[i]} />
          {projects[i + 1] && <ProjectCard project={projects[i + 1]} />}
        </tr>
      );
    }
    return rows;
  }
  
  return (
    <div className={`min-h-screen ${konamiActive ? 'konami-active' : ''}`}>
      <Header />
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="container mx-auto px-4 mb-12">
        <div className="animated-bg p-1 rounded-lg">
          <div className="bg-black p-6 rounded-lg">
            <svg 
              className="float-right animate-float" 
              width="120" 
              height="120" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#FF66B2" fillOpacity="0.7" stroke="#FFFFFF" strokeWidth="0.5"/>
              <path d="M12 7L14.5 12L12 17L9.5 12L12 7Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5"/>
            </svg>
            
            <h2 className="font-cute text-3xl text-lavender mb-4">✧･ﾟ Welcome to my space! ･ﾟ✧</h2>
            
            <p className="font-comic text-lg mb-4">
              Hiii! I'm so excited you found my cute little corner of the internet! This is where I share all my super kawaii projects and stuff I've been working on! 
            </p>
            
            <p className="font-comic text-lg mb-4">
              I love creating things that are as cute as they are functional! Explore around and don't forget to check out the secret areas... ଘ(੭ˊᵕˋ)੭✧
            </p>
            
            <div className="text-center mt-8">
              <span className="inline-block bg-hot-pink px-4 py-2 rounded-full animate-pulse font-pixel-body text-lg text-black">✨ Scroll down for more cuteness! ✨</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="container mx-auto px-4 mb-12">
        <table className="y2k-table w-[90%] mx-auto">
          <tbody>
            <tr>
              <td colSpan={3} className="text-center">
                <h2 className="font-cute text-3xl text-cyber-blue mb-4">✧･ﾟ About Meee! ･ﾟ✧</h2>
              </td>
            </tr>
            <tr>
              <td className="w-1/3">
                <div className="border-4 border-neon-green p-2 text-center">
                  <div className="bg-lavender p-1">
                    <div className="bg-black p-4">
                      <svg 
                        className="mx-auto" 
                        width="200" 
                        height="200" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="8" r="5" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
                        <path d="M20 19v-1c0-4.4-3.6-8-8-8s-8 3.6-8 8v1h16z" fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
                      </svg>
                    </div>
                  </div>
                  <p className="font-pixel-body text-hot-pink mt-2">me irl ^_^</p>
                </div>
              </td>
              <td className="w-1/3">
                <p className="font-comic text-lg mb-2">
                  Heyyyy! I'm a super creative person who loves all things cute and Y2K! I'm passionate about web design, digital art, and making things that make people smile! 
                </p>
                <p className="font-comic text-lg">
                  When I'm not coding, you can find me collecting pixel art, playing with my virtual pets, or hunting for vintage tech!
                </p>
              </td>
              <td className="w-1/3">
                <div className="bg-black p-3 border-2 border-hot-pink rounded-lg">
                  <h3 className="font-pixel-body text-xl text-bright-yellow mb-2">✧ My Skills ✧</h3>
                  <ul className="list-disc list-inside font-comic">
                    <li className="text-cyber-blue">Web Development</li>
                    <li className="text-neon-green">Pixel Art</li>
                    <li className="text-lavender">UI/UX Design</li>
                    <li className="text-hot-pink">Digital Illustration</li>
                    <li className="text-bright-yellow">Animation</li>
                  </ul>
                </div>
                
                <svg 
                  className="mt-4 mx-auto animate-float" 
                  width="80" 
                  height="80" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
                    fill="#FFFF66" stroke="#FFFFFF" strokeWidth="0.5" transform="rotate(45 12 12)"/>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 mb-12">
        <div className="text-center mb-6">
          <h2 className="font-cute text-3xl text-hot-pink inline-block relative">
            ✧･ﾟ My Projects ･ﾟ✧
            <span className="absolute -top-6 -right-6 text-2xl animate-sparkle">✨</span>
            <span className="absolute -bottom-4 -left-6 text-2xl animate-sparkle">✨</span>
          </h2>
        </div>
        
        <table className="project-table y2k-table w-[90%] mx-auto">
          <tbody>
            {getProjectRows()}
          </tbody>
        </table>
        
        {/* Under construction section */}
        <div className="mt-8 text-center">
          <svg 
            className="inline-block animate-float" 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" 
              fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
          </svg>
          
          <p className="font-pixel-body text-bright-yellow text-lg animate-blink inline-block ml-3">
            More projects under construction! Check back soon! (◕‿◕✿)
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 mb-12">
        <div className="animated-bg p-1 rounded-lg">
          <div className="bg-black p-6 rounded-lg">
            <h2 className="font-cute text-3xl text-lavender mb-4 text-center">✧･ﾟ Contact Me! ･ﾟ✧</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="glitter-border p-4">
                  <h3 className="font-pixel-body text-xl text-hot-pink mb-3">✧ Send me a message! ✧</h3>
                  
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                      <label className="block font-comic text-cyber-blue mb-1">Your Name:</label>
                      <input type="text" className="w-full bg-black border-2 border-hot-pink p-2 text-white font-comic" placeholder="Enter your name" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block font-comic text-cyber-blue mb-1">Your Email:</label>
                      <input type="email" className="w-full bg-black border-2 border-hot-pink p-2 text-white font-comic" placeholder="Enter your email" />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block font-comic text-cyber-blue mb-1">Your Message:</label>
                      <textarea className="w-full bg-black border-2 border-hot-pink p-2 text-white font-comic h-32" placeholder="What would you like to say?"></textarea>
                    </div>
                    
                    <div className="text-center">
                      <button type="submit" className="bg-neon-green text-black px-6 py-2 rounded-full font-pixel-body hover:bg-bright-yellow">
                        Send Message! ✉
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="glitter-border p-4 h-full">
                  <h3 className="font-pixel-body text-xl text-hot-pink mb-3">✧ Find me online! ✧</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg 
                        className="mr-3" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
                      </svg>
                      <a href="mailto:kawaii@example.com" className="font-comic text-cyber-blue hover:text-bright-yellow">kawaii@example.com</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg 
                        className="mr-3" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="8" fill="#CC99FF" stroke="#FFFFFF" strokeWidth="0.5"/>
                        <circle cx="12" cy="8" r="2" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5"/>
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#CC99FF" stroke="#FFFFFF" strokeWidth="0.5" transform="scale(0.45) translate(13, 13)"/>
                      </svg>
                      <a href="#" className="font-comic text-cyber-blue hover:text-bright-yellow">@kawaii_coder</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg 
                        className="mr-3" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="#33CCFF" stroke="#FFFFFF" strokeWidth="0.5"/>
                        <path d="M9 16V8l8 4z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.5"/>
                      </svg>
                      <a href="#" className="font-comic text-cyber-blue hover:text-bright-yellow">@kawaii_code_girl</a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg 
                        className="mr-3" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
                      </svg>
                      <a href="#" className="font-comic text-cyber-blue hover:text-bright-yellow">github.com/kawaii-coder</a>
                    </div>
                  </div>
                  
                  <svg 
                    className="mt-6 mx-auto animate-float" 
                    width="120" 
                    height="120" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
                      fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5" transform="rotate(45 12 12)"/>
                    <circle cx="12" cy="12" r="4" fill="#CC99FF" stroke="#FFFFFF" strokeWidth="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
