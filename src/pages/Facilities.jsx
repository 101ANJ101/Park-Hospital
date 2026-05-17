import React from 'react';

export default function Facilities() {
  return (
    <div className="pt-[100px]">
      {/* Cinematic Hero */}
      <section className="relative min-h-[819px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfiNMqlTbSJGEJ-XMAtTcZFyg3r3zslxgIfmJE2cozlOOxK7kXdbnS9cjweqwkhWogbhmqiju13_uGo7-9d1tkozb3_g6GvuzA4IGZQ3gPxPnW-xRCXW8wWv3kIys4wBiFdwnHBuIocTuSby3TZMlpphrsvlvyCDfcKWEj230YL7dyeCLABR5U1q_N4_BUckyRmZvPGQwTXcPS1s9gxeAO9IlU85yvPBYU712hW4xJCDxtYZNJb1PXBOe7CLkhvUGBkTs6YdiIfFN" 
            alt="Hospital atrium corridor"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center">
            <span className="text-secondary font-label-sm uppercase tracking-[0.2em] mb-4">World-Class Infrastructure</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-6 text-balance">Infrastructure of Healing.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl text-balance">
              Where architectural elegance meets cutting-edge medical technology. Our facilities are designed not just to treat, but to comfort, calm, and accelerate recovery.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded hover:bg-primary/90 transition-colors font-body-md flex items-center gap-2">
                Explore Facilities
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Diagnostics */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-balance">Precision Meets Compassion.</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Our diagnostic center and robotic surgery suites represent the pinnacle of medical technology, ensuring accurate diagnoses and minimally invasive procedures.
              </p>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container">biotech</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-[24px] text-primary mb-2">Robotic Surgery Suites</h3>
                    <p className="font-body-md text-on-surface-variant">Next-generation da Vinci surgical systems offering unparalleled precision, smaller incisions, and faster recovery times.</p>
                  </div>
                </div>
                
                <div className="w-full h-[1px] bg-outline-variant/30"></div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container">radiology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-[24px] text-primary mb-2">Advanced Imaging</h3>
                    <p className="font-body-md text-on-surface-variant">3 Tesla MRI and 256-slice CT scanners providing crystal-clear imaging in a claustrophobia-free environment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 mb-10 md:mb-0">
              <div className="relative">
                <img 
                  className="w-full h-auto rounded-lg shadow-[0_20px_60px_-15px_rgba(15,39,64,0.1)] object-cover aspect-[4/3]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQg0Sohr2O8-GTAA1GHcrEvyvAN7hs45dNG4vLuHaxd0eLL1yV8Zf0xCTosbil_Jn0gc4ETtT435veDbPW9WJHOpBCl0VP2xLE-DkVi6fcBdEecmmbPGFY_aRnriCJfIHWT_SNZ8XyKqWIfmveXQJ_RZmVhb3YTOv2GEToZTdvngfVII2dVM4avPX4MQg77tw7fMSnPUafC29PyTbnVXoSwOkhBlM92d1jP6UoGa8fey1vbq2dzz5CGQsWF24BLmQasfZssTbHWE6R" 
                  alt="Operating theater"
                />
                <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-lg shadow-[0_20px_40px_-15px_rgba(15,39,64,0.08)] border border-outline-variant/20 hidden md:block max-w-[250px]">
                  <p className="font-headline-md text-[40px] text-primary mb-1">99.8%</p>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Precision Rate in Robotic Procedures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Comfort */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-label-sm uppercase tracking-[0.2em] mb-4 block">Patient Experience</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 text-balance">Healing in Comfort.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-balance">
              We believe environment plays a crucial role in recovery. Our patient suites blend Scandinavian minimalism with warm, residential comfort to reduce stress and promote healing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,39,64,0.05)] border border-outline-variant/10 group hover:shadow-[0_20px_40px_-15px_rgba(15,39,64,0.1)] transition-shadow duration-300">
              <img 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHvcnGupaFbQXEjqms9G_vjSEyTo6IFPUd6xkO5xNpB9MNtIen4BiGpBZ3wUWNVNJss5FqL9GR9-_W52cAPE7N-YHlWDY7fN9J5NjD0Rg86Bk1NrZ5mVeNTeT2EMSL0yfE-t2i-SnvGmh3awkL4Iuy082XG2fH8dFRHPt7eBxL7DvZplu5IO0fX6gvjGg1fX0TOgjDonAyF__qUTQAMA9TUMtTd1_xW_s48cO_vqbprerSfWD9IXveJkQ2OQrfRkK0RZfzJen--YJs" 
                alt="Scandinavian healing suite"
              />
              <div className="p-8">
                <h3 className="font-headline-md text-[24px] text-primary mb-3">Premium Healing Suites</h3>
                <p className="font-body-md text-on-surface-variant">Private, sound-proofed rooms with circadian lighting, ergonomic seating for family, and integrated entertainment systems.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,39,64,0.05)] border border-outline-variant/10 group hover:shadow-[0_20px_40px_-15px_rgba(15,39,64,0.1)] transition-shadow duration-300 md:-translate-y-8">
              <img 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYprG50mFDL-tlsV1ok9yqKlOi2pLp0epvZEk_XCYhYZdWW0GP3VVDKdXynXHreAZOKL_UvmV6NPTlVg7c38_SVtWhO_-dtlq8So2FcMQNkOxE7oFju1fG63Mvu9B9nm7oTqYiE_qWjV1PAsWzO7eUNYEAy8yIRhJ6j1hJbgsu7krJ41CJyhWrz_Ngcr7bveW-xPNTZ5z9BR6OjSylOsRxhk4pQ2BSBs-52PBW5A94pBXCXUpUtHALk3pMGKRzo7x-EHqU9rjRC7WX" 
                alt="Lounge sanctuary"
              />
              <div className="p-8">
                <h3 className="font-headline-md text-[24px] text-primary mb-3">Calm Sanctuaries</h3>
                <p className="font-body-md text-on-surface-variant">Dedicated quiet zones and meditative gardens throughout the hospital designed to provide respite for patients and families.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(15,39,64,0.05)] border border-outline-variant/10 group hover:shadow-[0_20px_40px_-15px_rgba(15,39,64,0.1)] transition-shadow duration-300">
              <img 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQjRpiGGgYeqNj4w1R-oCKl7PIaCDM44ReHkbdsloEnoUdgAIUPsuo5o5Az5lOxv4fMEBQZt12vzl_gfq9A0upoWgwsnQUrQ3-vktLeAVpUWWQR76CRXU11ncyj93tTb35PmnB9SMow_hiRf9kjKbn5F1EHj67YJusSGuPrPPWg92jbU9f127qhd5l9HdZU7frYED6njEz2IDRYFTpyG-4yKiwcXOdk6VV3uUK3uBDj1WkvTTzMsw8QlSOdty5T61Im4D74hpxs0B" 
                alt="Smart patient room"
              />
              <div className="p-8">
                <h3 className="font-headline-md text-[24px] text-primary mb-3">Smart Room Control</h3>
                <p className="font-body-md text-on-surface-variant">Empowering patients with tablet-based control over room temperature, lighting, meal ordering, and direct communication with care teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
