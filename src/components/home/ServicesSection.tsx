'use client';

import Link from 'next/link';
import { 
  HealthAndSafety, 
  Woman, 
  Medication, 
  MedicalServices, 
  Healing, 
  Spa,
  ChildCare,
  LocalHospital 
} from '@mui/icons-material';

const services = [
  {
    icon: <HealthAndSafety sx={{ fontSize: 32 }} />,
    title: 'Preventive Care',
    description: 'Comprehensive wellness exams, immunizations, and health screenings for all ages. Early detection and prevention are key to maintaining optimal health.',
    href: '/services',
    color: '#4A3B53'
  },
  {
    icon: <Woman sx={{ fontSize: 32 }} />,
    title: "Women's Health",
    description: 'Specialized care including IUD insertion/removal, Nexplanon implants, annual exams, and reproductive health services.',
    href: '/services',
    color: '#563A57'
  },
  {
    icon: <Medication sx={{ fontSize: 32 }} />,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, hypertension, heart disease, and other chronic conditions with personalized treatment plans.',
    href: '/services',
    color: '#4b5563'
  },
  {
    icon: <MedicalServices sx={{ fontSize: 32 }} />,
    title: 'Minor Procedures',
    description: 'In-office procedures including lesion removal, laceration repair, and other minor surgical treatments.',
    href: '/services',
    color: '#AFC1C2'
  },
  {
    icon: <Healing sx={{ fontSize: 32 }} />,
    title: 'Injury & Fracture Care',
    description: 'Complete fracture care with on-site X-ray services, sprains, strains, and acute injury treatment.',
    href: '/services',
    color: '#6b7280'
  },
  {
    icon: <Spa sx={{ fontSize: 32 }} />,
    title: 'Aesthetic Services',
    description: 'Professional skin care with ZO products, Xeomin/Botox treatments, and dermatological services.',
    href: '/services',
    color: '#3d3146'
  },
  {
    icon: <ChildCare sx={{ fontSize: 32 }} />,
    title: 'Pediatric Care',
    description: 'Comprehensive care for infants, children, and adolescents including well-child visits and developmental screenings.',
    href: '/services',
    color: '#5C6B78'
  },
  {
    icon: <LocalHospital sx={{ fontSize: 32 }} />,
    title: 'Acute Care',
    description: 'Same-day sick visits for acute illnesses, infections, minor emergencies, and urgent health concerns.',
    href: '/services',
    color: '#4A3B53'
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, A+ Family Medicine provides complete healthcare 
            services for every member of your family in a warm, professional environment.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ 
                  backgroundColor: `${service.color}15`,
                  color: service.color 
                }}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <Link 
                href={service.href} 
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group-hover:gap-3"
                style={{ color: service.color }}
              >
                Learn More 
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-sm p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Experience personalized healthcare with our dedicated team. Schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/appointments" 
                className="inline-flex items-center justify-center text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: '#4A3B53' }}
              >
                Schedule Appointment
              </Link>
              <Link 
                href="/new-patients" 
                className="inline-flex items-center justify-center border-2 font-bold px-8 py-4 rounded-lg transition-colors duration-200 hover:text-white"
                style={{ 
                  borderColor: '#4A3B53', 
                  color: '#4A3B53'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4A3B53'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                New Patients Welcome
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}