import { useParams } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const { categoryName } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        {categoryName}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Category;
