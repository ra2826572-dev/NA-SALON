import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Phone, ArrowUp } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Desktop & Tablet Action Icons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-[#1C1A18]/90 hover:bg-[#1C1A18] text-[#FAF7F2] border border-[#E7DECE]/30 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Pill Button */}
        <a
          id="floating-whatsapp-btn"
          href={createWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-[#FAF7F2] px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none"
          aria-label="Chat with NN Salon on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block pr-1">
            Book on WhatsApp
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Booking Bar (Phones only) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E7DECE] p-3 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-3 rounded-xl bg-[#F3ECE2] border border-[#E7DECE] text-[#1C1A18] flex items-center justify-center"
          aria-label="Call salon"
        >
          <Phone className="w-5 h-5 text-[#A57D3E]" />
        </a>

        <a
          href={createWhatsAppBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1C1A18] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#E5C583]" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
