import React from 'react';
import { Phone, ChevronRight, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-[#46756F] text-2xl font-['Petersburg'] font-semibold">
            BB Dental Care - Burbank Dental
          </div>
          <div className="hidden md:flex items-center gap-8 text-[#495057]">
            <a href="#treatments" className="hover:text-[#46756F] transition-colors">Treatments</a>
            <a href="#about" className="hover:text-[#46756F] transition-colors">About Us</a>
            <a href="#testimonials" className="hover:text-[#46756F] transition-colors">Success Stories</a>
            <a href="#pricing" className="hover:text-[#46756F] transition-colors">Pricing</a>
            <a href="tel:+18182563060" className="flex items-center gap-2 text-[#46756F] hover:text-[#598A84] transition-colors">
              <Phone size={18} />
              <span>(818) 256-3060</span>
            </a>
            <a 
              href="https://appointments.bbdentalcare.com/"
              className="bg-[#46756F] text-white px-6 py-2 rounded-full hover:bg-[#598A84] transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-['Petersburg'] text-[#46756F] leading-tight">
              Your brand<br />new smile
            </h2>
            <p className="text-[#495057] text-xl">
              Happy, healthy smiles are our focus.
            </p>
            <div>
              <a 
                href="https://appointments.bbdentalcare.com/"
                className="bg-[#46756F] text-white px-8 py-3 rounded-full hover:bg-[#598A84] transition-colors flex items-center gap-2 w-fit"
              >
                Book Appointment <Calendar size={18} />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
              alt="Happy patient with beautiful smile"
              className="rounded-2xl shadow-xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#D4AE7D] text-white p-4 rounded-xl">
              <p className="text-2xl font-bold">500+</p>
              <p>Happy Patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F1F0EB]" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                alt="Dentist at work"
                className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -right-6 -bottom-6 bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-[#46756F]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xl font-bold">4.9/5</span>
                </div>
                <p className="text-gray-600 mt-2">Based on 200+ reviews</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-['Petersburg'] text-[#46756F]">
                We treat your teeth,<br />
                how we'd treat our own.
              </h3>
              <p className="text-[#495057] leading-relaxed">
                Located in the heart of Burbank, BB Dental Care has been a premier location for close to 30 years and is proud to serve the local community, the surrounding areas and our dedicated patients, who travel from as far as Los Angeles and Glendale.
              </p>
              <p className="text-[#495057] leading-relaxed">
                We are a caring and compassionate family dental practice and work hard as a team to offer you a friendly and relaxing service.
              </p>
              <a 
                href="https://appointments.bbdentalcare.com/"
                className="text-[#46756F] flex items-center gap-2 font-semibold hover:gap-4 transition-all"
              >
                Book an appointment <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#46756F] text-white" id="treatments">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-['Petersburg'] mb-12">
            Healthy smiles<br />
            are our focus.
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'General Checkups',
              'Cosmetic Dentistry',
              'Teeth Whitening',
              'Dental Implants',
              'Orthodontics',
              'Emergency Care'
            ].map((service, index) => (
              <a 
                key={index} 
                href="https://appointments.bbdentalcare.com/"
                className="bg-[#598A84] p-6 rounded-xl hover:bg-[#77B8AD] transition-colors cursor-pointer"
              >
                <h4 className="text-xl font-semibold mb-2">{service}</h4>
                <p className="text-white/80">Professional care with state-of-the-art technology</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;