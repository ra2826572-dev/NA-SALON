import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, Sparkles, Send } from 'lucide-react';
import { SERVICES, SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';
import { ServiceCategory } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: ServiceCategory;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialCategory,
}) => {
  const [category, setCategory] = useState<ServiceCategory>(initialCategory || 'hair');
  const [serviceName, setServiceName] = useState<string>(initialService || 'Haircut');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setServiceName(initialService);
    }
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialService, initialCategory, isOpen]);

  if (!isOpen) return null;

  const categoryServices = SERVICES.filter((s) => s.category === category);

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*New Appointment Request - NN Salon*
• *Client Name:* ${fullName.trim() || 'Guest'}
• *Phone:* ${phone.trim() || 'Not specified'}
• *Service Category:* ${category.toUpperCase()}
• *Service:* ${serviceName}
• *Preferred Date:* ${date}
• *Preferred Time:* ${timeSlot}
${notes.trim() ? `• *Special Notes:* ${notes.trim()}` : ''}

Please confirm availability and schedule.`;

    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1C1A18]/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#E7DECE] shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Header */}
        <div className="bg-[#1C1A18] text-[#FAF7F2] p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E5C583]">
              NN Salon Concierge
            </span>
            <h3 id="booking-modal-title" className="font-serif text-2xl font-semibold text-[#FAF7F2]">
              Book Your Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#D6CBB8] hover:text-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF7EE] text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl text-[#1C1A18] font-bold">
                Appointment Request Ready!
              </h4>
              <p className="text-sm text-[#5C564E] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1C1A18]">{fullName || 'Valued Client'}</strong>. Our front desk team at D Ground will review your selected slot for <strong className="text-[#1C1A18]">{serviceName}</strong> on <strong className="text-[#1C1A18]">{date} at {timeSlot}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#E7DECE] text-xs text-left text-[#4A453F] space-y-1.5 mt-4">
                <p><strong>Location:</strong> D Ground, People's Colony No. 1, Faisalabad</p>
                <p><strong>Salon Contact:</strong> {SALON_INFO.phoneFormatted}</p>
                <p><strong>Timings:</strong> 10:00 AM – 9:00 PM Daily</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello NN Salon, following up on appointment request for ${serviceName} on ${date} at ${timeSlot}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="flex-1 inline-flex items-center justify-center bg-[#1C1A18] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-4">
              
              {/* Category Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                  1. Service Category
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {(['hair', 'beauty', 'nails', 'spa', 'mens'] as ServiceCategory[]).map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        const firstInCat = SERVICES.find((s) => s.category === cat);
                        if (firstInCat) setServiceName(firstInCat.name);
                      }}
                      className={`text-[11px] font-semibold uppercase tracking-wider py-2 px-1 rounded-lg border transition-all ${
                        category === cat
                          ? 'bg-[#1C1A18] text-[#FAF7F2] border-[#1C1A18]'
                          : 'bg-[#F3ECE2] text-[#5C564E] border-[#E7DECE] hover:bg-[#EAE2D5]'
                      }`}
                    >
                      {cat === 'mens' ? "Men's" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                  2. Select Service
                </label>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1A18] font-medium focus:outline-none focus:border-[#C8A366]"
                >
                  {categoryServices.map((serv) => (
                    <option key={serv.id} value={serv.name}>
                      {serv.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1A18] font-medium focus:outline-none focus:border-[#C8A366]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1A18] font-medium focus:outline-none focus:border-[#C8A366]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Fatima Khan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1A18] placeholder-[#948B7D] focus:outline-none focus:border-[#C8A366]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="0300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2.5 text-sm text-[#1C1A18] placeholder-[#948B7D] focus:outline-none focus:border-[#C8A366]"
                    />
                  </div>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#736B5E] mb-1.5">
                  Special Notes / Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any hair/skin specifications, styling preferences, or multiple services..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#F3ECE2] border border-[#E7DECE] rounded-xl px-3.5 py-2 text-sm text-[#1C1A18] placeholder-[#948B7D] focus:outline-none focus:border-[#C8A366] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Request via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1A18] hover:bg-[#2E2A24] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest py-3 px-6 rounded-full transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Booking Request</span>
                </button>
              </div>

              <p className="text-[11px] text-[#8C8275] text-center pt-1">
                Direct booking line: <strong className="text-[#1C1A18]">{SALON_INFO.phoneFormatted}</strong> • D Ground, Faisalabad
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
