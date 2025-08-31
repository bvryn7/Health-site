import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NewPatients() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">New Patients Welcome</h1>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="ml-3">
                <p className="text-lg font-medium text-green-800">
                  We are currently accepting new patients!
                </p>
                <p className="text-green-700">
                  Schedule your first appointment today.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Before Your First Visit</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Complete new patient paperwork online or arrive 20 minutes early
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Bring insurance card and photo ID
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      List of current medications and dosages
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Previous medical records or test results
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      List of allergies and previous surgeries
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Accept</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Most major insurance plans
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Medicare and Medicaid
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Self-pay patients welcome
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Flexible payment plans available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-semibold mb-6">Schedule Your Appointment</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                  <p className="text-gray-600 mb-4">Our friendly staff is ready to help:</p>
                  <div className="flex items-center gap-2 text-lg font-semibold text-blue-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:616-285-6450" className="hover:text-blue-800">616-285-6450</a>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Monday-Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Patient Portal</h3>
                  <p className="text-gray-600 mb-4">Register and schedule online:</p>
                  <a 
                    href="/patient-portal" 
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    New Patient Registration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}