
import type { Product, Category } from './types';
import { FashionIcon, ElectronicsIcon, HomeDecorIcon, ShoesIcon, HealthIcon } from './components';

const products: Product[] = [
  {
    id: '1',
    name: 'SoundBeats X1',
    brand: 'AudioLux',
    price: 9999,
    originalPrice: 12999,
    rating: 4.5,
    reviewCount: 245,
    imageUrl: 'https://picsum.photos/id/1082/400/400',
    category: 'Electronics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Starta Innovacify winlitu amiot tomitomite to initer yag yag no cintext. Sl of citnx tom ciner tiber bengre no citnx.',
    stock: 15,
    colors: ['#000000', '#FFFFFF', '#3b82f6'],
  },
  {
    id: '2',
    name: 'ChronoMaster',
    brand: 'Timekeepers',
    price: 15200,
    rating: 5,
    reviewCount: 180,
    imageUrl: 'https://picsum.photos/id/175/400/400',
    category: 'Fashion',
    description: 'A timeless piece of engineering, the ChronoMaster combines classic design with modern technology for the discerning individual.',
    stock: 25,
    colors: ['#333333', '#e5e7eb'],
  },
  {
    id: '3',
    name: 'Urban Explorer',
    brand: 'PackRight',
    price: 4500,
    rating: 4.8,
    reviewCount: 312,
    imageUrl: 'https://picsum.photos/id/10/400/400',
    category: 'Fashion',
    description: 'Durable, stylish, and spacious. The Urban Explorer backpack is your perfect companion for daily commutes and weekend adventures.',
    stock: 30,
    colors: ['#1f2937', '#4b5563'],
  },
  {
    id: '4',
    name: 'GreenLeaf Monstera',
    brand: 'NatureHome',
    price: 1260,
    rating: 4.9,
    reviewCount: 98,
    imageUrl: 'https://picsum.photos/id/106/400/400',
    category: 'Home Decor',
    description: 'Bring life to your living space with this beautiful, low-maintenance Monstera plant. A touch of nature for any room.',
    stock: 50,
    colors: [],
  },
  {
    id: '5',
    name: 'Runner Pro X',
    brand: 'SwiftFeet',
    price: 8999,
    rating: 4.7,
    reviewCount: 450,
    imageUrl: 'https://picsum.photos/id/21/400/400',
    category: 'Shoes',
    description: 'Experience unparalleled comfort and performance with the Runner Pro X. Designed for athletes who demand the best.',
    stock: 40,
    colors: ['#ef4444', '#10b981', '#ffffff'],
  },
  {
    id: '6',
    name: 'Cozy Knit Throw',
    brand: 'Warmth Co.',
    price: 3200,
    rating: 4.6,
    reviewCount: 155,
    imageUrl: 'https://picsum.photos/id/24/400/400',
    category: 'Home Decor',
    description: 'Wrap yourself in comfort with this ultra-soft knit throw blanket. Perfect for chilly evenings on the couch.',
    stock: 22,
    colors: ['#d1d5db', '#6b7280'],
  },
];

const categories: Category[] = [
  { id: '1', name: 'Fashion', icon: FashionIcon },
  { id: '2', name: 'Electronics', icon: ElectronicsIcon },
  { id: '3', name: 'Home Decor', icon: HomeDecorIcon },
  { id: '4', name: 'Shoes', icon: ShoesIcon },
  { id: '5', name: 'Health', icon: HealthIcon },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products), 500));
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  return new Promise(resolve =>
    setTimeout(() => resolve(products.find(p => p.id === id)), 300)
  );
};

export const getCategories = async (): Promise<Category[]> => {
  return new Promise(resolve => setTimeout(() => resolve(categories), 100));
};
