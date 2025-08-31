import Link from 'next/link';

const services = [
  {
    icon: 'health_and_safety',
    title: 'Preventative Care',
    description: 'Newborn thru Adult care including immunizations and wellness exams to keep your family healthy.',
    href: '/preventive-care'
  },
  {
    icon: 'female',
    title: "Women's Health",
    description: 'IUD Insertion/Removal and Nexplanon Implant Insertion/Removal services.',
    href: '/womens-health'
  },
  {
    icon: 'medication',
    title: 'Chronic Disease Care',
    description: 'Expert management of chronic conditions with personalized care plans.',
    href: '/chronic-care'
  },
  {
    icon: 'medical_services',
    title: 'Minor Office Surgery',
    description: 'Lesion removal and laceration repair performed in our office.',
    href: '/minor-surgery'
  },
  {
    icon: 'healing',
    title: 'Fracture Care',
    description: 'Complete fracture care with on-site X-ray services available.',
    href: '/fracture-care'
  },
  {
    icon: 'spa',
    title: 'Dermatology Services',
    description: 'Zo Skin Care products and Xeomin/Botox treatments available.',
    href: '/dermatology'
  }
];

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="mayo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Offered</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A+ Family Medicine provides comprehensive medical services including acute illness care, care management, and specialized treatments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="mayo-card p-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mb-4 ${
                index % 3 === 0 ? 'bg-[#a8bad5]' : 
                index % 3 === 1 ? 'bg-[#a8d5ba]' : 
                'bg-[#d5a8a8]'
              }`}>
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={service.href} 
                className="text-mayo-blue hover:text-mayo-blue-dark font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}