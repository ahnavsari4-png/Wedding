export interface WeddingEvent {
  id: string;
  titleGu: string;
  titleEn: string;
  dateGu: string;
  dateEn: string;
  timeGu: string;
  timeEn: string;
  venueGu: string;
  venueEn: string;
  addressGu: string;
  addressEn: string;
  mapQuery: string;
  descriptionGu: string;
  descriptionEn: string;
  dressCodeGu: string;
  dressCodeEn: string;
  iconName: string;
  highlight?: boolean;
}

export interface FamilyMember {
  relationGu: string;
  relationEn: string;
  namesGu: string[];
  namesEn: string[];
}

export interface Blessing {
  id: string;
  senderName: string;
  relationGu: string;
  city: string;
  message: string;
  tag: string;
  timestamp: string;
  likes: number;
}

export interface RsvpData {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  guestCount: number;
  dietPreference: 'gujarati' | 'jain' | 'kathiyawadi' | 'all';
  attendingEvents: string[];
  message?: string;
  submittedAt: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  titleGu: string;
  titleEn: string;
  category: 'prewedding' | 'engagement' | 'rituals';
  captionGu: string;
}
