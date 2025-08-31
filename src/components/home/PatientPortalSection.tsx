import Link from 'next/link';

const portalFeatures = [
  { icon: '📝', label: 'New patient Registration' },
  { icon: '📋', label: 'Complete forms electronically' },
  { icon: '📅', label: 'Appointment requests' },
  { icon: '💊', label: 'Refill requests' },
  { icon: '❓', label: 'Ask a question (Providers or Staff)' },
  { icon: '💳', label: 'Pay your bill online' },
  { icon: '🔬', label: 'Access test results' },
  { icon: '📁', label: 'Personal document storage' }
];

export function PatientPortalSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mayo-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Patient Portal</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Patient Portal provides convenient access to your healthcare information and services 24/7.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-gray-700">{feature.label}</span>
                </div>
              ))}
            </div>
            
            <Link 
              href="/patient-portal" 
              className="mayo-button inline-block"
            >
              View Patient Portal
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quick Access</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-mayo-blue pl-4">
                <h4 className="font-medium text-gray-900">Schedule an Appointment</h4>
                <p className="text-gray-600">Call us at <a href="tel:6162856450" className="text-mayo-blue font-medium">(616) 285-6450</a></p>
              </div>
              
              <div className="border-l-4 border-mayo-blue pl-4">
                <h4 className="font-medium text-gray-900">New Patients</h4>
                <p className="text-gray-600">Ready to become a new patient? Learn what you need to know.</p>
                <Link href="/new-patients" className="text-mayo-blue hover:text-mayo-blue-dark">
                  Learn More →
                </Link>
              </div>
              
              <div className="border-l-4 border-mayo-blue pl-4">
                <h4 className="font-medium text-gray-900">Virtual Visits</h4>
                <p className="text-gray-600">Convenient telehealth appointments available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}