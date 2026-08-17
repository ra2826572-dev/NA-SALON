import React, { useState } from 'react';
import { Sparkles, Eye, Expand, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<'all' | 'interior' | 'beauty' | 'hair' | 'experience'>('all');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'interior', label: 'Interior' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'hair', label: 'Hair' },
    { id: 'experience', label: 'Experience' },
  ] as const;

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5EFE6] border-y border-[#E7DECE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight mb-4">
            Inside NN Salon
          </h2>
          <p className="text-base sm:text-lg text-[#5C564E] font-light leading-relaxed">
            Step into an atmosphere designed around beauty, comfort and elegance.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#1C1A18] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#4A453F] hover:bg-[#EAE2D5] border border-[#E7DECE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Luxury Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0 && filter === 'all';
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E7DECE] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  isLarge ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with precise aspect ratio */}
                <div className={`w-full overflow-hidden relative ${isLarge ? 'h-[360px] sm:h-[440px]' : 'h-[300px] sm:h-[340px]'}`}>
                  <img
                    src={item.imageUrl}
                    alt={`${item.title} at NN Salon Faisalabad`}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle luxury gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18]/80 via-[#1C1A18]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#1C1A18] shadow-sm border border-[#E7DECE]">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Lightbox Trigger Icon on Hover */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-[#1C1A18]/80 backdrop-blur-md border border-[#FAF7F2]/30 flex items-center justify-center text-[#FAF7F2]">
                    <Expand className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-[#FAF7F2] z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold mb-1 text-[#FAF7F2] group-hover:text-[#E5C583] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D6CBB8] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
