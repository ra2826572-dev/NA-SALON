import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, Heart, Sparkles } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121110] text-[#FAF7F2] pt-16 pb-12 border-t border-[#262320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#262320]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C8A366] flex items-center justify-center bg-[#1C1A18]">
                <span className="font-serif font-bold text-lg text-[#FAF7F2]">NN</span>
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#FAF7F2] block">
                  NN SALON
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B3A898] font-medium block">
                  Naureen Nawaz Salon
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#E5C583]">
              "Where Beauty Meets Luxury"
            </p>

            <p className="text-xs sm:text-sm text-[#B3A898] leading-relaxed max-w-sm">
              Faisalabad’s premier beauty, hair, spa, and grooming destination in D Ground. Dedicated to personalized care in a tranquil luxury atmosphere.
            </p>

            <div className="pt-2">
              <span className="text-xs text-[#E5C583] font-semibold tracking-wider uppercase block mb-1">
                Business Positioning:
              </span>
              <p className="text-xs text-[#8C8275]">
                {SALON_INFO.positioning}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B3A898]">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  About Salon
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  Services & Pricing
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); scrollTo('#gallery'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  Interior Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => { e.preventDefault(); scrollTo('#reviews'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  Client Reviews (4.8★)
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => { e.preventDefault(); scrollTo('#location'); }}
                  className="hover:text-[#E5C583] transition-colors"
                >
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Contact & Hours
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#B3A898]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A366] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A366] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-[#FAF7F2] transition-colors font-medium text-[#FAF7F2]">
                  {SALON_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/20 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <span>Book Online</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736B5E] gap-4">
          <p>© 2026 NN Salon. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-center">
            <span>D Ground, People's Colony No. 1, Faisalabad, Pakistan</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
