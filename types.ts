
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  category: string;
  description: string;
  stock: number;
  colors: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

export type View = 'home' | 'product' | 'cart';
