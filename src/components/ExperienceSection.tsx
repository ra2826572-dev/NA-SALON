import React from 'react';
import { Sparkles, Shield, Star, Users, Flower2, Heart } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#1C1A18] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A366]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#C8A366]/30 text-[#E5C583] text-xs uppercase tracking-[0.25em] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The NN Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-tight mb-5 text-[#FAF7F2]">
            More Than a Salon. It's an Experience.
          </h2>
          <p className="text-base sm:text-lg text-[#D6CBB8] font-light leading-relaxed">
            From the quiet serenity of our waiting suite to the gentle precision of our master artists, NN Salon is designed as your personal sanctuary in Faisalabad.
          </p>
        </div>

        {/* Feature Display with Center Image & Surrounding Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#262320] border border-[#3D3833] hover:border-[#C8A366]/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5C583] mb-4">
                <Flower2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7F2] mb-2">
                Luxury Environment
              </h3>
              <p className="text-sm text-[#B3A898] leading-relaxed">
                Warm ivory textures, custom curved seating, architectural arch mirrors, and ambient golden illumination create an immediate sense of calm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#262320] border border-[#3D3833] hover:border-[#C8A366]/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5C583] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7F2] mb-2">
                Professional Care
              </h3>
              <p className="text-sm text-[#B3A898] leading-relaxed">
                Experienced practitioners trained in contemporary styling, skin science, hygienic sterilization, and tailored hair diagnostics.
              </p>
            </div>
          </div>

          {/* Center Showcase Image */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3D3833] group">
              <img
                src={SALON_IMAGES.treatment}
                alt="NN Salon Treatment Suite and Styling Station"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141211] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E5C583] font-semibold">Signature Standard</span>
                <p className="font-serif text-lg text-[#FAF7F2] font-medium mt-1">Sanitized • Refined • Bespoke</p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#262320] border border-[#3D3833] hover:border-[#C8A366]/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5C583] mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7F2] mb-2">
                Premium Services
              </h3>
              <p className="text-sm text-[#B3A898] leading-relaxed">
                Comprehensive hair care, high-definition makeup, organic spa rituals, nail enhancements, and full men's grooming under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#262320] border border-[#3D3833] hover:border-[#C8A366]/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5C583] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7F2] mb-2">
                Personalized Experience
              </h3>
              <p className="text-sm text-[#B3A898] leading-relaxed">
                Dedicated pre-service consultations to understand your aesthetic vision, lifestyle requirements, and specific hair/skin goals.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
