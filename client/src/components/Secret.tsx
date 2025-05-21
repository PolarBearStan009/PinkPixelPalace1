interface SecretProps {
  onClose: () => void;
}

export default function Secret({ onClose }: SecretProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-lavender p-1 rounded-lg max-w-md">
        <div className="bg-black p-6 rounded-lg text-center">
          <h3 className="font-pixel text-xl text-bright-yellow mb-3">✧ You found a secret! ✧</h3>
          
          <svg 
            className="mx-auto mb-4 animate-float" 
            width="150" 
            height="150" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" fill="#CC99FF" stroke="#FFFFFF" strokeWidth="0.5"/>
            <circle cx="12" cy="12" r="4" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="0.5"/>
            <path d="M12 6L14 10H10L12 6Z" fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
            <path d="M12 18L14 14H10L12 18Z" fill="#66FF99" stroke="#FFFFFF" strokeWidth="0.5"/>
            <path d="M6 12L10 14V10L6 12Z" fill="#33CCFF" stroke="#FFFFFF" strokeWidth="0.5"/>
            <path d="M18 12L14 14V10L18 12Z" fill="#33CCFF" stroke="#FFFFFF" strokeWidth="0.5"/>
          </svg>
          
          <p className="font-comic text-hot-pink mb-3">
            You've discovered my secret treasure chest! Here's a special pixel art friend just for you!
          </p>
          
          <button 
            onClick={onClose}
            className="bg-cyber-blue text-black px-4 py-2 rounded-full font-pixel-body hover:bg-neon-green"
          >
            Close Secret ✨
          </button>
        </div>
      </div>
    </div>
  );
}
