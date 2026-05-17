import React from 'react';

export default function PatientCare() {
  return (
    <div className="pt-24 md:pt-32 pb-section-gap">
      {/* Cinematic Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="relative h-[614px] min-h-[500px] w-full rounded-xl overflow-hidden shadow-sm group">
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ep7wAiZTdwa3A_XESGhKfzUiN67D9RTOg9Od1jhiWykgJM-mtTtO1J-lPVQpmUCfvBI7y7SlyPTTOfDvt42wCUflkQZq3PS-n7QcYrDoEF_Ue0ChMDp33ec0yauQZEz_JjdSA9kI7_pacRx8ziiGvbU9e15MY1WoP9Tk-9Rwb74RrHeYreR-1Jlp3VLkKaNaEnMVpMhT4U1Qw3tzjS5PTTAAAURbnFE8uu4PvsX6j1KC84SV7__lXmW5HnzMXIsgC0zUPYe2w2pr" 
            alt="Doctor and patient talking in modern clinic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
            <h1 className="font-display-xl text-display-xl text-on-primary mb-6 text-balance">Healing Beyond Medicine</h1>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-8 max-w-xl">Every recovery is a story of resilience. We blend profound medical expertise with radical human empathy to guide you through your journey.</p>
            <button className="bg-surface/70 backdrop-blur-xl text-primary font-body-md text-body-md px-8 py-3 rounded-full hover:bg-surface transition-colors duration-300">Share Your Story</button>
          </div>
        </div>
      </section>

      {/* The Patient Journey */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 flex flex-col justify-center mb-8 md:mb-0">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Journey to Wellness</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">From the moment you arrive to your continued life in health, our structured care pathway is designed to support you entirely.</p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_40px_-10px_rgba(0,18,38,0.05)] border border-surface-variant/30 hover:shadow-[0_8px_50px_-10px_rgba(0,18,38,0.08)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">calendar_month</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">1. Appointment &amp; Arrival</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Seamless scheduling and a calming environment upon your first visit, designed to reduce anxiety.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_40px_-10px_rgba(0,18,38,0.05)] border border-surface-variant/30 hover:shadow-[0_8px_50px_-10px_rgba(0,18,38,0.08)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">stethoscope</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">2. Diagnosis &amp; Strategy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive evaluation by our experts, leading to a transparent and personalized treatment plan.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_40px_-10px_rgba(0,18,38,0.05)] border border-surface-variant/30 hover:shadow-[0_8px_50px_-10px_rgba(0,18,38,0.08)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">healing</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">3. Treatment &amp; Care</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Execution of your treatment plan with compassionate, round-the-clock support from our dedicated team.</p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_40px_-10px_rgba(0,18,38,0.05)] border border-surface-variant/30 hover:shadow-[0_8px_50px_-10px_rgba(0,18,38,0.08)] transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">home_health</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">4. Recovery &amp; Follow-Up</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Ongoing monitoring and rehabilitative support ensuring your return to a vibrant, healthy life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Testimonials (Asymmetrical Layout) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm uppercase rounded-full mb-4">Patient Stories</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Voices of Resilience</h2>
        </div>
        
        {/* Story 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mb-24">
          <div className="md:col-span-7">
            <img 
              className="w-full h-[500px] object-cover rounded-xl shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcsV1t216pFc8-4dzzLFXMSZKuzi0FmO-7ujfUB8VX6VTJoBIA2rdUQZuiDrApY2c3CscHGmNs1bYpJqzDJteWZkEqXTt1KxYS6HAbCxt12dPsEewfVpf_hJn4OxwZ94U1lXjxJxC41Fpye4_QR49ss-kx1Id1kay0vdAfr6g5zDqr1SORp_QKi3WHsRC5eNEOexHp-wql79Q3-wucPv3YHU76XPVRXSakMgDQLRDFzbAGjBPKnf9Og9GcZKKSIAGab2R5k04nYFDB" 
              alt="Grateful senior patient"
            />
          </div>
          <div className="md:col-span-5 md:pl-8 mt-8 md:mt-0">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6 opacity-50">format_quote</span>
            <p className="font-headline-md text-headline-md text-primary mb-6 italic leading-relaxed text-balance">"The team didn't just treat my condition; they cared for my spirit. I felt seen, heard, and supported every single day of my recovery."</p>
            <div>
              <p className="font-body-md text-body-md font-bold text-on-surface">Eleanor Vance</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Cardiology Patient</p>
            </div>
          </div>
        </div>

        {/* Story 2 (Reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6 opacity-50">format_quote</span>
            <p className="font-headline-md text-headline-md text-primary mb-6 italic leading-relaxed text-balance">"From the precise diagnosis to the warm smiles of the nurses, Park Hospital provided an environment where healing felt inevitable."</p>
            <div>
              <p className="font-body-md text-body-md font-bold text-on-surface">Marcus Chen</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Orthopedic Recovery</p>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <img 
              className="w-full h-[500px] object-cover rounded-xl shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx1sssvLEQSTG9ih76GC4lcZh2s12-dwLDskGma8lR6andU20DoCMgrGiso8mQVz3m8GZoJvvbi_AkWPj3WhHtxTtaFj-MUi0MOSUArfpvAgHUPLCqOo8K414pdrtU-oZKKm7w3kEIM-CgWet2yve34BsoUgmASf6sCnSVpmSQ1yuP5XkQfW4MPtF4GfHNumA62db2fOkSx1JuOJTEPFXyQYvBriEWRn8HdINobp4FKyWVSnPMkdu_3K4D579EF7-cocJ6YlCTasT1" 
              alt="Athlete in physical therapy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
