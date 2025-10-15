
import React, { useState, useEffect, useCallback } from 'react';
import type { View, Product, CartItem, Category } from './types';
import { getProducts, getProductById, getCategories } from './services';
import { Header, ProductDetailHeader, CategoryNav, ProductCard, StarRating, QuantitySelector, SearchIcon, FilterIcon } from './components';

// --- SCREENS / VIEWS ---

interface HomeScreenProps {
  products: Product[];
  categories: Category[];
  onProductClick: (id: string) => void;
}
const HomeScreen: React.FC<HomeScreenProps> = ({ products, categories, onProductClick }) => (
  <div className="pb-8">
    <div className="p-4">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-12 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon className="w-5 h-5"/>
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FilterIcon className="w-5 h-5"/>
        </div>
      </div>
    </div>

    <div className="px-4 mb-6">
      <div className="bg-cover bg-center rounded-lg shadow-lg h-40 flex flex-col justify-center items-start p-6" style={{backgroundImage: "url('https://picsum.photos/seed/sale/800/400')"}}>
        <h2 className="text-white text-2xl font-bold">SUMMER SALE!</h2>
        <p className="text-white text-lg">Up to 50% Off</p>
      </div>
    </div>

    <CategoryNav categories={categories} />

    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick(product.id)} />
        ))}
      </div>
    </div>
  </div>
);

interface ProductDetailScreenProps {
  product: Product;
  onAddToCart: (product: Product, color: string, quantity: number) => void;
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product.colors[0] || '');

    const handleAddToCart = () => {
        onAddToCart(product, selectedColor, quantity);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="p-4">
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
                <div className="flex justify-center mt-4 space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
            </div>
            
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-500 mt-1">Brand: {product.brand}</p>
                
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-3xl font-bold text-blue-600">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && <span className="text-gray-400 line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                          <StarRating rating={product.rating} />
                          <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                      </div>
                      <p className="text-sm text-green-600 font-semibold">In Stock <span className="text-gray-500 font-normal">({product.reviewCount} reviews)</span></p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    {product.colors.length > 0 && (
                        <div className="flex items-center space-x-2">
                            {product.colors.map(color => (
                                <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-transparent'}`} style={{backgroundColor: color}} />
                            ))}
                        </div>
                    )}
                    <QuantitySelector 
                        quantity={quantity}
                        onIncrease={() => setQuantity(q => Math.min(q + 1, product.stock))}
                        onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                    />
                </div>

                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Product Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold text-lg mb-2">Related Products</h3>
                    {/* Placeholder for related products */}
                    <div className="text-center text-gray-500 py-4">Related products would be shown here.</div>
                </div>
            </div>
            
            <div className="sticky bottom-0 bg-white p-4 border-t flex items-center space-x-4">
                <button onClick={handleAddToCart} className="w-full py-3 bg-blue-100 text-blue-600 font-bold rounded-lg hover:bg-blue-200 transition">Add to Cart</button>
                <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">Buy Now</button>
            </div>
        </div>
    );
};

interface CartScreenProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, color: string, quantity: number) => void;
  onRemoveItem: (id: string, color: string) => void;
  onBack: () => void;
}
const CartScreen: React.FC<CartScreenProps> = ({ cart, onUpdateQuantity, onRemoveItem, onBack }) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-4 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-500">Your cart is empty.</p>
                    <button onClick={onBack} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg">Continue Shopping</button>
                </div>
            ) : (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={`${item.id}-${item.selectedColor}`} className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                            <div className="flex-grow ml-4">
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">Color: <span className="w-3 h-3 inline-block rounded-full" style={{backgroundColor: item.selectedColor}}></span></p>
                                <p className="font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                                <QuantitySelector
                                    quantity={item.quantity}
                                    onIncrease={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                                    onDecrease={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                                />
                                <button onClick={() => onRemoveItem(item.id, item.selectedColor)} className="text-xs text-red-500 hover:underline">Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="border-t pt-4 mt-6">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Subtotal</span>
                            <span>₹{subtotal.toLocaleString()}</span>
                        </div>
                        <button className="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}


// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [fetchedProducts, fetchedCategories] = await Promise.all([getProducts(), getCategories()]);
      setProducts(fetchedProducts);
      setCategories(fetchedCategories);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  
  const handleNavigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setView('product');
  };

  const handleNavigateHome = useCallback(() => {
    setSelectedProductId(null);
    setView('home');
  }, []);
  
  const handleNavigateToCart = useCallback(() => {
    setView('cart');
  }, []);

  const handleAddToCart = (product: Product, color: string, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id && item.selectedColor === color);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity, selectedColor: color }];
    });
    alert(`${quantity} x ${product.name} added to cart!`);
  };
  
  const handleUpdateCartQuantity = (id: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id, color);
      return;
    }
    setCart(prevCart => prevCart.map(item => item.id === id && item.selectedColor === color ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (id: string, color: string) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.selectedColor === color)));
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderContent = () => {
    if (isLoading) {
      return <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;
    }
    
    switch (view) {
      case 'product':
        const selectedProduct = products.find(p => p.id === selectedProductId);
        return selectedProduct ? <ProductDetailScreen product={selectedProduct} onAddToCart={handleAddToCart} /> : <div>Product not found</div>;
      case 'cart':
        return <CartScreen cart={cart} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} onBack={handleNavigateHome} />;
      case 'home':
      default:
        return <HomeScreen products={products} categories={categories} onProductClick={handleNavigateToProduct} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 shadow-2xl min-h-screen">
        {view === 'home' && <Header cartItemCount={cartItemCount} onCartClick={handleNavigateToCart} onMenuClick={() => alert('Menu clicked!')} />}
        {view === 'product' && <ProductDetailHeader cartItemCount={cartItemCount} onBack={handleNavigateHome} onCartClick={handleNavigateToCart} />}
        {view === 'cart' && <ProductDetailHeader cartItemCount={cartItemCount} onBack={handleNavigateHome} onCartClick={handleNavigateToCart} />}
        
        <main>
            {renderContent()}
        </main>
    </div>
  );
}
