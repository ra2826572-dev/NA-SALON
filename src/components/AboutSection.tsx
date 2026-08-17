import React from 'react';
import { Star, Award, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Framed Luxury Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E7DECE] bg-[#F3ECE2]">
              <img
                src={SALON_IMAGES.lounge}
                alt="NN Salon VIP Lounge and Waiting Atmosphere"
                className="w-full h-[440px] sm:h-[520px] object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/60 via-transparent to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E7DECE] shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#736B5E] font-semibold">Location</p>
                  <p className="font-serif text-sm sm:text-base font-semibold text-[#1C1A18]">D Ground, People's Colony No. 1</p>
                </div>
                <div className="h-8 w-px bg-[#E7DECE]" />
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-[#736B5E] font-semibold">Hours</p>
                  <p className="text-xs sm:text-sm font-medium text-[#1C1A18]">10:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Subtle aesthetic backdrop border effect */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#C8A366]/40 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Narrative & Statistics */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About NN Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight leading-[1.15]">
              A New Standard of Beauty & Wellness
            </h2>

            <p className="text-base sm:text-lg text-[#5C564E] font-normal leading-relaxed">
              At <strong className="text-[#1C1A18] font-semibold">NN Salon (Naureen Nawaz Salon)</strong>, we have created a haven in Faisalabad where elegance, hygiene, and contemporary beauty rituals converge. Every detail—from our warm ivory interiors and serene lighting to our attentive stylists—is meticulously crafted around your comfort and personalized care.
            </p>

            {/* Service Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#2D2A26]">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Premium Atmosphere</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Professional Staff</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Hair & Styling Services</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Beauty & Skin Rituals</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Nail & Manicure Care</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Spa & Relaxation</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Men's Grooming Suite</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F5EFE6]/60">
                <CheckCircle2 className="w-4 h-4 text-[#C8A366] shrink-0" />
                <span>Personalized Customer Care</span>
              </div>
            </div>

            {/* Verified Statistics Cards (Strictly no invented numbers) */}
            <div className="pt-4 border-t border-[#E7DECE] grid grid-cols-3 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#E7DECE]">
                <div className="flex items-center justify-center gap-1 text-[#A57D3E]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-serif text-2xl font-bold text-[#1C1A18]">4.8★</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-[#736B5E] font-medium mt-1">Google Rating</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#E7DECE]">
                <span className="font-serif text-2xl font-bold text-[#1C1A18]">124+</span>
                <p className="text-[11px] uppercase tracking-wider text-[#736B5E] font-medium mt-1">Customer Reviews</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F3ECE2] border border-[#E7DECE]">
                <span className="font-serif text-lg sm:text-2xl font-bold text-[#1C1A18]">Professional</span>
                <p className="text-[11px] uppercase tracking-wider text-[#736B5E] font-medium mt-1">Salon Experience</p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#1C1A18] hover:bg-[#2E2A24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer"
              >
                Experience NN Salon
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
