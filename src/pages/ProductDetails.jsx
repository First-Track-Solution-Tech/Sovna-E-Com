import { useParams } from "react-router-dom";
import { products } from "../components/product";
import TryOnPreview from "./ProductPreview";
import { useCart } from "../components/CartContext";
import { useWishlist } from "../components/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const product = products.find(p => p.id === Number(id));
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} />

      <div>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>

        <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        <button
          onClick={() => addToWishlist(product)}
          disabled={isInWishlist(product.id)}
        >
          {isInWishlist(product.id) ? "Wishlisted" : "Add to Wishlist"}
        </button>

        <TryOnPreview productImage={product.image} />
      </div>
    </div>
  );
};

export default ProductDetails;







// import { useParams } from "react-router-dom";
// import {products} from "../components/product";
// import TryOnPreview from "./ProductPreview";
// import { useCart } from "../components/CartContext";
// import { useWishlist } from "../components/WishlistContext";
// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const { addToWishlist, isInWishlist } = useWishlist();

//   const product = products.find((p) => p.id === Number(id));

//   if (!product) {
//     return <p className="p-6">Product not found</p>;
//   }

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Image */}
//       <div>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-sm mx-auto"
//         />
//       </div>

//       {/* Details */}
//       <div>
//         <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
//         <p className="text-gray-600 mb-2">Color: {product.color}</p>
//         <p className="text-gray-600 mb-2">Size: {product.size}</p>
//         <p className="text-xl font-semibold mb-4">₹{product.price}</p>

//         <div className="flex gap-4">
//           {/* Add to Cart */}
//           <button
//             onClick={() => addToCart(product, 1)}
//             className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
//           >
//             Add to Cart
//           </button>

//           {/* Wishlist */}
//           <button
//             onClick={() => addToWishlist(product)}
//             disabled={isInWishlist(product.id)}
//             className={`px-6 py-2 rounded border ${
//               isInWishlist(product.id)
//                 ? "bg-gray-200 cursor-not-allowed"
//                 : "hover:bg-gray-100"
//             }`}
//           >
//             {isInWishlist(product.id) ? "Wishlisted" : "Add to Wishlist"}
//           </button>
//         </div>

//         {/* Try-On */}
//         <TryOnPreview productImage={product.image} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;









// import { useParams } from "react-router-dom";
// import products from "../data/products";
// import TryOnPreview from "../components/product/TryOnPreview";
// import { useCart } from "../context/CartContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { cart, setCart } = useCart();

//   const product = products.find((p) => p.id === Number(id));

//   if (!product) {
//     return <p className="p-6">Product not found</p>;
//   }

//   const addToCart = () => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Image */}
//       <div>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-sm mx-auto"
//         />
//       </div>

//       {/* Details */}
//       <div>
//         <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
//         <p className="text-gray-600 mb-2">Color: {product.color}</p>
//         <p className="text-gray-600 mb-2">Size: {product.size}</p>
//         <p className="text-xl font-semibold mb-4">₹{product.price}</p>

//         <button
//           onClick={addToCart}
//           className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
//         >
//           Add to Cart
//         </button>

//         {/* Try-On */}
//         <TryOnPreview productImage={product.image} />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
