import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;









// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Wishlist from "./pages/Wishlist";
// import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Register from "./pages/Register";
// import { AuthProvider } from "./components/AuthContext";
// import { CartProvider } from "./components/CartContext";
// import { WishlistProvider } from "./components/WishlistContext";
// import { ProductProvider } from "./components/ProductContext";
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <AuthProvider />
//         <ProductProvider />
//           <CartProvider />
//             <WishlistProvider />
//               <Routes>
//                 <Route path="/" element={<Layout />}>
//                   <Route index element={<Home />} />
//                   <Route path="/products" element={<Products />} />
//                   <Route path="/product/:id" element={<ProductDetails />} />
//                   <Route path="/cart" element={<Cart />} />
//                   <Route path="/wishlist" element={<Wishlist />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/register" element={<Register />} />
//                 </Route>
//               </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
