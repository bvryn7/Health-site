import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: "Our Team | A+ Family Medicine - Grand Rapids, MI",
  description: "Meet our experienced physicians and healthcare professionals at A+ Family Medicine in Grand Rapids, Michigan. Dedicated to providing exceptional family healthcare.",
};

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#a8d5ba] text-white py-20">
        <div className="mayo-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Dedicated Medical Team
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Our board-certified physicians and healthcare professionals are committed to providing 
              exceptional, personalized care for every member of your family in Grand Rapids, Michigan.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Board-certified physicians
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Comprehensive family care
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Patient-centered approach
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="mayo-container">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mayo-card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson, MD</h3>
              <p className="text-mayo-blue font-medium mb-3">Family Medicine Physician</p>
              <p className="text-gray-600 text-sm">
                Board-certified family medicine physician with over 15 years of experience 
                providing comprehensive care for patients of all ages.
              </p>
            </div>

            <div className="mayo-card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Michael Chen, MD</h3>
              <p className="text-mayo-blue font-medium mb-3">Family Medicine Physician</p>
              <p className="text-gray-600 text-sm">
                Specializes in preventive care, chronic disease management, and women&apos;s health. 
                Committed to building lasting relationships with patients and families.
              </p>
            </div>

            <div className="mayo-card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jennifer Martinez, NP</h3>
              <p className="text-mayo-blue font-medium mb-3">Nurse Practitioner</p>
              <p className="text-gray-600 text-sm">
                Family nurse practitioner providing comprehensive primary care with a focus 
                on patient education and preventive medicine.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mayo-card p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                At A+ Family Medicine, our team is committed to providing personalized, compassionate 
                healthcare for every member of your family. We believe in building strong doctor-patient 
                relationships based on trust, communication, and mutual respect. Our physicians and 
                healthcare professionals stay current with the latest medical advances to ensure you 
                receive the highest quality care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}