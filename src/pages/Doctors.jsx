import React from 'react';
import { Link } from 'react-router-dom';

export default function Doctors() {
  return (
    <div className="pt-32 pb-section-gap">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 z-10">
            <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest mb-4 block">Medical Leadership</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-6">Expertise meets empathy.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Meet the brilliant minds and compassionate hearts driving medical excellence at Park Hospital. Our founders and specialists are dedicated to clinical precision and unwavering patient care.
            </p>
          </div>
          <div className="lg:col-span-6 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden layered-shadow">
            <img 
              alt="Team of doctors" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI7Feup_ZKpGT7KOB8F4KLYP_u6_03AGOFYl3TI-xmgJZ8VWXh3sqtnl81GSkOIavRkTxdDn9oBTRmcZD1jr3FHUf76N-qjgz3_rwXdPYzouloaCDV2RaMMK4pUYFq33PBf8JpT1QrxnVDcXXQN-Ap1XKkBc9EjKDsvQewVaRXobhNOOsN0mfiYVfNAr3vINf5sQ7qVz8fciM5BxXhF-NHIMUVQAFYMq-Rru8u7HMbwBepoje94dJVlsAqIe7VNL6MnWU51N1ud-A3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Doctor Profile 1: Dr. Rajeev Das */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-5 relative h-[600px] rounded-xl overflow-hidden layered-shadow group">
            <img 
              alt="Dr. Rajeev Das" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/Rajeev_Das.png"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Dr. Rajeev Das</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">General Medicine &amp; ICU Specialist</p>
                </div>
                <span className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-4 py-2 rounded-full backdrop-blur-sm">10+ Years Exp.</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 pt-8 lg:pt-12">
            <div className="flex gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[16px]">school</span> MBBS, MD, DNB
              </span>
              <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span> Manager &amp; Owner
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Pioneering ICU care and hospital leadership.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Dr. Rajeev Das is a highly experienced physician and ICU specialist with over 10 years of practice in general medicine and hospital management. He has been instrumental in establishing Park Hospital as a trusted healthcare provider in Lucknow.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">medical_services</span>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary mb-1">General Medicine</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive diagnosis, chronic disease management, and critical ICU triage.</p>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/30"></div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">workspace_premium</span>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary mb-1">10+ Years Experience</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">A decade of exemplary critical care practice and medical management leadership.</p>
                </div>
              </div>
            </div>
            <Link 
              className="font-label-sm text-label-sm uppercase tracking-wider bg-primary text-on-primary px-8 py-4 rounded hover:bg-primary/90 transition-colors duration-300 shadow-md inline-block"
              to="/book"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Profile 2: Dr. Neelam Biswas */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-6 pt-8 lg:pt-12 order-2 lg:order-1">
            <div className="flex gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[16px]">school</span> MBBS, DGO, DNB
              </span>
              <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-[16px]">verified_user</span> Owner
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Renowned care in obstetrics and gynecology.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Dr. Neelam Biswas is a renowned gynecologist and obstetrician specializing in high-risk pregnancies, infertility treatment, and gynecological surgeries. She has successfully handled thousands of deliveries and complex cases.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">child_care</span>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary mb-1">Obstetrics &amp; Gynecology</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Expertise in high-risk maternity care, prenatal consulting, and advanced reproductive health treatments.</p>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/30"></div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1">workspace_premium</span>
                <div>
                  <h4 className="font-label-sm text-label-sm text-primary mb-1">12+ Years Experience</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">Thorough expertise, with thousands of successful deliveries and specialized surgical treatments.</p>
                </div>
              </div>
            </div>
            <Link 
              className="font-label-sm text-label-sm uppercase tracking-wider bg-primary text-on-primary px-8 py-4 rounded hover:bg-primary/90 transition-colors duration-300 shadow-md inline-block"
              to="/book"
            >
              Book Consultation
            </Link>
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8 relative h-[600px] rounded-xl overflow-hidden layered-shadow group order-1 lg:order-2">
            <img 
              alt="Dr. Neelam Biswas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/Neelam_Biswas.png"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-lg">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Dr. Neelam Biswas</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Consultant Obstetrician &amp; Gynecologist</p>
                </div>
                <span className="bg-secondary/10 text-secondary font-label-sm text-label-sm px-4 py-2 rounded-full backdrop-blur-sm">12+ Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
