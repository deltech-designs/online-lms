import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-slate-200 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-display font-bold text-lg text-slate-900">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5"
                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          EduStream Pro
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#courses" className="text-sm text-slate-500 hover:text-slate-900 transition-colors px-1 py-1.5">Courses</a>
          <a href="#pricing" className="text-sm text-slate-500 hover:text-slate-900 transition-colors px-1 py-1.5">Pricing</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-500 hover:border-slate-300 transition-colors cursor-pointer bg-white">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search courses...
          </button>
          <a
            href="#signup"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold font-display px-4 py-2 rounded-lg transition-colors"
          >
            Sign Up
          </a>
          <div className="w-8 h-8 rounded-full bg-slate-200 cursor-pointer" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 px-6 py-4 flex flex-col gap-3 bg-white">
          <a href="#courses" className="text-sm text-slate-600 py-1">Courses</a>
          <a href="#pricing" className="text-sm text-slate-600 py-1">Pricing</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;