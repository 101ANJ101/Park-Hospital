import React from 'react';
import { Link } from 'react-router-dom';

export default function Specialties() {
  return (
    <div className="pt-32 pb-section-gap">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest block">Medical Excellence</span>
            <h1 className="font-display-xl text-display-xl text-primary font-bold leading-tight">
              Specialized Care.<br/>
              <span className="text-secondary">Every Detail Matters.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Park Hospital is equipped with state-of-the-art facilities and led by renowned medical experts. Explore our complete range of specialized services, available 24x7 for Lucknow and surrounding regions.
            </p>
          </div>
          <div className="md:col-span-6 mt-8 md:mt-0">
            <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden layered-shadow">
              <img 
                alt="Hospital modern clinic environment" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7WujSiL_oPBlD52ZDZ0VBXYqWY8IgwCg7YuQPqxA4fXmbkzYs62I2UFY4zpy4sfYlZoE0HZBAkAnFhDYJhLwVYBZDfYmBW_YH-UzsDQ7Ies7vE2ZM24L-Id1eMp7lfYxD_2TTnF7gheZmAesbuLg_BVhUx3E3tCEkVysUS1VMalL44ylIG4VnJhVrzLSfBON7HzZT20N3mNSHLZGvy-SFCMyXtJ8BDBCO3HVJdEK7eRA3iyEs9I1BUiEqjkD8rz-x73u_oTGYFaHa"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 24x7 Emergency & Critical Care Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low border-y border-outline-variant/20 mb-16 md:mb-24">
        <div className="max-w-container-max mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-error/10 text-error font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-4 border border-error/20">
              <span className="material-symbols-outlined text-[16px] fill-1">emergency</span> Always Active
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">24×7 Emergency &amp; Critical Care</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Round-the-clock emergency services with immediate response, fully-equipped trauma facilities, and advanced clinical medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "24×7 Emergency Services",
                desc: "Round-the-clock emergency care with experienced doctors and advanced equipment.",
                icon: "emergency"
              },
              {
                title: "Trauma Care Unit",
                desc: "Immediate life-saving response for accident victims and critical injuries.",
                icon: "personal_injury"
              },
              {
                title: "Intensive Care Unit (ICU)",
                desc: "Advanced ICU with ventilators, modern telemetry, and continuous patient monitoring.",
                icon: "bed"
              },
              {
                title: "Neonatal ICU (NICU)",
                desc: "Specialized care for premature, low birth weight, and sick newborns.",
                icon: "child_care"
              },
              {
                title: "24×7 Ultrasound Services",
                desc: "Complete ultrasound diagnostics available round the clock for emergencies.",
                icon: "graphic_eq"
              },
              {
                title: "24×7 Laboratory",
                desc: "Accurate blood tests, hematology, and diagnostic services available anytime.",
                icon: "biotech"
              },
              {
                title: "24×7 Pharmacy",
                desc: "In-house fully-stocked pharmacy providing all essential medicines instantly.",
                icon: "prescriptions"
              },
              {
                title: "Ambulance Service",
                desc: "Well-equipped ambulance with essential oxygen support for rapid patient transport.",
                icon: "airport_shuttle"
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-surface p-6 rounded-xl border border-outline-variant/20 hover:shadow-md transition-shadow duration-300">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{srv.icon}</span>
                <h3 className="font-body-lg text-body-lg font-bold text-primary mb-2">{srv.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity & Women's Health Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-5 relative h-[500px] lg:h-[650px] rounded-2xl overflow-hidden layered-shadow group lg:sticky lg:top-32">
            <img 
              alt="Maternity ward mother and baby room" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="/Neelam_Biswas.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-lg text-primary">
              <h3 className="font-headline-md text-[20px] font-bold text-primary mb-1">Maternity Care Team</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-3">Led by Dr. Neelam Biswas</p>
              <div className="flex gap-2">
                <span className="font-label-sm text-[10px] uppercase bg-secondary/15 text-secondary px-3 py-1 rounded-full font-semibold">MBBS, DGO, DNB</span>
                <span className="font-label-sm text-[10px] uppercase bg-secondary/15 text-secondary px-3 py-1 rounded-full font-semibold">12+ Years Exp.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 pt-8 lg:pt-0 pl-0 lg:pl-8 space-y-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest mb-4 block">Specialized Center</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-6">Maternity &amp; Women's Health</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Comprehensive maternity care with experienced gynecologists and modern delivery suites. Our maternity department is led by **Dr. Neelam Biswas**, an expert gynecologist specializing in normal deliveries, high-risk pregnancies, and advanced surgeries.
              </p>
            </div>

            {/* Specialties List */}
            <div className="space-y-6">
              <h3 className="font-body-lg text-body-lg font-bold text-primary uppercase tracking-wider">Clinical Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Normal Delivery", desc: "Safe and comfortable natural childbirth with experienced doctors." },
                  { title: "LSCS (Cesarean Section)", desc: "Advanced surgical delivery with complete safety and recovery measures." },
                  { title: "High-Risk Pregnancy Care", desc: "Specialized monitoring and expert care for complicated pregnancies." },
                  { title: "Antenatal & Postnatal Care", desc: "Complete comprehensive care before and after delivery for mother and baby." },
                  { title: "Gynecological Surgeries", desc: "All types of gynecological surgeries using advanced methods." },
                  { title: "Infertility Treatment", desc: "Comprehensive evaluation and fertility support treatments." },
                  { title: "HPV Vaccination", desc: "Cervical cancer prevention through timely HPV vaccination schedules." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                    <div>
                      <h4 className="font-body-md text-body-md font-semibold text-primary">{item.title}</h4>
                      <p className="font-body-md text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Bar */}
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="material-symbols-outlined text-secondary mb-2 block">favorite</span>
                <h4 className="font-body-md text-body-md font-bold text-primary mb-1">Safe Deliveries</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Experienced team ensuring safe childbirth.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-secondary mb-2 block">spa</span>
                <h4 className="font-body-md text-body-md font-bold text-primary mb-1">Compassionate Care</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Patient-centric support and guidance.</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-secondary mb-2 block">schedule</span>
                <h4 className="font-body-md text-body-md font-bold text-primary mb-1">24×7 Monitoring</h4>
                <p className="font-body-md text-sm text-on-surface-variant">Continuous medical supervision &amp; care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neonatal & Pediatric Care Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low border-y border-outline-variant/20 mb-16 md:mb-24">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest block">Pediatric Ward</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Neonatal &amp; Pediatric Care</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Providing dedicated care for infants, toddlers, and young children. Our advanced NICU features cutting-edge life support technology for specialized newborn medical management.
              </p>
              <div className="space-y-4">
                {[
                  { title: "NICU Services", desc: "Advanced neonatal intensive care with modern ventilators and warmers.", icon: "child_care" },
                  { title: "Phototherapy", desc: "Safe, targeted light therapy treatment for newborn jaundice.", icon: "wb_sunny" },
                  { title: "Baby Vaccination", desc: "Complete childhood immunization schedule administered with strict safety standards.", icon: "vaccines" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-body-md text-body-md font-bold text-primary">{item.title}</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden layered-shadow">
                <img 
                  alt="Neonatal care unit" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANZEBCWiQFH-qExyGyo3WTFncH7Ar2R_6fuJw3Mx_PSDBT28XOxtrBntrXBxEm5fSxmkIrj5-LUCJfttkTi7VKfO0xnt1H6r7hSj8dMjNGY0kSeIFu9UFTqCnHNOHUpK17N5PZJhPB9gdwX-JBnYIvBB2d7nsvzrZDVOi-F6D8PM0YREpLAfythIngu_wYT3XCRAJSczKwby-mrgVfmD2DjkgSD2JqsdbRMz1NQ40z4xOKPDogBHH4rh0dqPcd6N6sl3JpVZPN-Ut9"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Surgical Services Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden layered-shadow">
              <img 
                alt="Operating theater room" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMiHIAIw3BuPMmLVeMWDiwzi52XaZaL3tCrzo5ghxd899H4W3NstI14mlaq4dRZsvPYmgtz7CLycyfMmgNUoS99iSYKwHDOpNYYGUZLBqozIv4xXx96obV-NpQ4P-9EBOo-mpbedxna4zu46qoeA1f355GNkvYXgYSXI0f7BacVi1c0HBRqFol6EAzHGQAmyLyo6zf0PSzvJAXbfMq21tyeoOa_6Xt9d5rvYpCN1Xt09WLO-8ig6n7-LYlWyrqzpZpy2mvpD77wM5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 lg:pl-12">
            <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest block">Modern Operation Theaters</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Advanced Surgical Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              State-of-the-art sterile modular operation theaters managed by highly qualified surgeons and anesthesia teams.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "Laparoscopic Surgery", desc: "Minimally invasive keyhole surgical techniques facilitating faster recovery times." },
                { title: "General Surgery", desc: "Complete clinical surgical procedures for abdominal, soft tissue, and trauma care." },
                { title: "Gynecological Surgery", desc: "Specialized female reproductive and therapeutic surgeries." },
                { title: "Emergency Surgery", desc: "24×7 immediate availability of surgical suites and emergency trauma practitioners." }
              ].map((srg, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-body-md text-body-md font-bold text-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    {srg.title}
                  </h4>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{srg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Departments Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">Specialty Departments</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Our multidisciplinary approach ensures patients receive integrated, world-class medical diagnosis and treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Neurology",
                desc: "Expert treatment of clinical disorders affecting the brain, spinal cord, and peripheral nervous system.",
                icon: "psychology"
              },
              {
                title: "Gastroenterology",
                desc: "Complete evaluation and therapy for digestive, intestinal, and chronic liver disease conditions.",
                icon: "nutrition"
              },
              {
                title: "Urology",
                desc: "Advanced therapeutic treatments for kidney, bladder, prostate, and urinary tract conditions.",
                icon: "water_drop"
              },
              {
                title: "Orthopedics",
                desc: "Specialized correction and therapy for bone fractures, joint replacements, and spine conditions.",
                icon: "skeleton"
              },
              {
                title: "Pain Clinic",
                desc: "Multidisciplinary management of chronic, spinal, postoperative, and joint pain issues.",
                icon: "healing"
              },
              {
                title: "General Medicine",
                desc: "Comprehensive diagnostic assessment and medical treatment protocols for all adult age groups.",
                icon: "stethoscope"
              }
            ].map((dept, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:shadow-md transition-shadow duration-300 flex gap-4 items-start">
                <span className="material-symbols-outlined text-3xl text-secondary shrink-0">{dept.icon}</span>
                <div className="space-y-2">
                  <h3 className="font-body-lg text-body-lg font-bold text-primary">{dept.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{dept.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link 
              className="bg-primary text-on-primary px-8 py-4 rounded font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-md inline-block"
              to="/book"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
