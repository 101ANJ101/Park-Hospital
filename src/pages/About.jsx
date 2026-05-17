import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-[104px]"> {/* Offset for fixed nav */}
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <h1 className="font-display-xl text-display-xl text-primary mb-6">Care Beyond<br/>Technology.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
              At Park Hospital, we blend cutting-edge medical science with radical human empathy. Our commitment is not just to treat ailments, but to care for the whole person, providing a sanctuary of healing in Lucknow.
            </p>
            <div className="flex gap-4">
              <Link to="/doctors" className="px-8 py-3 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm inline-block">Our Medical Board</Link>
              <Link to="/specialties" className="px-8 py-3 border border-outline-variant text-on-surface rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container transition-colors inline-block">Our Services</Link>
            </div>
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-lg overflow-hidden relative shadow-lg">
              <img 
                className="w-full h-full object-cover" 
                src="/hospital.png" 
                alt="Park Hospital Facade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Mission & Values (Bento Grid) */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Our Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">We are guided by the dual pillars of The Caregiver and The Sage—offering unparalleled medical expertise delivered with profound compassion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="p-10 bg-surface border border-outline-variant/30 rounded-xl hover:shadow-md transition-shadow duration-300 col-span-1 lg:col-span-2 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Radical Empathy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">We understand that healing requires more than medicine. It requires listening, understanding, and creating an environment where patients feel truly seen and supported throughout their journey.</p>
              </div>
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-1/4 translate-y-1/4">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="p-10 bg-primary-container text-on-primary-container rounded-xl col-span-1">
              <span className="material-symbols-outlined text-4xl text-inverse-primary mb-6 block">science</span>
              <h3 className="font-headline-md text-headline-md text-on-primary mb-3">Scientific Rigor</h3>
              <p className="font-body-md text-body-md opacity-90">Uncompromising commitment to evidence-based practice and state-of-the-art medical technology.</p>
            </div>
            
            {/* Value 3 */}
            <div className="p-10 bg-secondary-container text-on-secondary-container rounded-xl col-span-1">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
              <h3 className="font-headline-md text-headline-md mb-3">Holistic Healing</h3>
              <p className="font-body-md text-body-md opacity-90">Addressing the physical, emotional, and psychological aspects of patient well-being.</p>
            </div>
            
            {/* Value 4 */}
            <div className="p-10 bg-surface border border-outline-variant/30 rounded-xl hover:shadow-md transition-shadow duration-300 col-span-1 lg:col-span-2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                  <span className="font-headline-md text-lg text-white">10+</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">Years of Excellence</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Since our founding, we have continuously evolved our practices while remaining rooted in our core mission of serving the community with dignity and respect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Editorial Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Guided by<br/>The Sage.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">Our medical leadership brings decades of clinical expertise, research, and educational excellence to ensure Park Hospital remains at the forefront of healthcare.</p>
            <Link className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary hover:text-secondary transition-colors border-b border-primary hover:border-secondary pb-1" to="/doctors">
              View Full Medical Board <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="lg:col-span-8 lg:col-start-6 flex flex-col gap-16 mt-16 lg:mt-0">
            {/* Leader 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-1/3 aspect-[3/4] rounded bg-surface-container overflow-hidden shrink-0">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="/Rajeev_Das.png"
                  alt="Dr. Rajeev Das"
                />
              </div>
              <div className="flex-1 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
                <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-[10px] uppercase tracking-widest mb-4">Manager &amp; Owner / General Medicine</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Dr. Rajeev Das</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">MBBS, MD, DNB (10+ Years Experience)</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Dr. Rajeev Das is a highly experienced physician and ICU specialist with over 10 years of practice in general medicine and hospital management. He has been instrumental in establishing Park Hospital as a trusted healthcare provider in Lucknow.</p>
              </div>
            </div>
            
            {/* Leader 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-1/3 aspect-[3/4] rounded bg-surface-container overflow-hidden shrink-0">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="/Neelam_Biswas.png"
                  alt="Dr. Neelam Biswas"
                />
              </div>
              <div className="flex-1 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant/30">
                <div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-[10px] uppercase tracking-widest mb-4">Owner / Obstetrics &amp; Gynecology</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Dr. Neelam Biswas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">MBBS, DGO, DNB (12+ Years Experience)</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Dr. Neelam Biswas is a renowned gynecologist and obstetrician specializing in high-risk pregnancies, infertility treatment, and gynecological surgeries. She has successfully handled thousands of deliveries and complex cases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
