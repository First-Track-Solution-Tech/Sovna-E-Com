import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FashionStore</h3>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for trendy and affordable fashion.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
                <Instagram className="w-5 h-5" />
              </a> */}
              <Link to="/" className="text-gray-400 hover:text-white w-5 h-5 ">Facebook</Link>
              <Link to="/" className="text-gray-400 hover:text-white w-5 h-5">Instagram</Link>
              <Link to="/" className="text-gray-400 hover:text-white w-5 h-5">Twitter</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/products?category=tshirts" className="text-gray-400 hover:text-white">T-Shirts</Link></li>
              <li><Link to="/products?category=hoodies" className="text-gray-400 hover:text-white">Hoodies</Link></li>
              <li><Link to="/products?category=jeans" className="text-gray-400 hover:text-white">Jeans</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">123 Fashion Street, Style City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">support@fashionstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get updates on new arrivals and exclusive offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-pink-600 px-6 py-2 rounded-r-lg hover:bg-pink-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FashionStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








// import React from 'react';
// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Company Info */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-display">FashionStore</h3>
//             <p className="text-gray-400 mb-6">
//               Your one-stop destination for trendy and affordable fashion.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//               <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
//               <li><a href="/products?category=tshirts" className="text-gray-400 hover:text-white transition-colors">T-Shirts</a></li>
//               <li><a href="/products?category=hoodies" className="text-gray-400 hover:text-white transition-colors">Hoodies</a></li>
//               <li><a href="/products?category=jeans" className="text-gray-400 hover:text-white transition-colors">Jeans</a></li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-400">123 Fashion Street, Style City</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-gray-400" />
//                 <span className="text-gray-400">support@fashionstore.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="mt-12 pt-8 border-t border-gray-800">
//           <div className="max-w-md mx-auto text-center">
//             <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
//             <p className="text-gray-400 mb-4">Get updates on new arrivals and exclusive offers</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
//               />
//               <button className="bg-primary-600 px-6 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} FashionStore. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;