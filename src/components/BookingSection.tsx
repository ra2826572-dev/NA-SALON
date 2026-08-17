import React from 'react';
import { Sparkles, MessageCircle, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES, createWhatsAppBookingUrl } from '../data/salonData';

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="booking-cta" className="py-20 lg:py-28 bg-[#1C1A18] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Accent Image with Luxury Dark Mask */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={SALON_IMAGES.hero}
          alt="NN Salon Background Ambiance"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1C1A18]/85" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C8A366]/40 text-[#E5C583] text-xs uppercase tracking-[0.25em] font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Care & Attention</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#FAF7F2] font-normal leading-[1.12] mb-4">
          Your Best Look Starts Here.
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#D6CBB8] font-light max-w-xl mx-auto mb-10">
          Ready for your next beauty or grooming experience?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            id="cta-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#C8A366] hover:bg-[#B89355] text-[#1C1A18] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book An Appointment</span>
          </button>

          <a
            id="cta-whatsapp-btn"
            href={createWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-[#FAF7F2] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Quick Phone Call Pill */}
        <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-[#FAF7F2]/10 border border-[#3D3833] text-xs text-[#D6CBB8]">
          <Phone className="w-3.5 h-3.5 text-[#C8A366]" />
          <span>Prefer direct call? Reach us at</span>
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="font-bold text-[#FAF7F2] hover:text-[#C8A366] underline underline-offset-4"
          >
            {SALON_INFO.phoneFormatted}
          </a>
        </div>

      </div>
    </section>
  );
};
