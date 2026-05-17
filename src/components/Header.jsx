import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMobileDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Patient Care', path: '/patient-care' },
    { name: 'About Us', path: '/about' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-primary/70 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <Link className="flex items-center gap-2" to="/">
            <img 
              alt="Park Hospital Logo" 
              className="h-12 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9sFtGsh8OiLKr7YLc0cvlnvDegcTa7gyTxMTQetw3-yzVMoxndUuoU7Wkj2osfTkaZROTakM0Vl0NVfuL_rw-U31IP_wleh84matTTm3q5laIV5io3qwckx9CsdrQR4aVJGphDFNmramOrPTDJkfaKrn5KwhjqOybguYla1b2bkMllex4lF3oMi3fCuzuBosS8KJQxAqLDUcNVt1065PQLutWAL7vcKkn_PBaqMiTlJ9arEiHRME1tOrRBKMy8Z2XzKBDPtECcSV" 
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                className={`font-body-md text-body-md uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-primary dark:text-primary-fixed border-b-2 border-secondary pb-1' 
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'
                }`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="font-label-sm text-label-sm uppercase tracking-wider text-secondary border border-secondary px-6 py-3 rounded hover:bg-secondary/5 transition-colors duration-300 scale-95 active:scale-90 transition-transform">
              Emergency
            </button>
            <Link 
              className="font-label-sm text-label-sm uppercase tracking-wider bg-secondary text-on-secondary px-6 py-3 rounded hover:bg-secondary/90 transition-colors duration-300 scale-95 active:scale-90 transition-transform layered-shadow"
              to="/book"
            >
              Book Appointment
            </Link>
          </div>
          
          <button onClick={toggleMobileDrawer} className="md:hidden text-primary">
            <span className="material-symbols-outlined text-[32px]">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Custom Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'bg-primary/40 opacity-100 visible' : 'bg-primary/0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-[280px] bg-surface p-6 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
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
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    onClick={toggleMobileDrawer}
                    className={`block py-2 transition-colors duration-200 ${
                      isActive(link.path) 
                        ? 'text-secondary font-semibold' 
                        : 'text-on-surface-variant hover:text-secondary'
                    }`}
                    to={link.path}
                  >
                    {link.name}
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
              className="block w-full text-center font-label-sm text-label-sm text-on-primary bg-primary py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
              to="/book"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
