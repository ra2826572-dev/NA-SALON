import React from 'react';
import { QrCode, MessageCircle, MapPin, Phone, Sparkles } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES, createWhatsAppBookingUrl } from '../data/salonData';

export const ScanAndConnect: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3ECE2] rounded-3xl border border-[#E7DECE] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-sm relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold">
                <QrCode className="w-3.5 h-3.5" />
                <span>Instant Concierge</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1C1A18] tracking-tight">
                Scan & Connect with NN Salon
              </h2>

              <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
                Scan our concierge QR code during your salon visit or tap below to instantly connect with our front desk, explore current schedules, or save our direct WhatsApp contact in one touch.
              </p>

              {/* Quick Connect Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <a
                  href={createWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DECE] hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EAF7EE] flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#736B5E] font-semibold">WhatsApp</p>
                    <p className="text-xs font-medium text-[#1C1A18] group-hover:text-[#25D366]">{SALON_INFO.phone}</p>
                  </div>
                </a>

                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DECE] hover:border-[#C8A366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#A57D3E]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#736B5E] font-semibold">Call Desk</p>
                    <p className="text-xs font-medium text-[#1C1A18] group-hover:text-[#A57D3E]">0308 9651111</p>
                  </div>
                </a>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E7DECE] hover:border-[#1C1A18] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E7DECE] flex items-center justify-center text-[#1C1A18]">
                    <MapPin className="w-5 h-5 text-[#C8A366]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#736B5E] font-semibold">Location</p>
                    <p className="text-xs font-medium text-[#1C1A18]">D Ground, FSD</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Image: QR Code Stand & Welcome Desk */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E7DECE] bg-[#FAF7F2] max-w-sm w-full">
                <img
                  src={SALON_IMAGES.reception}
                  alt="NN Salon Welcome Reception & QR Code Concierge"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-4 bg-[#FAF7F2] text-center border-t border-[#E7DECE]">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A57D3E]">
                    Reception Concierge Desk
                  </span>
                  <p className="text-xs text-[#5C564E] mt-0.5">Welcome to Naureen Nawaz Salon</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
