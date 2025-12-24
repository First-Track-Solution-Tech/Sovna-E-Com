import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Login from "./Login";
import Register from "./Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* Add login and register routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;











// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Products from '../pages/Products';
// import ProductDetail from '../pages/ProductDetail';
// import Cart from '../pages/Cart';
// import Wishlist from '../pages/Wishlist';
// import NotFound from '../pages/NotFound';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/product/:id" element={<ProductDetail />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/wishlist" element={<Wishlist />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;