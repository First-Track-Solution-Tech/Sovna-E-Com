import {
  ShoppingBag,
  Search,
  Heart,
  User,
  Menu,
  X,
  Star,
  ChevronRight,
  Truck,
  Shield,
  CreditCard,
 
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"
const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "$24.99",
    originalPrice: "$34.99",
    discount: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    rating: 4.5,
    category: "T-Shirts",
    colors: ["bg-black", "bg-white", "bg-gray-400"],
  },
  {
    id: 2,
    name: "Designer Hoodie",
    price: "$49.99",
    originalPrice: "$59.99",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    rating: 4.7,
    category: "Hoodies",
    colors: ["bg-blue-600", "bg-black", "bg-gray-700"],
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: "$59.99",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    rating: 4.3,
    category: "Jeans",
    colors: ["bg-blue-800", "bg-black"],
  },
  {
    id: 4,
    name: "Ethnic Kurta Set",
    price: "$39.99",
    originalPrice: "$49.99",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    rating: 4.8,
    category: "Ethnic Wear",
    colors: ["bg-white", "bg-blue-300", "bg-amber-100"],
  },
];

const categories = [
  { name: "T-Shirts", count: 45, icon: "👕" },
  { name: "Hoodies", count: 32, icon: "🧥" },
  { name: "Jeans", count: 28, icon: "👖" },
  { name: "Ethnic Wear", count: 56, icon: "👘" },
  { name: "Shirts", count: 38, icon: "👔" },
  { name: "Jackets", count: 24, icon: "🧥" },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-pink-500 text-white text-center py-2">
         🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 h-16">
          <h1 className="text-2xl font-bold text-pink-600">FashionStyle</h1>

          <div className="hidden md:flex items-center space-x-8">
              <Link to ="/" className="block py-2 text-gray-700 hover:text-red-600">Home</Link>
              <Link to ="/products" className="block py-2 text-gray-700 hover:text-red-600">Products</Link>
              <Link to ="/categories" className="block py-2 text-gray-700 hover:text-red-600">Categories</Link>
              <Link to ="/new-arrivals" className="block py-2 text-gray-700 hover:text-red-600">New Arrivals</Link>
              <Link to ="/sale" className="block py-2 text-gray-700 hover:text-red-600">Sale</Link>
               </div>

               <div className="flex items-center space-x-6">
              <button className="hidden md:block relative p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-600" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
              
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="w-5 h-5 text-gray-600" />
              </button>
              
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          
        </div>
      </nav>
         {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue border-t">
            <div className="px-4 py-3 space-y-3">
              <Link to ="/" className="block py-2 text-gray-700 hover:text-red-600">Home</Link>
              <Link to ="/products" className="block py-2 text-gray-700 hover:text-red-600">Products</Link>
              <Link to ="/categories" className="block py-2 text-gray-700 hover:text-red-600">Categories</Link>
              <Link to ="/new-arrivals" className="block py-2 text-gray-700 hover:text-red-600">New Arrivals</Link>
             <Link to ="/sale" className="block py-2 text-gray-700 hover:text-red-600">Sale</Link>
            </div>
          </div>
        )}

            {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Discover Your
              </span>
              <span className="block text-gray-900">Style Statement</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Explore our curated collection of premium fashion wear. From casual tees to ethnic elegance, 
              find your perfect fit with exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-red-500 hover:text-red-600 transition-all">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Browse through our exclusive collections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group bg-gray-50 p-6 rounded-xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-red-50 border border-gray-200 hover:border-red-200 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 group-hover:text-red-600">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-gray-600">Trending this week</p>
            </div>
            <button className="flex items-center text-red-600 font-semibold hover:text-red-700">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.discount}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg hover:bg-red-50 hover:text-red-600">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="flex items-center space-x-2 mb-4">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full border ${color} ${index === 0 ? 'ring-2 ring-red-500' : ''}`}
                      />
                    ))}
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Free Shipping</h3>
              <p className="text-gray-300">Free delivery on orders over $50</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Payment</h3>
              <p className="text-gray-300">100% secure payment methods</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Easy Returns</h3>
              <p className="text-gray-300">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to get special offers and fashion tips</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">FashionStore</span>
              </div>
              <p className="text-gray-400">Your one-stop destination for trendy and affordable fashion.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <Link to ="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link to ="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</Link>
                <Link to ="/about us" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link to ="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <Link to ="/" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
                <Link to ="/shipping policy" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link>
                <Link to="/return" className="text-gray-400 hover:text-white transition-colors">Returns</Link>
                <Link to="/size guide" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
              <p className="text-gray-400">support@fashionstore.com</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 FashionStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;






// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Welcome to FashionStore</h1>
//       <p>Home page content coming soon...</p>
//     </div>
//   );
// };

// export default Home;