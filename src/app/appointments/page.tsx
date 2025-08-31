import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Appointments() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Request an Appointment</h1>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Schedule Your Visit</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to schedule your appointment? Call us directly or use our patient portal to request an appointment online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our scheduling team:</p>
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
                <p className="text-gray-600 mb-4">Request appointments online 24/7:</p>
                <a 
                  href="/patient-portal" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Access Patient Portal
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Please arrive 15 minutes early for your appointment</li>
                <li>• Bring your insurance card and photo ID</li>
                <li>• List of current medications</li>
                <li>• Any relevant medical records or test results</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}