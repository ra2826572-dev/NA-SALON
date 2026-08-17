import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, MapPin, Star } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES, createWhatsAppBookingUrl } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#1C1A18]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_IMAGES.hero}
          alt="NN Salon Luxury Interior in Faisalabad"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Dual-Gradient Overlay for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-[#1C1A18]/70 to-[#1C1A18]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#141211]/30 to-[#141211]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#E5C583]/40 text-[#E5C583] text-xs uppercase tracking-[0.25em] font-medium mb-6 animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C583]" />
          <span>Premium Beauty & Grooming Experience</span>
        </div>

        {/* Brand Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-[0.18em] text-[#FAF7F2] font-normal uppercase leading-[1.08] mb-3">
          NN SALON
        </h1>

        {/* Subtitle / Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#E5C583] font-light tracking-wide mb-6">
          Where Beauty Meets Luxury
        </p>

        {/* Category Positioning Pill Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#D6CBB8] font-medium uppercase tracking-[0.15em] mb-8 max-w-2xl">
          <span>Women's Beauty</span>
          <span className="text-[#A57D3E]">•</span>
          <span>Men's Grooming</span>
          <span className="text-[#A57D3E]">•</span>
          <span>Spa</span>
          <span className="text-[#A57D3E]">•</span>
          <span>Nails</span>
          <span className="text-[#A57D3E]">•</span>
          <span>Hair</span>
        </div>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-[#E2D9CC] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Experience premium beauty, grooming and spa services in a sophisticated environment designed for your comfort.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C8A366] hover:bg-[#B89355] text-[#1C1A18] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book An Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="hero-whatsapp-btn"
            href={createWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/30 backdrop-blur-md font-medium text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          <button
            id="hero-explore-btn"
            onClick={onExploreServices}
            className="w-full sm:w-auto text-[#D6CBB8] hover:text-[#FAF7F2] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium py-3 px-4 transition-colors underline underline-offset-8 decoration-[#C8A366]/60 hover:decoration-[#C8A366] cursor-pointer"
          >
            Explore Services
          </button>
        </div>

        {/* Sub-hero trust metrics pill */}
        <div className="mt-14 pt-8 border-t border-[#FAF7F2]/15 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-[#E5DCCB]">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#E5C583]">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">4.8 / 5.0</span>
            </div>
            <span className="text-xs text-[#B3A898] uppercase tracking-wider mt-1">Google Rating</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">124+</span>
            <span className="text-xs text-[#B3A898] uppercase tracking-wider mt-1">Verified Client Reviews</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">D Ground</span>
            <span className="text-xs text-[#B3A898] uppercase tracking-wider mt-1">People's Colony, FSD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
