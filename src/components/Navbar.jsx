// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

// const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleUserClick = () => {
//     if (!user) navigate("/login");
//     else setUserMenuOpen(!userMenuOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <header>
//       <nav className="bg-white shadow sticky top-0 z-50">

//         {/* TOP BANNER */}
//         <div className="bg-pink-500 text-white text-center text-sm p-2">
//            🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
//         </div>

//         {/* MAIN NAVBAR */}
//         <div className="flex items-center justify-between px-6 py-3">

//           {/* LOGO */}
//           <Link to="/" className="text-2xl font-bold text-pink-600">
//             FashionStyle
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-10">
//             <Link to="/" className="hover:text-pink-600">Home</Link>
//             <Link to="/products" className="hover:text-pink-600">Products</Link>

//             {/* CATEGORIES DROPDOWN */}
//             <div className="relative group">
//               <span className="cursor-pointer hover:text-pink-600">
//                 Categories
//               </span>
//               <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//                 <Link to="/category/T-Shirts" className="block px-4 py-2 hover:bg-gray-100">T-Shirts</Link>
//                 <Link to="/category/Hoodies" className="block px-4 py-2 hover:bg-gray-100">Hoodies</Link>
//                 <Link to="/category/Jeans" className="block px-4 py-2 hover:bg-gray-100">Jeans</Link>
//                 <Link to="/category/Ethnic Wear" className="block px-4 py-2 hover:bg-gray-100">Ethnic Wear</Link>
//               </div>
//             </div>

//             <Link to="/sale" className="hover:text-pink-600">Sale</Link>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="flex items-center gap-3">

//             <Link to="/wishlist" className="relative">
//               <Heart />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             <Link to="/cart" className="relative">
//               <ShoppingBag />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* USER */}
//             <div className="relative">
//               <button onClick={handleUserClick}>
//                 <User />
//               </button>

//               {user && userMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
//                   <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
//                     Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t px-6 py-4 space-y-2">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <p className="font-semibold">Categories</p>
//           <Link to="/category/T-Shirts" className="block pl-4">T-Shirts</Link>
//           <Link to="/category/Hoodies" className="block pl-4">Hoodies</Link>
//           <Link to="/category/Jeans" className="block pl-4">Jeans</Link>
//           <Link to="/category/Ethnic Wear" className="block pl-4">Ethnic Wear</Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";


// const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleUserClick = () => {
//     if (!user) {
//       navigate("/login"); // 🔐 redirect to login
//     } else {
//       setUserMenuOpen(!userMenuOpen); // 👤 open profile menu
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//     window.location.reload();
//   };

//   return (
//     <header>
//       <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

//         {/* 🔔 Top Banner */}
//         <div className="bg-pink-500 text-white text-center text-sm p-2">
//           🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
//         </div>

//         {/* 🔹 Main Navbar */}
//         <div className="flex items-center justify-between px-4 py-3">

//           {/* LOGO */}
//           <Link to="/" className="text-2xl font-bold text-pink-600">
//             FashionStyle
//           </Link>

//           {/* CENTER MENU (DESKTOP) */}
//           <div className="hidden md:flex items-center gap-10">
//             <div className="flex items-center space-x-6 text-gray-700">
//               <Link to="/" className="hover:text-pink-600">Home</Link>
//               <Link to="/products" className="hover:text-pink-600">Products</Link>
//               <Link to="/categories" className="hover:text-pink-600">Categories</Link>
//               <Link to="/new-arrivals" className="hover:text-pink-600">New Arrivals</Link>
//               <Link to="/sale" className="hover:text-pink-600">Sale</Link>
//             </div>

//             {/* Search */}
//             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search products"
//                 className="bg-transparent ml-2 w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* RIGHT ICONS */}
//           <div className="flex items-center gap-2">

//             {/* Wishlist */}
//             <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
//               <Heart className="w-5 h-5 text-gray-600" />
//               {wishlistCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {wishlistCount}
//                 </span>
//               )}
//             </Link>

//             {/* Cart */}
//             <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
//               <ShoppingBag className="w-5 h-5 text-gray-600" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             {/* USER ICON */}
//             <div className="relative">
//               <button
//                 onClick={handleUserClick}
//                 className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               >
//                 <User className="w-5 h-5 text-gray-600" />
//               </button>

//               {/* PROFILE DROPDOWN (only when logged in) */}
//               {user && userMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
//                   <button
//                     onClick={() => navigate("/profile")}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Profile
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X /> : <Menu />}
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* 📱 MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow border-t px-6 py-4 space-y-3">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/categories">Categories</Link>
//           <Link to="/new-arrivals">New Arrivals</Link>
//           <Link to="/sale">Sale</Link>
//         </div>
//       )}
//     </header>
//   );
// };

//  export default Navbar;









import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header>
      <nav className="bg-white/90 backdrop-blur shadow sticky top-0 z-50">

        {/* 🔔 Top Banner */}
        <div className="bg-pink-500 text-white text-center text-sm p-2">
          🎉 Exclusive Launch Sale! Get 30% OFF on all new arrivals. Limited time offer.
        </div>

        {/* 🔹 Main Navbar */}
        <div className="flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-pink-600">
            FashionStyle
          </Link>

          {/* CENTER MENU (DESKTOP) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center space-x-6">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/new-arrivals">New Arrivals</Link>
              <Link to="/sale">Sale</Link>
            </div>

            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent ml-2 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5 text-gray-600" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* USER MENU */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                  {user ? (
                    <>
                      <button
                        onClick={() => navigate("/profile")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow border-t px-6 py-4 space-y-3">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/sale">Sale</Link>
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
