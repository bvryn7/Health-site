import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src="/family.jpg" 
        alt="Family background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Hope for the Future.
            </h1>
            
            <Link 
              href="/appointments"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Call For Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Angled Geometric Shapes at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Layer 1 - Deepest */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-purple-800"
          style={{
            clipPath: 'polygon(0% 60%, 100% 100%, 0% 100%)'
          }}
        ></div>
        
        {/* Layer 2 - Middle */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-40 bg-purple-600"
          style={{
            clipPath: 'polygon(0% 40%, 100% 80%, 100% 100%, 0% 100%)'
          }}
        ></div>
        
        {/* Layer 3 - Top */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-purple-400"
          style={{
            clipPath: 'polygon(0% 20%, 100% 60%, 100% 100%, 0% 100%)'
          }}
        ></div>
      </div>
    </section>
  );
}