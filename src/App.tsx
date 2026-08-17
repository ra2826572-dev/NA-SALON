import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ScanAndConnect } from './components/ScanAndConnect';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { ServiceCategory, GalleryItem } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | undefined>(undefined);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (serviceName?: string, category?: ServiceCategory) => {
    setSelectedService(serviceName);
    setSelectedCategory(category);
    setBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.querySelector('#services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1A18] flex flex-col antialiased selection:bg-[#E8DCC4] selection:text-[#1C1A18] pb-16 md:pb-0">
      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreServices={handleExploreServices} 
        />

        {/* 2. About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Detailed Services Menu */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Featured Experience */}
        <ExperienceSection />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Luxury Inside NN Salon Gallery */}
        <GallerySection onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 7. Scan & Connect QR Concierge */}
        <ScanAndConnect />

        {/* 8. Verified Testimonials */}
        <TestimonialsSection />

        {/* 9. Booking CTA Banner */}
        <BookingSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Location & Map Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedService(undefined);
          setSelectedCategory(undefined);
        }}
        initialService={selectedService}
        initialCategory={selectedCategory}
      />

      {/* Full-Screen Gallery Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
      />
    </div>
  );
}
