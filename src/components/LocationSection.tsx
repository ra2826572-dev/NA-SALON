import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  MessageCircle, 
  Copy, 
  Check, 
  Car, 
  Compass, 
  Building2,
  Sparkles
} from 'lucide-react';
import { SALON_INFO, getSalonOpenStatus, createWhatsAppBookingUrl } from '../data/salonData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const status = getSalonOpenStatus();
  const currentDayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57D3E] font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Prime Faisalabad Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] tracking-tight mb-4">
            Visit NN Salon
          </h2>
          <p className="text-base sm:text-lg text-[#5C564E] font-light leading-relaxed">
            Conveniently situated in the prime commercial center of D Ground, People's Colony No. 1, Faisalabad.
          </p>
        </div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address & Quick Actions Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#F3ECE2] border border-[#E7DECE] shadow-sm space-y-6">
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#A57D3E]">
                    Salon Location
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#665D52] hover:text-[#1C1A18] bg-[#FAF7F2] border border-[#E7DECE] px-3 py-1 rounded-full transition-colors focus:outline-none"
                    title="Copy full address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A57D3E]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#1C1A18] mt-2 mb-2">
                  NN Salon (Naureen Nawaz)
                </h3>
                
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E7DECE]/80 text-sm text-[#4A453F] leading-relaxed flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A366] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1C1A18]">{SALON_INFO.address}</p>
                    <p className="text-xs text-[#736B5E] mt-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#A57D3E]" />
                      <span>Landmark: {SALON_INFO.landmark}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1C1A18] hover:bg-[#2E2A24] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm group"
                >
                  <Navigation className="w-4 h-4 text-[#E5C583] group-hover:scale-110 transition-transform" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={SALON_INFO.appleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF7F2] hover:bg-white text-[#1C1A18] border border-[#E7DECE] text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-[#A57D3E]" />
                  <span>Apple Maps</span>
                </a>
              </div>

              {/* Contact & WhatsApp Strip */}
              <div className="pt-4 border-t border-[#E7DECE] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#736B5E] block mb-1">
                    Call Salon Desk
                  </span>
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#1C1A18] hover:text-[#A57D3E] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C8A366]" />
                    <span>{SALON_INFO.phoneFormatted}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#736B5E] block mb-1">
                    WhatsApp Chat
                  </span>
                  <a
                    href={createWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:text-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>0308 9651111</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Parking & Arrival Guide Card */}
            <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E7DECE] shadow-sm space-y-3">
              <h4 className="font-serif text-base font-semibold text-[#1C1A18] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#A57D3E]" />
                <span>Arrival & Parking Guide</span>
              </h4>
              <ul className="text-xs text-[#5C564E] space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] mt-1.5 shrink-0" />
                  <span><strong>Dedicated Customer Parking:</strong> Easy parking space available directly outside the salon entrance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366] mt-1.5 shrink-0" />
                  <span><strong>Ride Hailing Drop-off:</strong> Set your Careem, InDrive, or Yango destination to <em>"Qulliam Restaurant D Ground"</em> or <em>"NN Salon People's Colony"</em>.</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#E7DECE] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#A57D3E]" />
                  <h4 className="font-serif text-lg font-semibold text-[#1C1A18]">Opening Hours</h4>
                </div>

                {/* Dynamic Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF7EE] text-emerald-800 border border-emerald-200">
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span>{status.statusText}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#4A453F]">
                {SALON_INFO.openingHours.map((item) => {
                  const isToday = item.day.toLowerCase() === currentDayName.toLowerCase();
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-colors ${
                        isToday ? 'bg-[#F3ECE2] font-semibold text-[#1C1A18]' : ''
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isToday && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A366]" />}
                        <span>{item.day}</span>
                        {isToday && <span className="text-[10px] uppercase font-bold text-[#A57D3E] ml-1">(Today)</span>}
                      </span>
                      <span>{item.hours}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Interactive Map Wrapper */}
            <div className="relative w-full flex-1 min-h-[500px] rounded-3xl overflow-hidden border border-[#E7DECE] shadow-md bg-[#EDE6DD] flex flex-col">
              
              {/* Google Maps Embed iframe with precise coordinates for D Ground Peoples Colony 1 Faisalabad */}
              <iframe
                id="salon-google-map-iframe"
                title="NN Salon Faisalabad D Ground Location Map"
                src="https://maps.google.com/maps?q=31.40854,73.10902+(NN+Salon+-+Naureen+Nawaz+D+Ground+Faisalabad)&t=m&z=17&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full min-h-[500px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Floating Salon Marker Card on Map */}
              <div className="absolute top-4 left-4 sm:left-auto sm:right-4 p-4 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E7DECE] shadow-xl max-w-xs z-10 pointer-events-auto">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-[#A57D3E]">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>NN Salon Location</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <p className="text-sm font-serif font-bold text-[#1C1A18]">NN Salon (Naureen Nawaz)</p>
                <p className="text-xs text-[#5C564E] mt-0.5">D Ground, Block C, People's Colony No. 1</p>
                <p className="text-[11px] text-[#8C8275] mt-1 border-t border-[#E7DECE] pt-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C8A366]" />
                  <span>Near Qulliam Restaurant</span>
                </p>
                <a
                  href="https://maps.google.com/maps?q=31.40854,73.10902+(NN+Salon)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-[#1C1A18] hover:bg-[#332E27] text-[#FAF7F2] text-[11px] font-semibold py-2 rounded-xl transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#E5C583]" />
                  <span>Start Navigation (GPS)</span>
                </a>
              </div>

              {/* Map Footer Toolbar */}
              <div className="p-3.5 bg-[#FAF7F2] border-t border-[#E7DECE] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C564E] z-10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A366]" />
                  <span className="font-medium text-[#1C1A18]">D Ground, Faisalabad (31.4085° N, 73.1090° E)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=31.40854,73.10902"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1A18] hover:text-[#A57D3E] transition-colors"
                  >
                    <span>Get Exact Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Area Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#F3ECE2] border border-[#E7DECE] text-center">
                <p className="text-[10px] uppercase font-bold text-[#A57D3E] tracking-wider">Area</p>
                <p className="text-xs font-semibold text-[#1C1A18] mt-0.5">D Ground Commercial</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F3ECE2] border border-[#E7DECE] text-center">
                <p className="text-[10px] uppercase font-bold text-[#A57D3E] tracking-wider">Sector</p>
                <p className="text-xs font-semibold text-[#1C1A18] mt-0.5">Block C, People's Colony 1</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F3ECE2] border border-[#E7DECE] text-center">
                <p className="text-[10px] uppercase font-bold text-[#A57D3E] tracking-wider">Immediate Landmark</p>
                <p className="text-xs font-semibold text-[#1C1A18] mt-0.5">Near Qulliam Restaurant</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
