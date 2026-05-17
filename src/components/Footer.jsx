import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full relative bg-primary dark:bg-primary-container text-on-primary border-t border-outline-variant/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300">
        
        {/* Brand Column */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img 
              alt="PARK HOSPITAL Logo" 
              className="h-10 object-contain filter brightness-0 invert" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJrcEGiftG41BUqMGkWLfANd5ZR14aCPZh7rc3xNQBQCMohYmTSGCEmG_vkHKiKMi5saLeJarvyi6pjLHBPs_lPk-wpL5Hef0n5-m0trLvhGL7uQqkWxQaYXUlZC_UpHUA2IZunYwwTY_ut2aR5a9YFshIfsEJ9heOYUhc0j2IbPdFy6KF_dkXCv-71xg5bF30UAL8tclJlpWU9MzXy6tTdqimQaiRoxPc9CUvKI1NRO3_oDYkRAUUD_-YiZFsKMOHReWq3us1WYeU"
            />
            <span className="font-headline-md text-headline-md font-bold text-surface dark:text-primary-fixed">PARK HOSPITAL</span>
          </div>
          <p className="font-body-md text-body-md text-surface-variant/70 max-w-xs leading-relaxed">
            Care Beyond Technology. Providing world-class medical expertise with radical human empathy.
          </p>
          <p className="font-label-sm text-label-sm text-surface-variant/50 uppercase mt-4">
            © 2026 Park Hospital. All rights reserved.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm text-surface uppercase mb-4 tracking-wider">Medical Services</h4>
          <ul className="space-y-4">
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/specialties">
                Emergency &amp; ICU
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/specialties">
                Maternity &amp; Gynecology
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/specialties">
                Pediatrics &amp; NICU
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/specialties">
                Advanced Surgery
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm text-surface uppercase mb-4 tracking-wider">Patient Resources</h4>
          <ul className="space-y-4">
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/facilities">
                Diagnostic Center
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/facilities">
                Telemedicine
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/patient-care">
                Patient Portal
              </Link>
            </li>
            <li>
              <Link className="font-body-md text-body-md text-surface-variant/70 hover:text-secondary-fixed transition-all duration-200 block" to="/about">
                Insurance Partners
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Details Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm text-surface uppercase mb-4 tracking-wider">Contact Details</h4>
          <ul className="space-y-4 font-body-md text-body-md text-surface-variant/70">
            <li className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">location_on</span>
              <span className="text-xs leading-relaxed">
                Sultanpur Road, Gosainganj,<br />
                Near Nawab Ali Ka Purwa, Kashimpur Biruha,<br />
                Lucknow, UP - 226501
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">call</span>
              <a className="hover:text-secondary-fixed transition-colors font-semibold text-xs" href="tel:7905844796">
                7905844796
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">mail</span>
              <a className="hover:text-secondary-fixed transition-colors text-xs" href="parkhospital21@gmail.com">
                parkhospital21@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5 border-t border-outline-variant/10 pt-3">
              <span className="material-symbols-outlined text-[20px] text-secondary-fixed shrink-0">schedule</span>
              <span className="text-[11px] leading-tight font-semibold text-secondary-fixed">
                24 Hours / 7 Days<br />
                Always Open for Emergencies
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
