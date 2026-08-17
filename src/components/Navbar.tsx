import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import { SALON_INFO, getSalonOpenStatus } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getSalonOpenStatus();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1C1A18] text-[#E5DCCB] text-xs py-2 px-4 border-b border-[#2E2A24]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="text-[#FAF7F2]">{status.statusText}</span>
              <span className="text-[#B3A898] hidden md:inline">({status.subText})</span>
            </span>
            <span className="hidden lg:inline-block text-[#5C564E]">•</span>
            <span className="hidden lg:flex items-center gap-1 text-[#B3A898]">
              <MapPin className="w-3 h-3 text-[#C8A366]" />
              D Ground, People's Colony No. 1, Faisalabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-1 text-[#E5DCCB] hover:text-[#C8A366] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C8A366]" />
              <span>{SALON_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#5C564E]">•</span>
            <span className="text-[#C8A366] font-medium tracking-wide">⭐ 4.8 / 5 Rating (124+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E7DECE] py-3.5' 
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <div className="w-10 h-10 rounded-full border border-[#C8A366] flex items-center justify-center bg-[#FAF7F2] group-hover:bg-[#F3ECE2] transition-colors">
              <span className="font-serif font-bold text-lg tracking-wider text-[#1C1A18]">NN</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl tracking-[0.2em] font-semibold text-[#1C1A18] leading-tight">
                NN SALON
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium tracking-wider text-[#2D2A26] hover:text-[#A57D3E] transition-colors uppercase py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8A366] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="bg-[#1C1A18] hover:bg-[#2E2A24] text-[#FAF7F2] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#1C1A18] shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#1C1A18] text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1A18] hover:bg-[#EAE2D5] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className="md:hidden bg-[#FAF7F2] border-b border-[#E7DECE] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-[#1C1A18] hover:text-[#C8A366] transition-colors py-1.5 border-b border-[#F0E8DC]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#1C1A18] text-[#FAF7F2] text-center font-medium uppercase tracking-wider text-xs py-3 rounded-full shadow-sm"
              >
                Book An Appointment
              </button>
              
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full bg-[#F3ECE2] border border-[#E7DECE] text-[#1C1A18] flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider py-3 rounded-full"
              >
                <Phone className="w-4 h-4 text-[#C8A366]" />
                Call {SALON_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
