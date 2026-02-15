import { Shop, Service, Review } from './types';

export const MOCK_SERVICES: Service[] = [
  { id: 's1', name: 'Classic Haircut', price: 200, duration: 30 },
  { id: 's2', name: 'Beard Trim & Shape', price: 150, duration: 20 },
  { id: 's3', name: 'Full Head Shave', price: 180, duration: 30 },
  { id: 's4', name: 'Hair Color (Basic)', price: 500, duration: 60 },
  { id: 's5', name: 'Facial Treatment', price: 600, duration: 45 },
  { id: 's6', name: 'Relaxing Head Massage (Champi)', price: 100, duration: 15 },
];

const REVIEWS: Review[] = [
  { id: 'r1', user: 'Rahul Das', rating: 5, comment: 'Best fade in Bhubaneswar!', date: '2023-10-15' },
  { id: 'r2', user: 'Amit Mishra', rating: 4, comment: 'Good service but a bit wait time.', date: '2023-10-12' },
  { id: 'r3', user: 'Sandeep K', rating: 5, comment: 'Clean and professional.', date: '2023-09-28' },
];

// Fallback image in case specific ones fail
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800';

export const SHOPS: Shop[] = [
  {
    id: '1',
    name: 'Kalinga Cuts & Salon',
    location: 'Bhubaneswar, Odisha',
    address: 'Plot 102, Saheed Nagar, Near Pantaloons',
    rating: 4.8,
    reviewCount: 124,
    // Classic barber chair, warm lighting
    thumbnail: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1503951914875-befbb28dd090?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 6,
    availableSeats: 2,
    services: MOCK_SERVICES,
    reviews: REVIEWS,
    openTime: '09:00',
    closeTime: '21:00',
    tags: ['Premium', 'AC', 'Unisex'],
    staff: [
      { id: 'st1', name: 'Rajesh Kumar', role: 'Senior Stylist', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200' },
      { id: 'st2', name: 'Vikram Singh', role: 'Barber', image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: '2',
    name: 'Silver City Styles',
    location: 'Cuttack, Odisha',
    address: 'College Square, Cuttack',
    rating: 4.5,
    reviewCount: 89,
    // Barber tools / Scissors close up
    thumbnail: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 4,
    availableSeats: 0,
    services: MOCK_SERVICES.slice(0, 3),
    reviews: REVIEWS,
    openTime: '08:00',
    closeTime: '20:00',
    tags: ['Budget', 'Quick'],
    staff: [
      { id: 'st3', name: 'Manoj Das', role: 'Owner', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: '3',
    name: 'Puri Beach Barbers',
    location: 'Puri, Odisha',
    address: 'VIP Road, Near Beach',
    rating: 4.2,
    reviewCount: 45,
    // Modern clean salon interior
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1593702295094-aea8c5c13d99?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504652517000-aa106a405338?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 3,
    availableSeats: 1,
    services: MOCK_SERVICES,
    reviews: REVIEWS,
    openTime: '10:00',
    closeTime: '22:00',
    tags: ['Tourist Friendly', 'Spa'],
    staff: [
       { id: 'st4', name: 'Suraj Patra', role: 'Stylist', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: '4',
    name: 'The GentleMan\'s Grooming',
    location: 'Patia, Bhubaneswar',
    address: 'KIIT Road, Patia',
    rating: 4.9,
    reviewCount: 210,
    // Luxury styling / Darker aesthetic
    thumbnail: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503951914875-befbb28dd090?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 8,
    availableSeats: 5,
    services: MOCK_SERVICES,
    reviews: REVIEWS,
    openTime: '09:00',
    closeTime: '21:00',
    tags: ['Luxury', 'Massage'],
    staff: [
        { id: 'st5', name: 'Arun Nayak', role: 'Master Barber', image: 'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?auto=format&fit=crop&q=80&w=200' },
        { id: 'st6', name: 'Kiran Rao', role: 'Colorist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: '5',
    name: 'Rourkela Razors',
    location: 'Rourkela, Odisha',
    address: 'Sector 5, Market Complex',
    rating: 4.4,
    reviewCount: 67,
    // Shaving / Foam / Vintage feel
    thumbnail: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 5,
    availableSeats: 3,
    services: MOCK_SERVICES.slice(0, 4),
    reviews: REVIEWS,
    openTime: '09:30',
    closeTime: '20:30',
    tags: ['Traditional', 'Experienced'],
    staff: [
        { id: 'st7', name: 'Bimal Mohanty', role: 'Barber', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: '6',
    name: 'Berhampur Buzz Cuts',
    location: 'Berhampur, Odisha',
    address: 'New Bus Stand Road',
    rating: 4.6,
    reviewCount: 92,
    // Classic Barber Shop vibe
    thumbnail: 'https://images.unsplash.com/photo-1503951914875-befbb28dd090?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
    ],
    totalSeats: 4,
    availableSeats: 2,
    services: MOCK_SERVICES,
    reviews: REVIEWS,
    openTime: '08:00',
    closeTime: '21:00',
    tags: ['Modern', 'Trendy'],
    staff: [
        { id: 'st8', name: 'Deepak Sethi', role: 'Stylist', image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=200' }
    ]
  }
];