import { Property } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop_1',
    title: 'The Obsidian Loft',
    description: 'A masterpiece of shadow and light in the heart of the district.',
    price: 4500000,
    location: 'Tribeca, NY',
    image_url: '/images/lux-listing-loft.jpg',
    specs: { beds: 2, baths: 2.5, sqft: 2400 },
    tags: ['Penthouse', 'Industrial'],
  },
  {
    id: 'prop_2',
    title: 'Azure Cliffside',
    description: 'Uninterrupted horizon views meeting minimalist concrete architecture.',
    price: 12800000,
    location: 'Malibu, CA',
    image_url: '/images/lux-listing-villa.jpg',
    specs: { beds: 5, baths: 6, sqft: 6500 },
    tags: ['Oceanfront', 'Modern'],
  },
  {
    id: 'prop_3',
    title: 'Sanctuary Garden',
    description: 'Organic textures blended with high-tech sustainability systems.',
    price: 3200000,
    location: 'Kyoto, JP',
    image_url: '/images/lux-listing-pool.jpg',
    specs: { beds: 3, baths: 3, sqft: 2800 },
    tags: ['Eco', 'Retreat'],
  },
  {
    id: 'prop_4',
    title: 'Skyline Pinnacle',
    description: 'The highest residential point in the city, commanding absolute authority.',
    price: 25000000,
    location: 'Dubai, UAE',
    image_url: '/images/lux-home-hero.jpg',
    specs: { beds: 6, baths: 8, sqft: 9000 },
    tags: ['Skyline', 'Luxury'],
  },
];
