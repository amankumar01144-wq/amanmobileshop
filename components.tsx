
import React from 'react';
import type { Product, Category } from './types';

// --- ICONS ---
export const MenuIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const SearchIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

export const CartIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-6.991a.75.75 0 0 0-.11-.653 1.01 1.01 0 0 0-.74-.383H5.75M7.5 14.25 6 12m0 0 1.5-2.25M6 12h13.5" />
  </svg>
);

export const FilterIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);

export const BackIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const ShareIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
    </svg>
);

export const HeartIcon = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
);

export const StarIcon = ({ className = 'w-5 h-5', filled = true }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth={1.5} className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

// --- CATEGORY ICONS ---
export const FashionIcon = ({ className = 'w-8 h-8' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5" />
  </svg>
);
export const ElectronicsIcon = ({ className = 'w-8 h-8' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-1.621-.87a3 3 0 0 1-.879-2.122v-1.007M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
export const HomeDecorIcon = ({ className = 'w-8 h-8' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);
export const ShoesIcon = ({ className = 'w-8 h-8' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
  </svg>
);
export const HealthIcon = ({ className = 'w-8 h-8' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);


// --- UI COMPONENTS ---

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < Math.round(rating)} className="text-yellow-400 w-4 h-4" />
      ))}
    </div>
  );
};

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}
export const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onMenuClick }) => {
  return (
    <header className="bg-white sticky top-0 z-10 p-4 flex items-center justify-between shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">ShopNow</h1>
        <div className="flex items-center space-x-4">
            <div className="relative">
                <button onClick={onCartClick} className="relative text-gray-600">
                    <CartIcon className="w-7 h-7" />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </div>
            <button onClick={onMenuClick} className="text-gray-600">
                <MenuIcon className="w-7 h-7" />
            </button>
        </div>
    </header>
  );
};

interface ProductHeaderProps {
    cartItemCount: number;
    onBack: () => void;
    onCartClick: () => void;
}
export const ProductDetailHeader: React.FC<ProductHeaderProps> = ({ cartItemCount, onBack, onCartClick }) => (
    <header className="bg-white sticky top-0 z-10 p-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="text-gray-700">
            <BackIcon className="w-7 h-7" />
        </button>
        <div className="flex items-center space-x-5 text-gray-700">
            <button><ShareIcon className="w-6 h-6" /></button>
            <button><HeartIcon className="w-6 h-6" /></button>
            <div className="relative">
                <button onClick={onCartClick} className="relative">
                    <CartIcon className="w-7 h-7" />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </div>
        </div>
    </header>
);

interface CategoryNavProps {
    categories: Category[];
}
export const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => (
    <nav className="bg-white p-4">
        <div className="flex justify-around items-center text-center">
            {categories.map((cat) => (
                <div key={cat.id} className="flex flex-col items-center space-y-2 text-gray-600">
                    <div className="p-3 bg-gray-100 rounded-full">
                        <cat.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <span className="text-xs font-medium">{cat.name}</span>
                </div>
            ))}
        </div>
    </nav>
);

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div onClick={onClick} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-md text-gray-800 truncate">{product.name}</h3>
        <div className="flex items-center mt-2">
          <StarRating rating={product.rating} />
          <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-lg font-bold text-gray-900 mt-2">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

interface QuantitySelectorProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => (
    <div className="flex items-center space-x-4">
        <button onClick={onDecrease} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-xl hover:bg-gray-100">-</button>
        <span className="font-bold text-lg">{quantity}</span>
        <button onClick={onIncrease} className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 text-xl hover:bg-gray-100">+</button>
    </div>
);
