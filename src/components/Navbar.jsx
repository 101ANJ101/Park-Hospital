import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: "/about", label: "About Us" },
    { to: "/specialties", label: "Specialties" },
    { to: "/doctors", label: "Doctors" },
    { to: "/facilities", label: "Facilities" },
    { to: "/patient-care", label: "Patient Care" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-primary/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-3 group" to="/">
              <img 
                alt="PARK HOSPITAL Logo" 
                className="object-contain h-20 md:h-24 transition-transform duration-300 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJrcEGiftG41BUqMGkWLfANd5ZR14aCPZh7rc3xNQBQCMohYmTSGCEmG_vkHKiKMi5saLeJarvyi6pjLHBPs_lPk-wpL5Hef0n5-m0trLvhGL7uQqkWxQaYXUlZC_UpHUA2IZunYwwTY_ut2aR5a9YFshIfsEJ9heOYUhc0j2IbPdFy6KF_dkXCv-71xg5bF30UAL8tclJlpWU9MzXy6tTdqimQaiRoxPc9CUvKI1NRO3_oDYkRAUUD_-YiZFsKMOHReWq3us1WYeU"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `font-body-md text-body-md font-medium transition-colors duration-300 relative py-1 ${
                    isActive 
                      ? 'text-primary dark:text-primary-fixed font-semibold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-secondary' 
                      : 'text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:flex items-center gap-2 text-error font-label-sm uppercase tracking-widest hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-[20px] fill-1">emergency</span>
              <span className="font-bold">Emergency</span>
            </button>
            
            <Link 
              to="/book" 
              className="bg-primary text-on-primary px-7 py-3.5 rounded shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-semibold text-body-md hidden sm:inline-block"
            >
              Book Appointment
            </Link>

            {/* Hamburger Button for Mobile */}
            <button 
              onClick={toggleMobileDrawer} 
              className="lg:hidden text-primary dark:text-primary-fixed hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-[32px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Custom Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-primary/40 backdrop-blur-md transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 block' : 'opacity-0 hidden pointer-events-none'
        }`}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-[280px] bg-surface p-6 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="font-headline-md text-[20px] font-bold text-primary">Navigation</span>
              <button onClick={toggleMobileDrawer} className="text-primary hover:text-secondary">
                <span className="material-symbols-outlined text-[28px]">close</span>
              </button>
            </div>
            
            <ul className="space-y-6 font-body-md text-[18px] uppercase tracking-wider">
              <li>
                <Link 
                  onClick={toggleMobileDrawer} 
                  className="block py-2 text-on-surface-variant hover:text-secondary transition-colors duration-200" 
                  to="/"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    onClick={toggleMobileDrawer} 
                    className="block py-2 text-on-surface-variant hover:text-secondary transition-colors duration-200" 
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <button className="w-full font-label-sm text-label-sm text-secondary border border-secondary py-3 rounded-full hover:bg-secondary/5 transition-colors">
              Emergency
            </button>
            <Link 
              onClick={toggleMobileDrawer}
              to="/book" 
              className="w-full text-center block font-label-sm text-label-sm text-on-primary bg-primary py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
