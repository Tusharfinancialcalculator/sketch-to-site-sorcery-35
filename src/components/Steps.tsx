
import { useEffect, useRef } from 'react';
import { Smartphone, ShoppingCart, CreditCard, DollarSign, CheckCircle } from 'lucide-react';

const Steps = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (stepsRef.current) observer.observe(stepsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (stepsRef.current) observer.unobserve(stepsRef.current);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Open the E-commerce Platform on CardnCart.",
      icon: <Smartphone className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 2,
      title: "Add Items to Cart and proceed to the checkout page.",
      icon: <ShoppingCart className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 3,
      title: "Select CardnCart as Your Payment Method at the bottom of the payment options.",
      icon: <CreditCard className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 4,
      title: "Pay the Discounted Amount to CardnCart once a cardholder is found.",
      icon: <DollarSign className="text-cardnbg-yellow" size={24} />
    },
    {
      number: 5,
      title: "Enjoy Savings as the cardholder completes the payment, securing your order.",
      icon: <CheckCircle className="text-cardnbg-yellow" size={24} />
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cardnbg-blue text-white relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-10 right-10 opacity-70">
        <img src="/lovable-uploads/95d1af77-c828-4ab1-8726-a9e307856e98.png" alt="" className="w-32 h-32" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-50">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200C110.457 200 200 110.457 200 0V200H0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8EFF8B" stopOpacity="0.1" />
              <stop offset="1" stopColor="#8EFF8B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 slide-up"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            How to Order a Product via CardnCart
          </h2>
        </div>
        
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative bg-[#0A1232] p-8 rounded-2xl h-[250px] flex flex-col justify-between">
              <div className="mb-auto">
                <p className="text-white text-sm md:text-base font-medium">{step.title}</p>
              </div>
              
              <div className="flex items-end justify-between">
                <div className="text-[#8EFF8B] font-bold text-xl">STEP</div>
                {index === 5 - 1 && index === steps.length - 1 ? (
                  // Phone image for the last step
                  <div className="absolute bottom-0 right-0 p-2">
                    <img 
                      src="/lovable-uploads/f3eee27c-4ec4-44ad-92ee-2daa3c088a80.png" 
                      alt="Mobile app" 
                      className="w-32 h-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-white font-display text-[120px] leading-none font-bold opacity-90">
                    {step.number}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
