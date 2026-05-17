import React, { useState } from 'react';

const SYMPTOM_DATA = {
  "Fever": {
    dept: "Pediatrics & General Medicine",
    desc: "Based on 'Fever', we recommend consulting a General Medicine or Pediatric specialist to diagnose the root cause."
  },
  "Joint Pain": {
    dept: "Orthopedics",
    desc: "Based on 'Joint Pain', we recommend consulting an Orthopedic specialist for a comprehensive muscle/bone evaluation."
  },
  "Persistent Cough": {
    dept: "Pulmonology & Respiratory Care",
    desc: "Based on 'Persistent Cough', we recommend consulting a Pulmonology specialist to evaluate your chest and airway."
  },
  "Stomach Ache": {
    dept: "Gastroenterology",
    desc: "Based on 'Stomach Ache', we recommend consulting a Gastroenterology specialist to assess digestive symptoms."
  },
  "Back Pain": {
    dept: "Spine & Pain Management",
    desc: "Based on 'Back Pain', we recommend consulting an Orthopedic or Spine Specialist to relieve musculoskeletal discomfort."
  }
};

export default function Book() {
  const [method, setMethod] = useState('guided'); // 'guided' or 'department'
  const [selectedSymptom, setSelectedSymptom] = useState('Joint Pain');
  const [typedSymptom, setTypedSymptom] = useState('');
  const [recommendation, setRecommendation] = useState({
    dept: "Orthopedics",
    desc: "Based on 'Joint Pain', we recommend consulting an Orthopedic specialist for a comprehensive muscle/bone evaluation."
  });

  const handleSymptomSelect = (name) => {
    setSelectedSymptom(name);
    setTypedSymptom('');
    const rec = SYMPTOM_DATA[name];
    if (rec) {
      setRecommendation(rec);
    }
  };

  const handleTypedSymptomChange = (e) => {
    const val = e.target.value;
    setTypedSymptom(val);
    setSelectedSymptom('');

    const searchVal = val.toLowerCase();
    let matchedDept = "General Medicine";
    let matchedDesc = "Describe your symptoms or choose from the common concerns, and we will match you with a leading specialist.";

    if (searchVal.includes('fever') || searchVal.includes('temp') || searchVal.includes('cold') || searchVal.includes('hot')) {
      matchedDept = "Pediatrics & General Medicine";
      matchedDesc = `Based on '${val}', we recommend consulting a General Practitioner or Pediatric specialist.`;
    } else if (searchVal.includes('joint') || searchVal.includes('bone') || searchVal.includes('knee') || searchVal.includes('fracture') || searchVal.includes('ortho')) {
      matchedDept = "Orthopedics";
      matchedDesc = `Based on '${val}', we recommend consulting an Orthopedic specialist for a comprehensive muscle/bone evaluation.`;
    } else if (searchVal.includes('cough') || searchVal.includes('chest') || searchVal.includes('breath') || searchVal.includes('lung') || searchVal.includes('throat')) {
      matchedDept = "Pulmonology & Respiratory Care";
      matchedDesc = `Based on '${val}', we recommend consulting a Respiratory Specialist to assess chest and airway symptoms.`;
    } else if (searchVal.includes('stomach') || searchVal.includes('belly') || searchVal.includes('ache') || searchVal.includes('pain') || searchVal.includes('digest')) {
      matchedDept = "Gastroenterology";
      matchedDesc = `Based on '${val}', we recommend consulting a Gastroenterology consultant for digestive and abdominal care.`;
    } else if (searchVal.includes('brain') || searchVal.includes('headache') || searchVal.includes('migraine') || searchVal.includes('nerve') || searchVal.includes('neuro')) {
      matchedDept = "Neurology";
      matchedDesc = `Based on '${val}', we recommend consulting a Neurologist or Neurosurgeon for assessment.`;
    } else if (searchVal.includes('heart') || searchVal.includes('cardio') || searchVal.includes('beat') || searchVal.includes('pulse')) {
      matchedDept = "Cardiology";
      matchedDesc = `Based on '${val}', we recommend consulting a Cardiologist for heart care assessment.`;
    } else if (searchVal.trim().length > 0) {
      matchedDept = "General Medicine / Triage";
      matchedDesc = `Based on '${val}', we recommend starting with a General Practitioner or booking a live chat for triage.`;
    }

    setRecommendation({
      dept: matchedDept,
      desc: matchedDesc
    });
  };

  const handleBookingSubmit = () => {
    alert(`Thank you! Proceeding to book with ${recommendation.dept}. Our triage team will contact you shortly.`);
  };

  return (
    <div className="pt-[100px] min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Hero / Intro */}
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl">
          <h1 className="font-display-xl text-display-xl text-primary mb-6">Smart Scheduling.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Let's find the right care for you. Answer a few simple questions or select your preferred department directly to book your appointment.
          </p>
        </div>

        {/* Bento Layout for Booking Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Flow (Spans 8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Pathway Selection */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-container-highest layered-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">How would you like to proceed?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option A: By Specialty */}
                <button 
                  onClick={() => setMethod('department')}
                  className={`text-left p-6 rounded-lg border transition-all duration-300 group layered-shadow-hover focus:outline-none focus:ring-2 focus:ring-secondary ${
                    method === 'department' 
                      ? 'border-2 border-secondary bg-secondary-container/5 ring-2 ring-secondary/20' 
                      : 'border-outline-variant bg-surface hover:border-secondary hover:bg-secondary-container/10'
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-secondary text-[24px]">stethoscope</span>
                  </div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-primary mb-2">Select a Department</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">I know which specialty or doctor I need to see.</p>
                </button>

                {/* Option B: By Symptom (Guided) */}
                <button 
                  onClick={() => setMethod('guided')}
                  className={`text-left p-6 rounded-lg border transition-all duration-300 group layered-shadow-hover focus:outline-none focus:ring-2 focus:ring-secondary relative ${
                    method === 'guided' 
                      ? 'border-2 border-secondary bg-secondary-container/5 ring-2 ring-secondary/20' 
                      : 'border-outline-variant bg-surface hover:border-secondary hover:bg-secondary-container/10'
                  }`}
                >
                  <div className="absolute -top-3 -right-3 bg-secondary text-on-secondary font-label-sm text-label-sm px-3 py-1 rounded-full shadow-sm">Recommended</div>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-[24px]">psychology</span>
                  </div>
                  <h3 className="font-body-lg text-body-lg font-semibold text-primary mb-2">Guided Match</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Describe your symptoms and we'll recommend the right specialist.</p>
                </button>
              </div>
            </div>

            {/* Step 2: Active State */}
            {method === 'guided' ? (
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-container-highest layered-shadow transition-all duration-500 opacity-100 transform translate-y-0">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-headline-md text-headline-md text-primary">What brings you in today?</h2>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Step 1 of 3</span>
                </div>

                {/* Symptom Search/Select */}
                <div className="mb-8">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider" htmlFor="symptom-search">
                    Describe your symptoms
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                    <input 
                      type="text"
                      className="w-full bg-surface border-b border-outline-variant hover:border-outline focus:border-secondary focus:ring-0 pl-12 pr-4 py-4 font-body-md text-body-md text-on-surface transition-colors bg-transparent placeholder-outline-variant focus:outline-none" 
                      id="symptom-search" 
                      placeholder="e.g., Chest pain, severe headache, joint ache..." 
                      value={typedSymptom}
                      onChange={handleTypedSymptomChange}
                    />
                  </div>
                </div>

                {/* Common Symptoms Chips */}
                <div className="mb-8">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wider">Common Concerns</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(SYMPTOM_DATA).map((symptomName) => (
                      <button 
                        key={symptomName}
                        onClick={() => handleSymptomSelect(symptomName)}
                        className={`px-4 py-2 rounded-full border transition-colors flex items-center space-x-2 font-body-md text-body-md ${
                          selectedSymptom === symptomName
                            ? 'border-secondary bg-secondary-container/20 text-primary hover:bg-secondary-container/30'
                            : 'border-outline-variant text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        <span>{symptomName}</span>
                        {selectedSymptom === symptomName && (
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Intelligent Recommendation Result */}
                <div className="bg-surface-bright rounded-lg p-6 border border-surface-container-highest">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <span className="material-symbols-outlined text-secondary text-[28px]">lightbulb</span>
                    </div>
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-primary mb-1">
                        Recommended Department: {recommendation.dept}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        {recommendation.desc}
                      </p>
                      <button 
                        onClick={handleBookingSubmit}
                        className="bg-primary text-on-primary font-body-md text-body-md px-6 py-2 rounded-full hover:bg-on-primary-fixed transition-colors shadow-sm"
                      >
                        Continue with {recommendation.dept}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-surface-container-highest layered-shadow transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-headline-md text-headline-md text-primary">Select a Department</h2>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">Step 1 of 2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Cardiology", "Neurology", "Orthopedics", "Pediatrics"].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => {
                        setRecommendation({
                          dept,
                          desc: `You are booking an appointment directly with the ${dept} department.`
                        });
                        alert(`Proceeding to book directly with the ${dept} Department.`);
                      }}
                      className="text-left p-6 rounded-lg border border-outline-variant bg-surface hover:border-secondary hover:bg-secondary-container/10 transition-all duration-300 font-body-lg text-body-lg font-semibold text-primary"
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Patient Context / Support (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact Details Card */}
            <div className="glass-panel rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500"></div>
              <h3 className="font-headline-md text-[24px] leading-tight text-primary mb-3">Contact Details</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 relative z-10">
                Our support team and triage practitioners are available 24x7.
              </p>
              <div className="space-y-4 relative z-10">
                {/* Phone */}
                <a className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors group/link" href="tel:7905844796">
                  <div className="w-10 h-10 rounded-full bg-primary-container/5 flex items-center justify-center group-hover/link:bg-secondary-container/30 transition-colors shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="font-body-md text-body-md font-bold block">7905844796</span>
                    <span className="text-xs text-on-surface-variant">24×7 Emergency Helpline</span>
                  </div>
                </a>

                {/* Email */}
                <a className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors group/link" href="mailto:parkhospital21@gmail.com">
                  <div className="w-10 h-10 rounded-full bg-primary-container/5 flex items-center justify-center group-hover/link:bg-secondary-container/30 transition-colors shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="font-body-md text-body-md font-semibold block text-xs">parkhospital21@gmail.com</span>
                    <span className="text-xs text-on-surface-variant">Email Us</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-3 text-primary pt-3 border-t border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-primary-container/5 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <span className="font-body-md text-xs font-bold block mb-1">Our Location</span>
                    <p className="text-[11px] leading-relaxed text-on-surface-variant">
                      Sultanpur Road, Gosainganj,<br />
                      Near Nawab Ali Ka Purwa, Kashimpur Biruha,<br />
                      Lucknow, Uttar Pradesh - 226501
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 text-primary pt-3 border-t border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-primary-container/5 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <span className="font-body-md text-xs font-bold block mb-1">Working Hours</span>
                    <p className="text-[11px] leading-relaxed text-on-surface-variant">
                      24 Hours / 7 Days<br />
                      <span className="font-semibold text-secondary">Always Open for Emergencies</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Card */}
            <div className="bg-surface-container-lowest rounded-xl p-6 border border-surface-container-highest layered-shadow">
              <h3 className="font-body-lg text-body-lg font-semibold text-primary mb-4 flex items-center">
                <span className="material-symbols-outlined mr-2 text-secondary">list_alt</span>
                Before You Book
              </h3>
              <ul class="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-outline-variant mr-3 mt-0.5 text-[20px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">Have your insurance information ready if applicable.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-outline-variant mr-3 mt-0.5 text-[20px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">Note down any current medications you are taking.</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-outline-variant mr-3 mt-0.5 text-[20px]">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface-variant text-sm">Previous medical records can be uploaded in the final step.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
