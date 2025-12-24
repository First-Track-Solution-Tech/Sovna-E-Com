// // import React from "react"
// import {  Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// function App() {

//   return (
//     <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//   )
// }

// export default App




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";
import { ProductProvider } from "./components/ProductContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/login" element={<Login />} />
                  {/* <Route path="/register" element={<Register />} /> */}
                </Route>
              </Routes>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
