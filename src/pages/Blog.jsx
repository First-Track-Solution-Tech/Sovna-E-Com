// import React from "react";

// const Blog = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <h1 className="text-4xl font-bold text-center mb-6">
//           Blog
//         </h1>

//         <p className="text-lg text-center max-w-3xl mx-auto mb-12">
//           Discover the latest fashion trends, styling tips, and inspiration to
//           upgrade your wardrobe.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="rounded-xl shadow bg-gray-50 dark:bg-gray-800 p-6">
//             <h3 className="text-xl font-semibold mb-2">
//               Latest Fashion Trends
//             </h3>
//             <p className="text-sm">
//               Stay ahead with seasonal trends, colors, and must-have styles.
//             </p>
//           </div>

//           <div className="rounded-xl shadow bg-gray-50 dark:bg-gray-800 p-6">
//             <h3 className="text-xl font-semibold mb-2">Styling Tips</h3>
//             <p className="text-sm">
//               Learn how to style outfits for casual, office, and special
//               occasions.
//             </p>
//           </div>

//           <div className="rounded-xl shadow bg-gray-50 dark:bg-gray-800 p-6">
//             <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
//             <p className="text-sm">
//               Get updates on our latest collections and exclusive launches.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;




import React from "react";

const Blog = () => {
  return (
       <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-white">

    {/* <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"> */}

      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Blog-Hero-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Trends, inspiration & styling tips curated for modern fashion lovers.
            </p>
          </div>
        </div>
      </div>

      {/* BLOG CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:-translate-y-2 transition">
            <img
              src='/images/Blog-Card1-bg.jpg'
              alt="Fashion Trends"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500">
                Latest Fashion Trends
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Explore seasonal colors, runway looks, and trending outfits.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:-translate-y-2 transition">
            <img
              src='/images/Blog-Card2-bg.jpg'
              alt="Styling Tips"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500">
                Styling Tips
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn how to style outfits for office, casual & parties.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:-translate-y-2 transition">
            <img
              src='/images/Blog-Card3-bg.jpg'
              alt="New Arrivals"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500">
                New Arrivals
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Discover freshly launched collections and exclusive drops.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
