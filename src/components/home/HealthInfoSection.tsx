import Link from 'next/link';

const healthResources = [
  {
    title: 'Diseases & Conditions',
    description: 'Comprehensive information on symptoms, causes, and treatments.',
    href: '/conditions'
  },
  {
    title: 'Healthy Living',
    description: 'Expert advice on nutrition, fitness, and wellness.',
    href: '/healthy-living'
  },
  {
    title: 'Medications',
    description: 'Detailed information about prescription and over-the-counter drugs.',
    href: '/drugs'
  },
  {
    title: 'Tests & Procedures',
    description: 'Understanding medical tests and treatment procedures.',
    href: '/tests-procedures'
  }
];

export function HealthInfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mayo-container">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Health Information & Resources
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {healthResources.map((resource, index) => (
                <div key={index} className="mayo-card p-6">
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link 
                    href={resource.href} 
                    className="text-mayo-blue hover:text-mayo-blue-dark font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mayo-card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Patient Portal</h3>
              <p className="text-gray-600 mb-4">
                Secure access to your medical records, test results, and communication with your care team.
              </p>
              <Link href="/patient-portal" className="mayo-button block text-center">
                Sign In to Portal
              </Link>
            </div>
            
            <div className="mayo-card p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Questions about your care? Need to schedule an appointment? Our team is here to help.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-error">Emergency: 911</p>
                <p className="font-semibold">A+ Family Medicine: (616) 285-6450</p>
                <p className="text-sm text-gray-600">2849 Michigan St NE # 102, Grand Rapids, MI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}