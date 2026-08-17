import heroImg from '../assets/images/hero_salon_interior_1786960310047.jpg';
import treatmentImg from '../assets/images/treatment_area_spa_1786960322285.jpg';
import receptionImg from '../assets/images/reception_qr_area_1786960336469.jpg';
import loungeImg from '../assets/images/lounge_seating_area_1786960362598.jpg';
import hairStylingImg from '../assets/images/hair_styling_care_1786960379638.jpg';

import { SalonService, GalleryItem, ReviewItem } from '../types';

export const SALON_INFO = {
  name: 'NN SALON',
  fullName: 'NN Salon / Naureen Nawaz Salon',
  subtitle: 'Naureen Nawaz Salon',
  tagline: 'Where Beauty Meets Luxury',
  positioning: "Women's Beauty | Men's Grooming | Spa | Nails | Hair",
  phone: '03089651111',
  phoneFormatted: '0308 9651111',
  whatsappNumber: '923089651111',
  defaultWhatsAppMessage: 'Hello NN Salon, I would like to book an appointment. Please share the available timings and services.',
  address: "D Ground, near Qulliam Restaurant, Block C, People's Colony No. 1, Faisalabad, Pakistan",
  shortAddress: "D Ground, Block C, People's Colony No. 1, Faisalabad",
  landmark: "Near Qulliam Restaurant & D Ground Park",
  coordinates: {
    lat: 31.4085,
    lng: 73.1090,
  },
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=D+Ground+near+Qulliam+Restaurant+Block+C+Peoples+Colony+No+1+Faisalabad+Pakistan",
  appleMapsUrl: "https://maps.apple.com/?daddr=31.4085,73.1090&q=NN+Salon+D+Ground+Faisalabad",
  rating: 4.8,
  totalReviews: 124,
  experienceYears: 'Professional',
  openingHours: [
    { day: 'Monday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Tuesday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Wednesday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Thursday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Friday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Saturday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
    { day: 'Sunday', hours: '10 AM – 9 PM', openTime: 10, closeTime: 21 },
  ]
};

export const SALON_IMAGES = {
  hero: heroImg,
  treatment: treatmentImg,
  reception: receptionImg,
  lounge: loungeImg,
  hairStyling: hairStylingImg,
};

export const SERVICES: SalonService[] = [
  // HAIR
  {
    id: 'hair-1',
    name: 'Haircut',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Precision cutting tailored to your face shape, personal style, and hair texture.',
    features: ['Custom consultation', 'Wash & conditioning', 'Precision texturizing', 'Finished blow dry'],
    popular: true,
  },
  {
    id: 'hair-2',
    name: 'Hair Styling',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Signature luxury styling for special occasions, formal events, bridal, or everyday elegance.',
    features: ['Volume boost styling', 'Heat protection', 'Curling & waves', 'Long-lasting hold'],
  },
  {
    id: 'hair-3',
    name: 'Blow Dry',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Silky smooth or voluminous bouncy blow dry with premium nourishing serums.',
    features: ['Deep cleanse shampoo', 'Scalp massage', 'Gloss finish serum', 'Long-lasting texture'],
    popular: true,
  },
  {
    id: 'hair-4',
    name: 'Hair Color',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Full color transformations, glossing, balayage, highlights, and root touch-ups.',
    features: ['Ammonia-free formulas', 'Tone matching consultation', 'Deep bond repair', 'Vibrant shine seal'],
    popular: true,
  },
  {
    id: 'hair-5',
    name: 'Hair Treatment',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Intensive restorative treatments including keratin, protein hydration, and damage repair.',
    features: ['Bond restructuring', 'Deep moisture infusion', 'Frizz control', 'Silky smoothness'],
  },
  {
    id: 'hair-6',
    name: 'Hair Care',
    category: 'hair',
    categoryName: 'Hair',
    description: 'Specialized scalp rejuvenation, anti-dandruff care, and root strengthening therapy.',
    features: ['Scalp exfoliation', 'Botanical infusions', 'Nourishing mask', 'Steam activation'],
  },

  // BEAUTY
  {
    id: 'beauty-1',
    name: 'Facial',
    category: 'beauty',
    categoryName: 'Beauty',
    description: 'Hydrating, brightening, and anti-aging luxury facials customized for your skin type.',
    features: ['Deep pore cleansing', 'Exfoliation & steam', 'Custom herbal/gold mask', 'Rejuvenating glow'],
    popular: true,
  },
  {
    id: 'beauty-2',
    name: 'Makeup',
    category: 'beauty',
    categoryName: 'Beauty',
    description: 'Flawless party, evening, engagement, and bridal makeup by expert makeup artists.',
    features: ['High-definition finish', 'Skin prep & priming', 'Custom eye artistry', 'Waterproof long-wear'],
    popular: true,
  },
  {
    id: 'beauty-3',
    name: 'Skin Care',
    category: 'beauty',
    categoryName: 'Beauty',
    description: 'Advanced dermatological care protocols for hyperpigmentation, texture, and hydration.',
    features: ['Targeted serum infusion', 'Barrier repair', 'Brightening booster', 'Sun defense seal'],
  },
  {
    id: 'beauty-4',
    name: 'Beauty Treatments',
    category: 'beauty',
    categoryName: 'Beauty',
    description: 'Complete aesthetic enhancements including threading, waxing, bleaching, and skin polishing.',
    features: ['Gentle premium wax', 'Skin soothing lotion', 'Precision shaping', 'Even radiance'],
  },

  // NAILS
  {
    id: 'nails-1',
    name: 'Manicure',
    category: 'nails',
    categoryName: 'Nails',
    description: 'Indulgent hand massage, cuticle refinement, gentle scrub, and flawless polish.',
    features: ['Aromatic hand soak', 'Nail shaping & buffing', 'Hydrating cuticle oil', 'Gel or classic lacquer'],
    popular: true,
  },
  {
    id: 'nails-2',
    name: 'Pedicure',
    category: 'nails',
    categoryName: 'Nails',
    description: 'Revitalizing foot bath, calluses treatment, relaxing massage, and perfected polish.',
    features: ['Epsom salt soak', 'Dead skin exfoliation', 'Hydrating foot mask', 'Tension-relief massage'],
    popular: true,
  },
  {
    id: 'nails-3',
    name: 'Nail Care',
    category: 'nails',
    categoryName: 'Nails',
    description: 'Nail strengthening treatments, acrylic/gel extensions, custom nail art, and repair.',
    features: ['Keratin nail strengthener', 'Extension overlays', 'Custom minimalist nail art', 'Long-lasting top coat'],
  },

  // SPA
  {
    id: 'spa-1',
    name: 'Spa Treatments',
    category: 'spa',
    categoryName: 'Spa',
    description: 'Holistic full-body pampering sessions designed to restore energy and relieve stress.',
    features: ['Warm essential oils', 'Calming ambiance', 'Full body relaxation', 'Herbal steam therapy'],
    popular: true,
  },
  {
    id: 'spa-2',
    name: 'Relaxation Treatments',
    category: 'spa',
    categoryName: 'Spa',
    description: 'Targeted head, shoulder, back, and foot therapies to melt away everyday fatigue.',
    features: ['Acupressure focus', 'Hot towel compress', 'Custom scent selection', 'Quiet sanctuary room'],
  },
  {
    id: 'spa-3',
    name: 'Grooming Services',
    category: 'spa',
    categoryName: 'Spa',
    description: 'All-inclusive wellness packages combining spa massage, skin polish, and nail care.',
    features: ['Full body polish', 'Deep relaxation wrap', 'Multi-service bundle', 'Complimentary herbal tea'],
  },

  // MEN'S GROOMING
  {
    id: 'mens-1',
    name: 'Haircut',
    category: 'mens',
    categoryName: "Men's Grooming",
    description: 'Modern fades, classic gentlemen cuts, and precision styling tailored for men.',
    features: ['Style consultation', 'Hot towel finish', 'Beard blend', 'Matte or pomade styling'],
    popular: true,
  },
  {
    id: 'mens-2',
    name: 'Beard Grooming',
    category: 'mens',
    categoryName: "Men's Grooming",
    description: 'Razor sharp beard shaping, hot foam shave, beard conditioning, and trimming.',
    features: ['Precision razor lining', 'Hot steam towel', 'Conditioning beard oil', 'Soothing balm'],
    popular: true,
  },
  {
    id: 'mens-3',
    name: 'Styling',
    category: 'mens',
    categoryName: "Men's Grooming",
    description: 'Professional event styling, hair blow dry, and texture shaping for any occasion.',
    features: ['Premium wax & clay', 'Natural texture hold', 'Volume enhancement', 'Crisp neckline'],
  },
  {
    id: 'mens-4',
    name: 'Grooming Treatments',
    category: 'mens',
    categoryName: "Men's Grooming",
    description: 'Men’s clarifying facial, blackhead extraction, scalp detox, and manicure care.',
    features: ['Charcoal pore detox', 'Scalp stimulation', 'Clean hand & nail groom', 'Refreshed look'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Styling & Treatment Haven',
    category: 'interior',
    categoryLabel: 'Interior',
    imageUrl: heroImg,
    aspectRatio: '16/9',
    description: 'Sleek boucle chairs, arched illuminated mirrors, and soft ivory palette.',
  },
  {
    id: 'gal-2',
    title: 'Private Treatment & Spa Suite',
    category: 'beauty',
    categoryLabel: 'Beauty',
    imageUrl: treatmentImg,
    aspectRatio: '4/3',
    description: 'Tranquil private station for facials, hair therapy, and luxury skin rituals.',
  },
  {
    id: 'gal-3',
    title: 'Welcome Concierge & QR Check-In',
    category: 'experience',
    categoryLabel: 'Experience',
    imageUrl: receptionImg,
    aspectRatio: '4/3',
    description: 'Ribbed stone welcome desk with seamless instant WhatsApp & appointment access.',
  },
  {
    id: 'gal-4',
    title: 'VIP Client Lounge & Sanctuary',
    category: 'interior',
    categoryLabel: 'Interior',
    imageUrl: loungeImg,
    aspectRatio: '4/3',
    description: 'Curved linen seating, natural light, and quiet elegance before your session.',
  },
  {
    id: 'gal-5',
    title: 'Signature Hair Care & Styling Bar',
    category: 'hair',
    categoryLabel: 'Hair',
    imageUrl: hairStylingImg,
    aspectRatio: '4/3',
    description: 'Premium organic serums, precise cutting tools, and personalized hair artistry.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Ayesha M.',
    rating: 5,
    date: 'Recent visit',
    serviceMentioned: 'Hair Styling & Color',
    text: 'Exceptional salon experience in Faisalabad. The staff is remarkably professional and friendly. The hair styling and treatment exceeded my expectations. The ambiance is calm and truly luxurious.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Hamza K.',
    rating: 5,
    date: 'Recent visit',
    serviceMentioned: "Men's Grooming & Beard Care",
    text: 'Top tier grooming experience in D Ground. Very cooperative team, clean tools, and high attention to detail. Great welcoming environment.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Fatima Z.',
    rating: 5,
    date: 'Recent visit',
    serviceMentioned: 'Facial & Nail Care',
    text: 'Loved the manicure and rejuvenating facial. The aesthetic interior, warm lighting, and courteous staff make you feel pampered from the moment you step in.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Sara T.',
    rating: 4.8,
    date: 'Recent visit',
    serviceMentioned: 'Spa & Blow Dry',
    text: 'A soothing sanctuary right in People’s Colony. Highly recommend their blow dry and relaxing spa treatments. Truly a new standard of beauty in the city.',
    verified: true,
  },
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Professional Team',
    description: 'Experienced, attentive, and highly trained beauty and grooming specialists committed to your style.',
  },
  {
    number: '02',
    title: 'Premium Environment',
    description: 'A calm, elegant, and hygienically maintained atmosphere designed for comfort and peace of mind.',
  },
  {
    number: '03',
    title: 'Complete Beauty Experience',
    description: "Hair, beauty, nails, spa, and men's grooming services seamlessly offered in one destination.",
  },
  {
    number: '04',
    title: 'Customer Care',
    description: 'A personalized consultation focused entirely on your preferences, comfort, and satisfaction.',
  },
];

/**
 * Checks if NN Salon is open at the current time
 */
export function getSalonOpenStatus(): { isOpen: boolean; statusText: string; subText: string } {
  try {
    const now = new Date();
    // Pakistan Standard Time is UTC+5
    // Calculate local hour
    const hours = now.getHours();
    const isOpen = hours >= 10 && hours < 21;
    
    if (isOpen) {
      return {
        isOpen: true,
        statusText: 'Open Today',
        subText: 'Closes at 9:00 PM',
      };
    } else {
      return {
        isOpen: false,
        statusText: 'Opens at 10:00 AM',
        subText: '10:00 AM – 9:00 PM Daily',
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Daily',
      subText: '10:00 AM – 9:00 PM',
    };
  }
}

/**
 * Generates direct WhatsApp booking link with customized pre-filled message
 */
export function createWhatsAppBookingUrl(serviceName?: string, categoryName?: string): string {
  let message = SALON_INFO.defaultWhatsAppMessage;
  if (serviceName) {
    message = `Hello NN Salon, I would like to book an appointment for *${serviceName}*${categoryName ? ` (${categoryName})` : ''}. Please share the available timings and details.`;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encoded}`;
}
