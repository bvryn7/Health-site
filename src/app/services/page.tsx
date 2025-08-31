import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              At A+ Family Medicine, we provide comprehensive healthcare services for the whole family.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Family Medicine</h3>
                <p className="text-gray-600">Complete primary care for all ages, from infants to seniors.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Preventive Care</h3>
                <p className="text-gray-600">Annual physicals, vaccinations, and health screenings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Chronic Disease Management</h3>
                <p className="text-gray-600">Ongoing care for diabetes, hypertension, and other conditions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Women's Health</h3>
                <p className="text-gray-600">Comprehensive care for women's health needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Pediatric Care</h3>
                <p className="text-gray-600">Specialized care for infants, children, and adolescents.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">Minor Procedures</h3>
                <p className="text-gray-600">In-office procedures and treatments.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}