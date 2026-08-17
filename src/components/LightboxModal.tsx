import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onSelect }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[prevIdx]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141211]/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/20 transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-40 p-3 rounded-full bg-[#1C1A18]/80 hover:bg-[#1C1A18] text-[#FAF7F2] border border-[#FAF7F2]/20 transition-all focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-40 p-3 rounded-full bg-[#1C1A18]/80 hover:bg-[#1C1A18] text-[#FAF7F2] border border-[#FAF7F2]/20 transition-all focus:outline-none hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3D3833] max-h-[75vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain bg-[#1C1A18]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 text-center max-w-xl text-[#FAF7F2]">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#E5C583] font-semibold mb-1">
            <Sparkles className="w-3 h-3" />
            <span>{item.categoryLabel} Showcase</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-medium">{item.title}</h3>
          <p className="text-xs sm:text-sm text-[#B3A898] mt-1">{item.description}</p>
          <p className="text-[11px] text-[#736B5E] mt-2">
            {currentIndex + 1} of {GALLERY_ITEMS.length}
          </p>
        </div>
      </div>
    </div>
  );
};
