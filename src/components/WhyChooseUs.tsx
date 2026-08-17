import React from 'react';
import { UserCheck, Sparkles, LayoutGrid, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return UserCheck;
      case 1:
        return Sparkles;
      case 2:
        return LayoutGrid;
      case 3:
        return HeartHandshake;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E7DECE]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold block mb-2">
              Distinctive Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1A18] tracking-tight">
              Why Choose NN Salon
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C564E] max-w-md mt-4 md:mt-0">
            A standard of hospitality and beauty craft perfected for the discerning clientele of Faisalabad.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={item.number}
                className="group relative p-7 rounded-2xl bg-[#F3ECE2] border border-[#E7DECE] hover:border-[#C8A366] hover:bg-[#FAF7F2] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#C8A366] tracking-tighter">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E7DECE] flex items-center justify-center text-[#1C1A18] group-hover:bg-[#1C1A18] group-hover:text-[#E5C583] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#1C1A18] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5C564E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7DECE] flex items-center text-xs font-semibold uppercase tracking-wider text-[#A57D3E]">
                  <span>NN Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
