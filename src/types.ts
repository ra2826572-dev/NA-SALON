export type ServiceCategory = 'hair' | 'beauty' | 'nails' | 'spa' | 'mens';

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  description: string;
  duration?: string;
  features?: string[];
  priceNote?: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'beauty' | 'hair' | 'experience';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio?: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  serviceMentioned?: string;
  text: string;
  verified: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceCategory: ServiceCategory;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
