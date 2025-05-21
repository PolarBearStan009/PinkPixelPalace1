interface MarqueeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

export default function Marquee({ 
  text, 
  backgroundColor = "bg-black", 
  textColor = "text-cyber-blue", 
  borderColor = "border-hot-pink" 
}: MarqueeProps) {
  return (
    <div className={`marquee ${backgroundColor} border-y-4 ${borderColor} my-4`}>
      <div className={`marquee-content font-pixel-body text-xl ${textColor}`}>
        {text}
      </div>
    </div>
  );
}
