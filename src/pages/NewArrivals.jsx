import React, { useState, useMemo } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const NewArrivals = () => {
  const [sort, setSort] = useState("newest");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8); // For Load More

  // Last 20 products as new arrivals
  const latestProducts = useMemo(() => {
    let data = [...products].slice(-20);

    // Category filter
    if (category !== "all") {
      data = data.filter(
        (item) => item.category?.toLowerCase() === category
      );
    }

    // Sorting
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [sort, category]);

  // Show only visibleCount products
  const visibleProducts = latestProducts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Hero Section */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 text-white p-10 text-center shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            New Arrivals
          </h1>
          <p className="text-lg opacity-90">
            Fresh styles just dropped. Stay ahead of the trend.
          </p>
        </div>

        {/* Filter & Sort (Sticky) */}
        <div className="sticky top-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 z-50 py-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex gap-3 flex-wrap">
              {["all", "men", "women", "accessories"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setVisibleCount(8); // Reset visible products on category change
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${
                      category === cat
                        ? "bg-purple-600 text-white"
                        : "bg-white text-gray-700 hover:bg-purple-100"
                    }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setVisibleCount(8); // Reset visible products on sort
              }}
              className="border rounded-lg px-4 py-2 bg-white shadow-sm"
            >
              <option value="newest">Newest First</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleProducts.map((item) => (
              <div
                key={item.id}
                className="transition transform hover:scale-105 hover:shadow-2xl"
              >
                <ProductCard
                  product={{ ...item, isNew: true }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <h2 className="text-2xl font-semibold mb-2">
              No New Arrivals Yet
            </h2>
            <p>Please check back soon for fresh styles.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < latestProducts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 4)
              }
              className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default NewArrivals;
