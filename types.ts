export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Shop {
  id: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  gallery: string[];
  totalSeats: number;
  availableSeats: number;
  services: Service[];
  reviews: Review[];
  openTime: string;
  closeTime: string;
  tags: string[];
  staff: Staff[];
}

export interface Booking {
  shopId: string;
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
}

export enum ViewState {
  LIST = 'LIST',
  DETAILS = 'DETAILS',
}