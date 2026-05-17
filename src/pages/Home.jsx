import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-[100px]">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full z-10 relative">
          <div className="md:col-span-7 flex flex-col justify-center pt-20 md:pt-0">
            <h1 className="font-display-xl text-display-xl text-primary mb-6">
              Advanced Care.<br/>
              <span className="text-secondary">Human Touch.</span><br/>
              Every Time.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-[500px]">
              Modern medicine with compassion. We believe in treating the person, not just the condition, creating a healthier tomorrow for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                className="font-label-sm text-label-sm text-on-primary bg-primary px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg text-center"
                to="/book"
              >
                Book Appointment
              </Link>
              <button className="font-label-sm text-label-sm text-secondary border border-secondary px-8 py-4 rounded-full hover:bg-secondary/5 transition-colors">
                Emergency Care
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image Background / Asymmetrical Placement */}
        <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-0 opacity-20 md:opacity-100 pointer-events-none">
          <div className="w-full h-full relative rounded-bl-[100px] overflow-hidden">
            <img 
              alt="Doctor smiling and holding hands with a young patient in a bright, modern hospital room." 
              className="w-full h-full object-cover object-center" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4qADoAM_yOG_kN9G0GMD344ug8msqk1fFFnrWIyi4dUcmnH07iMFG4x1B3xvkNUgY_CJ9nxVZreUFaB31t7mNBKNN7IPoh5QdrRWCBNjHRtQJVNF8xaZ31IKNzEgkxHIyN3C88rtc4c-smBd6TQaiUCQ4UDgCWo3pLHhSucjhpeTY8DfQkhNf0Sxvclw9HYrkabVi2as4CkFbZfTm2h26SO8rHGjIlC0JK1LTEKUunuAHFfO5AimJ1ns9kmBp-npiHSjzK1opPsG"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent md:via-transparent"></div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Glass Bar */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto -mt-20 relative z-20">
        <div className="bg-surface/80 backdrop-blur-2xl rounded-2xl p-8 shadow-[0_20px_60px_-15px_rgba(0,18,38,0.05)] border border-surface-container-high">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined icon-fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">25+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Years of Trust</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined icon-fill" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">1.2L+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Patients Treated</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined icon-fill" style={{ fontVariationSettings: "'FILL' 1" }}>stethoscope</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">250+</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Expert Doctors</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined icon-fill" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              </div>
              <div>
                <div className="font-headline-md text-headline-md font-bold text-primary">24x7</div>
                <div className="font-label-sm text-label-sm text-on-surface-variant">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section (Bento Grid) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Our Specialties</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Specialized Care<br/>For Every Need</h2>
          </div>
          <Link 
            className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors inline-flex items-center gap-2"
            to="/specialties"
          >
            Explore All Specialties <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Card */}
          <Link 
            to="/specialties"
            className="md:col-span-8 group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer block"
          >
            <img 
              alt="Cardiology department visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjZbSDP0KJI8cvJwok46ZgDc-pspWh1EqMOKQbKy3bLzKRlPP2istZSPHwEvIx9qVAaX9WJTnF-YeC9EnVG0Cusc0E-rSKAnFbKd25jV8vqu_jd8daugXNdfxEWKNYGGtZzgA0XkK3jjhvwqIRVlJ7m9MjrT4dgg_aAQJblYbVa2HK2qJ7AYJc87s81X8QkeJ7W_svzFnG0CH5LSqzWRgjhbuKsfUZ96YOuAbxConylorNwvkDHiR6BH8w_zKS4R0BVG0MaQJvgqE8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Cardiology</h3>
                  <p className="font-body-md text-body-md text-on-primary/80">Advanced heart care and surgeries.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Small Card 1 */}
          <Link 
            to="/specialties"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer block"
          >
            <img 
              alt="Neurology department visual" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWmA6LiGAGdZgUcZOxY3Zc10v2B3JI3B-6wVc68AMbnNs9Gdz8U-jfoyKf1QU5w2TgHT8SjBE1d8anvp5rBfrY05rZRpsbxxIXB1qx42wj9wGobQ3ao0XuvcBr-KnnTixMKyUfCMlyqFVKyAQQSfI63tcQm_TiK6kIiPX67DzuDXd77l_n8kLcXL1mKfo9x6I8gYJB22yHD6TZiD_x4qlvJqLHQEo-WaGQKjSUD-AhehktzVCBZOCY8N1Xurn_a9ZJeA0m3f1U1PQs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Neurology</h3>
                  <p className="font-body-md text-body-md text-on-primary/80">Brain & nerve care.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-surface/20 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
