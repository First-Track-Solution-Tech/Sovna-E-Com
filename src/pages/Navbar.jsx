import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, User, Search, LogOut } from "lucide-react";
import { useCart } from "../components/CartContext";
import { useWishlist } from "../components/WishlistContext";
import { useAuth } from "../components/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
            FashionStyle
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Navigation Icons and User Menu */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative text-gray-700 hover:text-pink-600 transition-colors">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative text-gray-700 hover:text-pink-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Authentication Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  {/* User Welcome */}
                  <div className="hidden md:flex items-center space-x-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-pink-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Hi, {user.name.split(' ')[0]}
                    </span>
                  </div>

                  {/* Mobile User Icon */}
                  <div className="md:hidden relative text-gray-700">
                    <User className="w-6 h-6" />
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm">Logout</span>
                  </button>

                  {/* Mobile Logout Icon */}
                  <button
                    onClick={handleLogout}
                    className="md:hidden text-gray-700 hover:text-pink-600"
                    title="Logout"
                  >
                    <LogOut className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  {/* Login Button */}
                  <Link
                    to="/login"
                    className="hidden md:block text-gray-700 hover:text-pink-600 transition-colors font-medium"
                  >
                    Login
                  </Link>

                  {/* Sign Up Button */}
                  <Link
                    to="/register"
                    className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors font-medium"
                  >
                    Sign Up
                  </Link>

                  {/* Mobile Login Icon */}
                  <Link
                    to="/login"
                    className="md:hidden text-gray-700 hover:text-pink-600"
                    title="Login"
                  >
                    <User className="w-6 h-6" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden py-3 border-t">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart, Heart, User, Search } from 'lucide-react';
// import { CartContext } from '../../context/CartContext';
// import { WishlistContext } from '../../context/WishlistContext';

// const Navbar = () => {
//   const { cartItems } = useContext(CartContext);
//   const { wishlistItems } = useContext(WishlistContext);
  

//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   const wishlistCount = wishlistItems.length;

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-display font-bold text-primary-600">FashionStore</span>
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
//               Home
//             </Link>
//             <Link to="/products" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
//               Products
//             </Link>
//             <div className="relative group">
//               <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center">
//                 Categories
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 py-2">
//                 <Link to="/products?category=tshirts" className="block px-4 py-2 hover:bg-gray-100">T-Shirts</Link>
//                 <Link to="/products?category=hoodies" className="block px-4 py-2 hover:bg-gray-100">Hoodies</Link>
//                 <Link to="/products?category=jeans" className="block px-4 py-2 hover:bg-gray-100">Jeans</Link>
//                 <Link to="/products?category=ethnic" className="block px-4 py-2 hover:bg-gray-100">Ethnic Wear</Link>
//               </div>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-xl mx-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="search"
//                 placeholder="Search products..."
//                 className="input-field pl-10"
//               />
//             </div>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center space-x-6">
//             <Link to="/wishlist" className="relative text-gray-700 hover:text-primary-600">
//               <Heart className="w-6 h-6" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>
            
//             <Link to="/cart" className="relative text-gray-700 hover:text-primary-600">
//               <ShoppingCart className="w-6 h-6" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
            
//             <button className="text-gray-700 hover:text-primary-600">
//               <User className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;