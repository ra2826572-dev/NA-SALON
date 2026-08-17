import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Hand, 
  Flame, 
  UserCheck, 
  ArrowUpRight, 
  MessageSquare,
  Check,
  Calendar,
  Layers
} from 'lucide-react';
import { SERVICES, SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';
import { ServiceCategory, SalonService } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string, category?: ServiceCategory) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'hair', label: 'Hair', icon: Scissors },
    { id: 'beauty', label: 'Beauty', icon: Sparkles },
    { id: 'nails', label: 'Nails', icon: Hand },
    { id: 'spa', label: 'Spa & Wellness', icon: Flame },
    { id: 'mens', label: "Men's Grooming", icon: UserCheck },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (category: ServiceCategory) => {
    switch (category) {
      case 'hair':
        return Scissors;
      case 'beauty':
        return Sparkles;
      case 'nails':
        return Hand;
      case 'spa':
        return Flame;
      case 'mens':
        return UserCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5EFE6] border-y border-[#E7DECE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight mb-4">
            Luxury Services & Rituals
          </h2>
          <p className="text-base sm:text-lg text-[#5C564E] font-light leading-relaxed">
            Every service at NN Salon is performed using high-grade formulations, sanitized instruments, and customized technique by our dedicated specialists.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1C1A18] text-[#FAF7F2] shadow-md'
                    : 'bg-[#FAF7F2] text-[#4A453F] hover:bg-[#EAE2D5] border border-[#E7DECE]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E5C583]' : 'text-[#8C8275]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.category);
            return (
              <div
                key={service.id}
                className="group relative bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E7DECE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F3ECE2] border border-[#E7DECE] flex items-center justify-center text-[#A57D3E] group-hover:bg-[#1C1A18] group-hover:text-[#E5C583] group-hover:border-[#1C1A18] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {service.popular && (
                        <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#FAF0DC] text-[#A57D3E] border border-[#EAD7BA]">
                          Popular
                        </span>
                      )}
                      <span className="text-[11px] uppercase tracking-wider text-[#736B5E] font-medium">
                        {service.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A18] font-semibold mb-2 group-hover:text-[#A57D3E] transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5C564E] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  {service.features && (
                    <ul className="space-y-1.5 mb-6 pt-3 border-t border-[#F0E8DC] text-xs text-[#4A453F]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C8A366] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer Pricing Note & Action Buttons */}
                <div className="pt-4 border-t border-[#F0E8DC] flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#736B5E]">
                    Contact for Price
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={createWhatsAppBookingUrl(service.name, service.categoryName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Quick Inquiry on WhatsApp"
                      className="p-2 rounded-full border border-[#E7DECE] bg-[#FAF7F2] text-[#25D366] hover:bg-[#EAE2D5] transition-colors"
                      aria-label={`Inquire about ${service.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onOpenBooking(service.name, service.category)}
                      className="inline-flex items-center gap-1 bg-[#1C1A18] hover:bg-[#2E2A24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      <span>Book Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-14 text-center p-6 rounded-2xl bg-[#FAF7F2] border border-[#E7DECE] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-serif text-lg font-semibold text-[#1C1A18]">Have a custom request or bridal query?</p>
            <p className="text-xs text-[#5C564E]">Contact our concierge desk on WhatsApp for custom bundles and schedules.</p>
          </div>
          <a
            href={createWhatsAppBookingUrl('Custom Package / Consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A366] hover:bg-[#B89355] text-[#1C1A18] text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shrink-0 shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult Concierge</span>
          </a>
        </div>

      </div>
    </section>
  );
};
