
import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (subheadingRef.current) observer.unobserve(subheadingRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="bg-[#2549E8] overflow-hidden min-h-screen flex flex-col items-center justify-center py-10 px-4 relative">
      {/* Background Design Elements removed */}
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-5xl">
        {/* Main Heading */}
        <h1 
          ref={headingRef}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-6 text-white slide-up tracking-tight leading-tight"
        >
          SAVE BIG<br />
          ON ONLINE<br />
          SHOPPING
        </h1>
        
        {/* Subheading */}
        <p 
          ref={subheadingRef}
          className="text-[#8EFF8B] text-xl md:text-3xl lg:text-4xl mb-8 slide-up font-display font-semibold"
          style={{ animationDelay: '0.2s' }}
        >
          NO CREDIT CARD REQUIRED
        </p>
        
        {/* Download Button */}
        <button 
          ref={buttonRef}
          className="bg-black text-white font-medium py-3 px-8 rounded-full flex items-center hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span>Download App</span>
          <Download className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
