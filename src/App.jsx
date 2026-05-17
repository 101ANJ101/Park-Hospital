import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Specialties from './pages/Specialties';
import Doctors from './pages/Doctors';
import Facilities from './pages/Facilities';
import PatientCare from './pages/PatientCare';
import Book from './pages/Book';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface text-on-surface font-body-md antialiased overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/patient-care" element={<PatientCare />} />
            <Route path="/book" element={<Book />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
