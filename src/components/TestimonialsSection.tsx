import React, { useState } from 'react';
import { Star, MessageCircle, CheckCircle, Quote, ExternalLink } from 'lucide-react';
import { REVIEWS, SALON_INFO } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#E7DECE] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Client Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight">
              Loved by Our Clients
            </h2>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="flex items-center gap-5 p-4 rounded-2xl bg-[#F3ECE2] border border-[#E7DECE]">
            <div className="flex flex-col items-center justify-center pr-4 border-r border-[#E7DECE]">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1A18] leading-none">4.8</span>
              <div className="flex text-[#C8A366] text-xs mt-1">
                {'★★★★★'}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#1C1A18]">Google Verified Rating</p>
              <p className="text-xs text-[#5C564E]">{SALON_INFO.totalReviews}+ Verified Customer Reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-2xl bg-[#F8F5F0] border border-[#E7DECE] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C8A366] text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#C8A366]" />
                    ))}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#736B5E]">
                    {rev.date}
                  </span>
                </div>

                {rev.serviceMentioned && (
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EDE6DD] text-[#736B5E] text-[11px] font-medium mb-3">
                    {rev.serviceMentioned}
                  </div>
                )}

                <p className="text-sm sm:text-base text-[#4A453F] leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DECE] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E7DECE] flex items-center justify-center font-serif text-sm font-semibold text-[#1C1A18]">
                    {rev.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1C1A18]">{rev.name}</p>
                    <p className="text-[10px] text-[#736B5E] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified Client
                    </p>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#A57D3E] font-medium">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] border border-[#E7DECE] hover:bg-[#EAE2D5] text-[#1C1A18] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>View More Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#A57D3E]" />
          </a>
        </div>

      </div>
    </section>
  );
};
