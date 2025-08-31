'use client';

import { HeroBands } from './HeroBands';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  backgroundImage?: string;
}

export function HeroSection({ 
  title = "Your Health. Your Family. Our Priority.",
  subtitle,
  showPhone = true,
  backgroundImage = "/images/pexels-elly-fairytale-4543640.jpg"
}: HeroSectionProps) {
  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-gray-200 bg-cover bg-center"
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined 
      }}
    >
      {/* Dark overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      
      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 sm:px-12 z-10 w-full">
        <div className="max-w-2xl text-center md:text-left" style={{ marginLeft: '-40px' }}>
          <h1 className="font-extrabold text-5xl leading-tight mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-gray-200 text-xl mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Main CTA Button */}
            <a 
              href="/appointments"
              className="inline-flex items-center justify-center text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-lg hover:opacity-90"
              style={{ backgroundColor: '#4A3B53' }}
            >
              Call For Appointment
            </a>
            
          </div>
        </div>
      </div>

      {/* Angled bottom overlays - large, bold, layered prisms */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Bottom layer - darkest, tallest */}
        <div 
          className="absolute right-0 h-96"
          style={{ 
            bottom: '0px',
            left: '-1500px',
            backgroundColor: '#4b5563',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 55%, 50% 99.9%)' 
          }}
        ></div>
        
        
      </div>

      <HeroBands />
    </section>
  );
}